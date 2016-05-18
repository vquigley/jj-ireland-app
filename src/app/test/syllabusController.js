import angular from 'angular';

angular.module("app")
  .controller(
    'TestSyllabus', 
    ['syllabus', 
     'common', 
     '$location', 
     '$rootScope',   
     function (
       syllabus, 
       common, 
       $location, 
       $rootScope) {
         
  let vm = this;
  vm.item = {};
  vm.init = init;
  vm.questionData = [];
  vm.answerOptions = [];
  vm.next = next;
  vm.itemIndex = 0;
  
  function init() {
    loadQuestionData();
    loadItem();
  }
  
  function loadQuestionData() {
    let belts = getRequestedBelts();

    belts.forEach (function (belt) {
      let beltData = loadBelt(belt);

      beltData.forEach(function (section) {

        section.items.forEach(function (item) {

          var copy = item; // This may not be the right approach.
          copy.color = belt;
          copy.title = section.title;
          
          vm.questionData.push(copy);
          
          if (item.type && item.type === "translation") {
            vm.answerOptions.push(item.english);
            vm.answerOptions.push(item.japanese);
          }
          else {
            vm.answerOptions.push(item.value); 
          }
        });
      })
    });
    
    vm.questionData = common.shuffleArray(vm.questionData);
    vm.answerOptions = common.shuffleArray(vm.answerOptions);
  }
  
  function getRequestedBelts() {
    return $location.search().belts.split(',');
  }
  
  function loadBelt(belt) {
    return syllabus.get(belt);
  }
  
  function loadItem() {
    vm.selected = "";
    vm.item = vm.questionData[vm.itemIndex];
  }
  
  function finish(){
    $rootScope.questionData = vm.questionData;
    $location.path('/test/review')
  }
  
  function next() {
    vm.questionData[vm.itemIndex].selected = vm.selected;
    
    if (++vm.itemIndex >= vm.questionData.length)
      return finish();
      
    loadItem();
  }
  
  function showAnswer() {
    
    let answer = ""
    if (vm.item.type === "translation") {
      answer = vm.questionData[vm.itemIndex].japanese;
    }
    else {
      answer = vm.questionData[vm.itemIndex].value;
    }
    
    vm.selected = vm.answerOptions[vm.answerOptions.indexOf(answer)];
  }
}]);