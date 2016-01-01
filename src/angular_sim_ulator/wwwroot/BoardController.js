(function () {
	'use strict';

	angular
	  .module('app')
	  .controller('BoardController', BoardController);


	BoardController.$inject = ['CurrentBuildingService', 'BuildingObjects', 'InitialBoardService'];

	function BoardController(currentBuildingService, buildingObjects, initialBoardService) {
		var vm = this;
		vm.board = [];
		vm.bulldozerMode = false;
		vm.cellClass = cellClass;
		vm.cellClick = cellClick;
		vm.cellValue = cellValue;
		vm.emptyCellvalue = '';
		vm.errorMessage = '';
		vm.jsonifiedBoard = '';
		vm.showJson = showJson;

		init();


		function cellClick(row, col) {
		    if (!vm.bulldozerMode) {
		        var newBuilding = currentBuildingService.getValue();
		        if (!isCollision(row, col, newBuilding.numCellsX, newBuilding.numCellsY)) {
                    // Add the new building
		            vm.board[row][col] = angular.copy(newBuilding);
		            var activeCell = vm.board[row][col];

                    // Link the child cells
		            for (var i = 0; i < activeCell.numCellsX; i++) {
		                for (var j = 0; j < activeCell.numCellsY; j++) {
		                    if (0 !== i || 0 !== j) {
		                        var newRow = parseInt(row) + parseInt(i);
		                        var newCol = parseInt(col) + parseInt(j);
		                        if (activeCell.childCells) {
                                    // Add child cell to array
		                            activeCell.childCells.push([newRow, newCol]);
		                        } else {
                                    // Create new, 1-member array
		                            activeCell.childCells = [[newRow, newCol]];
		                        }
		                        vm.board[newRow][newCol] = { "masterCell": [row, col] };
		                    }
		                }
		            }
		            vm.errorMessage = "";
		        } else {
		            vm.errorMessage = "You can't place that building there";
		        }
		    } else {
		        // Bulldoze the building!
		        var activeCell = vm.board[row][col];

		        if (activeCell.masterCell) {
		            // Switch to the master cell of the building
		            row = activeCell.masterCell[0];
                    col = activeCell.masterCell[1];
                    activeCell = vm.board[row][col];
		        }
		        
		        if (activeCell.childCells) {
		            angular.forEach(activeCell.childCells,
                        function (value, key) {
                            eraseCell(value[0],value[1]);
                        }
                    );
		        }
		        eraseCell(row, col);
		        vm.errorMessage = "";
		    }
		}

		function showJson() {
		    if (vm.jsonifiedBoard === '') {
		        vm.jsonifiedBoard = angular.toJson(vm.board);
		    } else {
		        vm.jsonifiedBoard = '';
		    }
		}

		function cellClass(row, col) {
		    var retVal = '';
		    var activeCell = vm.board[row][col];

		    if (activeCell.cellStyle) {
		        retVal = vm.board[row][col].cellStyle;
		    } else if (activeCell.masterCell) {
		        retVal = vm.board[activeCell.masterCell[0]][activeCell.masterCell[1]].cellStyle;
		    }

		    return retVal;
		}

		function cellValue(row, col) {
			var retVal = vm.emptyCellvalue;
			var activeCell = vm.board[row][col];

			if (activeCell.tileText) {
			    retVal = activeCell.tileText;
			}
			return retVal;
		}

		function init() {
		    var initialBoard = initialBoardService.getInitialBoard();
		    vm.board = initialBoard;
		}

		function eraseCell(row, col) {
		    vm.board[row][col] = vm.emptyCellvalue;
		}

		function isCollision(row, col, sizeX, sizeY) {
			for (var i = 0; i < sizeX; i++) {
				for (var j = 0; j < sizeY; j++) {
					var curValue = vm.board[parseInt(row) + parseInt(i)][parseInt(col) + parseInt(j)];
					if (curValue !== vm.emptyCellvalue) {
						return true;
					}
				}
			}
			return false;
		}
	}
})();
