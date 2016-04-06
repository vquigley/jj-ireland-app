import angular from 'angular';

angular.module("app").controller('LearnBelts', ['syllabus', 'common', '$location', '$mdDialog', function (syllabus, common, $location, $mdDialog) {
   var vm = this;
   vm.belts = [];
   vm.start = start;
   
   init();
   
   function init() {
     syllabus.supportedBelts()
      .then(function (result){       
        vm.belts = result;
      })
      .catch(errorReport);
   }
   
   function start() {
     var beltsSelected = "";
     
     vm.belts.forEach(function (belt) {
       if (belt.selected){
         beltsSelected += belt.id + ",";
       }
     })
     
     if (beltsSelected.length === 0) {
       return errorReport({message:"Please select at least one belt"});
     }
     
     beltsSelected = beltsSelected.slice(0, beltsSelected.length - 1);
     $location.path("/learn/syllabus").search("belts=" + beltsSelected)
   }
   
   function errorReport(err) {
     common.showError(err.message);
   }
}]);