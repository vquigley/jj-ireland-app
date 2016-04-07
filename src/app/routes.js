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
    })
    .state('LearnStart', {
      url: "/learnStart",
      template: require('./learn/learnStart.html'),
      ncyBreadcrumb: {
        label: 'Learn',
        parent: 'Home'
      }
    })
    .state('LearnBelts', {
      url: "/learn/belts",
      template: require('./learn/learnBelts.html'),
      ncyBreadcrumb: {
        label: 'Belts',
        parent: 'LearnStart'
      }
    })
    .state('LearnSyllabus', {
      url: "/learn/syllabus",
      template: require('./learn/learnSyllabus.html'),
      controller: 'LearnSyllabus',
      ncyBreadcrumb: {
        label: '{{current}}',
        parent: 'LearnBelts'
      }
    }).state('LearnFinish', {
      url: "/learn/finish",
      template: require('./learn/learnFinish.html'),
      controller: 'LearnBelts',
      ncyBreadcrumb: {
        label: 'Finish',
        parent: 'LearnBelts'
      }
    });
}]);