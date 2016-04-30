import angular from 'angular';

angular.module("app").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {  
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('Home', {
      url: "/home",
      template: require('./app.html'),
      ncyBreadcrumb: {
        label: 'Home'
      }
    });
}]);