(function() {
'use strict';

angular
  .module('app')
  .factory('BuildingObjects', BuildingObjectFactory);

function BuildingObjectFactory() {
  var currentBuilding = "";
  return [
    {"name": "Standard Residental",
     "shortName": "Res",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Rs",
     "population": 1836,
     "extraInfo": ['', 'population', '']
    },
    {"name": "Road",
     "shortName": "Road",
     "numCellsX": 1,
     "numCellsY": 1,
     "cellStyle": "cell-road",
     "tileText": "O"
    },
    {"name": "Factory",
     "shortName": "Factory",
     "numCellsX": 3,
     "numCellsY": 3,
     "cellStyle": "cell-factory",
     "tileText": "F1"
    }
  ];
}
})();
