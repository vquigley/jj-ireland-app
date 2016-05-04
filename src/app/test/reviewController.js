import angular from 'angular';

angular.module("app")
  .controller(
    'ReviewSyllabus', 
    ['common', 
     '$rootScope', 
     '$location', 
     function (
       common, 
       $rootScope, 
       $location) {
         
  let vm = this;
  vm.questionData = $rootScope.questionData;
  vm.init = init;
  vm.numberCorrect = 0;
  

  function init() {
      vm.questionData.forEach(function (data) {
        if (data.type === "translation") {
          if (data.selected === data.japanese)
            ++vm.numberCorrect;
        }
        else if (data.selected === data.value) {
          ++vm.numberCorrect;
        }
      });
  }
}]);