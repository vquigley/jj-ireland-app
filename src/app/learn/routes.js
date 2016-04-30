import angular from 'angular';

require('./learnSyllabusController');

angular.module("app").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('LearnStart', {
      url: "/learn",
      template: require('./learnStart.html'),
      ncyBreadcrumb: {
        label: 'Learn',
        parent: 'Home'
      }
    })
    .state('LearnBelts', {
      url: "/learn/belts",
      template: require('./learnBelts.html'),
      ncyBreadcrumb: {
        label: 'Belts',
        parent: 'LearnStart'
      }
    })
    .state('LearnSyllabus', {
      url: "/learn/syllabus",
      template: require('./learnSyllabus.html'),
      controller: "LearnSyllabus",
      ncyBreadcrumb: {
        label: '{{current}}',
        parent: 'LearnBelts'
      }
    }).state('LearnFinish', {
      url: "/learn/finish",
      template: require('./learnFinish.html'),
      ncyBreadcrumb: {
        label: 'Finish',
        parent: 'LearnBelts'
      }
    });
}]);