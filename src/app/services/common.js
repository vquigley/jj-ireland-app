import angular from 'angular';

angular.module("app").factory('common', ['$mdDialog', function ($mdDialog) {
  let service = {};
  
  service.showError = showError;
  service.shuffleArray = shuffleArray;
  
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
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
    
  return service;
}]);
