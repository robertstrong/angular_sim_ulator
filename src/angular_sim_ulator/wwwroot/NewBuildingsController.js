(function() {
'use strict';

angular
  .module('app')
  .controller('NewBuildingsController', NewBuildingsController);


NewBuildingsController.$inject = ['CurrentBuildingService', 'BuildingObjects'];

function NewBuildingsController(currentBuildingService, buildingObjects) {
  var vm = this;
  vm.allBuildings = buildingObjects;
  vm.currentValue = currentBuildingService.getValue();
  vm.modify = modify;
  
  init();
  
  function init() {
    if (vm.currentValue === null) {
      vm.currentValue = vm.allBuildings[0];
      vm.modify();
    }
  }
  
  function modify() {
    currentBuildingService.setValue(vm.currentValue);
  }
}
})();
