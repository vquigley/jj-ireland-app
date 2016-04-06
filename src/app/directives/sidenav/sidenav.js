import angular from 'angular';

angular.module("app").directive(
  'jjSidenav', 
  ["$mdSidenav", "$timeout", function($mdSidenav, $timeout) {
  return {
    template: require('./sideNav.html'),
    scope: {
        menuItems: '=',
        current: '=',
        color: "@color"
    },
    link: function (scope, element, attrs) {
      scope.toggleMenu = toggleMenu;
      
      function toggleMenu() {
        toggleIcon();
        toggleSideNav();
      };
      
      function toggleIcon() {
        var icon = element[0].getElementsByClassName('menu-icon');
        angular.element(icon).toggleClass('active');
        element.find('div').removeClass('no-animation');
      }
      
      function toggleSideNav() {
          $mdSidenav('left').toggle();
      }
    }
  };
}]);