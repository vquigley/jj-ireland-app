import angular from 'angular';

angular.module("app").factory('syllabus', ['$q', function ($q) {
  let service = {};
  
  service.supportedBelts = supportedBelts;
  service.get = get;
  service.white = white;
  service.yellow = yellow;
  service.orange = orange;
  
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
          },
          {
            name:"Orange",
            color:"orange",
            id:"orange"
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
  
  function orange() {
    return require('./belts/orange.json');
  }
  
  return service;
}]);