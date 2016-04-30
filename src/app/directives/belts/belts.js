import angular from 'angular';

angular.module("app").directive('selectBelts', ['syllabus', 'common', '$location', '$mdDialog', '$parse', function (syllabus, common, $location, $mdDialog, $parse) {
   return {
       'template':require('./belts.html'),
       'scope': {
          'action': "@action"
        },
        'link': link
   };
   
   function link(scope, element, attrs) {
    var vm = scope;
    vm.belts = [];
    vm.start = start;
    vm.path = attrs.path;
    
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
        $location.path(vm.path).search("belts=" + beltsSelected)
    }
    
    function errorReport(err) {
        common.showError(err.message);
    }
 }
}]);