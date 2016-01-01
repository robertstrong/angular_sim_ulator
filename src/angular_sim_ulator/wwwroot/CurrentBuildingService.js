(function() {
'use strict';

angular
  .module('app')
  .factory('CurrentBuildingService', CurrentBuildingService);

function CurrentBuildingService() {
  var currentBuilding = null;
  return {
    getValue: function () {
      return currentBuilding;
    },
    setValue: function (building) {
      currentBuilding = building;
    }
  };
}
})();
