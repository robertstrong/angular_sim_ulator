(function() {
'use strict';

angular
  .module('app')
  .factory('BuildingObjects', BuildingObjectFactory);

function BuildingObjectFactory() {
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
     "numCellsX": 2,
     "numCellsY": 3,
     "cellStyle": "cell-factory",
     "tileText": "F1"
    },
    {"name": "Basic Fire Station",
     "shortName": "Fire",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-fire",
     "tileText": "F"
    },
    {"name": "Peaceful Park",
     "shortName": "PePark (25%)",
     "numCellsX": 1,
     "numCellsY": 2,
     "cellStyle": "cell-park",
     "tileText": "Pp"
    },
    {"name": "Reflecting Pool Park",
     "shortName": "RpPark (20%)",
     "numCellsX": 1,
     "numCellsY": 2,
     "cellStyle": "cell-park",
     "tileText": "Pr"
    },
    {"name": "Holiday Gift Market",
     "shortName": "HgPark (20%)",
     "numCellsX": 3,
     "numCellsY": 3,
     "cellStyle": "cell-park",
     "tileText": "Pg"
    }
];
}
})();
