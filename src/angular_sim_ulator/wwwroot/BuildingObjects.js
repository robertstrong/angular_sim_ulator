(function() {
'use strict';

angular
  .module('app')
  .factory('BuildingObjects', BuildingObjectFactory);

function BuildingObjectFactory() {
  return [
    {"name": "Standard Residental",
     "shortName": "StdRes",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Rs",
     "population": 1836,
     "extraInfo": ['', 'population', '']
    },
    {"name": "Paris Residental",
     "shortName": "ParRes",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Rp",
     "population": 1836,
     "extraInfo": ['', 'population', '']
    },
    {"name": "London Residental",
     "shortName": "LdnRes",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Rl",
     "population": 1836,
     "extraInfo": ['', 'population', '']
    },
    {"name": "Tokyo Residental",
     "shortName": "TokRes",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Rt",
     "population": 1836,
     "extraInfo": ['', 'population', '']
    },
    {"name": "Epic Residental",
     "shortName": "EpcRes",
     "numCellsX": 2,
     "numCellsY": 2,
     "cellStyle": "cell-residential",
     "tileText": "Re",
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
    {"name": "Basic Factory",
     "shortName": "Factory2",
     "numCellsX": 2,
     "numCellsY": 3,
     "cellStyle": "cell-factory",
     "tileText": "F2"
    },
    {"name": "Mass Factory",
     "shortName": "Factory3",
     "numCellsX": 2,
     "numCellsY": 3,
     "cellStyle": "cell-factory",
     "tileText": "F3"
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
