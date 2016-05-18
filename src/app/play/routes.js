import angular from 'angular';

require('./syllabusController');

angular.module("app").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('playStart', {
      url: "/play",
      template: require('./start.html'),
      ncyBreadcrumb: {
        label: 'Play',
        parent: 'Home'
      }
    })
    .state('playBelts', {
      url: "/play/belts",
      template: require('./belts.html'),
      ncyBreadcrumb: {
        label: 'Belts',
        parent: 'playStart'
      }
    })
    .state('playSyllabus', {
      url: "/play/syllabus",
      template: require('./syllabus.html'),
      ncyBreadcrumb: {
        label: 'Selected Belts',
        parent: 'playBelts'
      }
    }).state('playFinish', {
      url: "/play/finish",
      template: require('./finish.html'),
      ncyBreadcrumb: {
        label: 'Finish',
        parent: 'playBelts'
      }
    });
}]);