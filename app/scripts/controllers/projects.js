'use strict';
angular.module('deathping1994githubioApp')
  .controller('ProjectCtrl', function ($scope,$http) {
    $scope.projects;
    $http.get("https://api.github.com/users/deathping1994/repos")
    .then(function(res){
      $scope.projects=res.data;
    });
    $scope.sortproject = function(project) {
      // console.log(project.updated_at);

        var date = new Date(project.updated_at);
// console.log(date);
        return -date;
    };

    $scope.contributions=[{name:"Air Mozilla",
                          url:"https://github.com/mozilla/airmozilla",
                          description:"AirMozilla is the video broadcasting site for the Mozilla project"},
                          {name:"Apache Concerted",
                          url:"https://github.com/apache/incubator-concerted",
                          description:"Concerted is a next generation big data engine aimed at supporting massive in memory reads for OLAP support.The engine is flexible, with no single point of entry and flexibility to use APIs suited for each use case with full scalability.Concerted allows applications to use the native APIs to have the flexibility to store, access, scale data in memory on demand. No auxillary infrastructure is needed.Concerted implements its own locking manager and transaction manager utilizing the object oriented model,thus greatly simplifying the management of processes like commit and abort, depending a lot on the OS's native support."},
                          {name:"Mozilla Treeherder",
                          url:"https://github.com/mozilla/treeherder",
                          description:"A reporting dashboard & service for managing CI data for commits to Mozilla projects"
                          },
                          {name:"Moz-Games",
                          url:"https://github.com/mozilla/moz-games",
                          description:"Mozilla Games site"}
                        ];
  });
