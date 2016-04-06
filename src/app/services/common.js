import angular from 'angular';

angular.module("app").factory('common', ['$mdDialog', function ($mdDialog) {
  let service = {};
  
  service.showError = showError;
  
  function showError (message) {
     console.log(message);
     
    let alert = $mdDialog.alert({
      title: 'Error',
      textContent: message,
      ok: 'Close'
    });
    
    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
    
  return service;
}]);
