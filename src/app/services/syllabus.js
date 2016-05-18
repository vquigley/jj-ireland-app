import angular from 'angular';

angular.module("app").factory('syllabus', ['$q', function ($q) {
  let service = {};
  
  service.supportedBelts = supportedBelts;
  service.get = get;
  service.white = white;
  service.yellow = yellow;
  
  function supportedBelts() {
    return $q(function(resolve, reject) {
      resolve([
          {
            name:"White",
            color:"white",
            id:"white",
          },
          {
            name:"Yellow",
            color:"yellow",
            id:"yellow"
          }
        ]
      );
    });
  }
  
  function get(color) {
    return service[color]();
  }
  
  function white() {
    return require('./belts/white.json');
  }
  
  function yellow() {
    return require('./belts/yellow.json');
  }
  
  return service;
}]);