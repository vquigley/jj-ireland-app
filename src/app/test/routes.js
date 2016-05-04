import angular from 'angular';

require('./syllabusController');
require('./reviewController');

angular.module("app").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('testStart', {
      url: "/test",
      template: require('./start.html'),
      ncyBreadcrumb: {
        label: 'Test',
        parent: 'Home'
      }
    })
    .state('testBelts', {
      url: "/test/belts",
      template: require('./belts.html'),
      ncyBreadcrumb: {
        label: 'Belts',
        parent: 'testStart'
      }
    })
    .state('testSyllabus', {
      url: "/test/syllabus",
      template: require('./syllabus.html'),
      ncyBreadcrumb: {
        label: '{{current}}',
        parent: 'testBelts'
      }
    }).state('testReview', {
      url: "/test/review",
      template: require('./review.html'),
      ncyBreadcrumb: {
        label: 'Review',
        parent: 'testBelts'
      }
    });
}]);