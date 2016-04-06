import angular from 'angular';

angular.module("app").factory('syllabus', ['$q', function ($q) {
  let service = {};
  
  service.supportedBelts = supportedBelts;
  service.get = get;
  service.white = white;
  
  function supportedBelts() {
    return $q(function(resolve, reject) {
      resolve([{
          name:"White",
          color:"white",
          id:"white"
        },{
          name:"Yellow",
          color:"Yellow",
          id:"yellow"
        },{
          name:"Orange",
          color:"orange",
          id:"orange"
        }]
      );
    });
  }
  
  function get(color) {
    return service[color]();
  }
  
  function white() {
    return require('./belts/white.json');
  }
  
  return service;
}]);