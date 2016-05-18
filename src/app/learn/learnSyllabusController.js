import angular from 'angular';

angular.module("app").controller('LearnSyllabus', ['syllabus', 'common', '$location', '$q', function (syllabus, common, $location, $q) {
  let vm = this;
  vm.itemHeading  = "";
  vm.item = {};
  vm.next = loadNextItem;
  vm.init = init;
  
  let belts = [];
  let currentBeltData = [];
  let currentSectionData = [];
  
  let currentBeltIndex = -1;
  let currentSectionIndex = -1;
  let currentItemIndex = -1;   
  
  function init() {
    getRequestedBelts()
    loadNextBelt()
    loadNextSection();
    loadNextItem();
  }
  
  function getRequestedBelts() {
    belts = $location.search().belts.split(',');
  }
  
  function loadNextBelt() {
    ++currentBeltIndex;
    
    if (currentBeltIndex >= belts.length) {
      return finish();
    }
    
    currentBeltData = syllabus.get(belts[currentBeltIndex]);
  }
  
  function loadNextSection() {
    ++currentSectionIndex;
    
    if (currentSectionIndex >= currentBeltData.length) {
      currentSectionIndex = 0;
      loadNextBelt();
    }
    
    vm.itemHeading = currentBeltData[currentSectionIndex].title;
    currentSectionData = currentBeltData[currentSectionIndex].items;
  }
  
  function loadNextItem() { 
    ++currentItemIndex;
    
    if (currentItemIndex >= currentSectionData.length) {
      currentItemIndex = 0;
      loadNextSection();
    }
    
    vm.item = currentSectionData[currentItemIndex];
  }
  
  function finish(){
   $location.path('/learn/finish')
  }
  
}]);