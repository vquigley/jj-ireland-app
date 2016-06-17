import angular from 'angular';

angular.module("app")
  .controller(
    'PlaySyllabus', 
    ['syllabus', 
     'common', 
     '$scope', 
     '$location', 
     '$q', 
     '$mdMedia', 
     '$mdDialog',     
     function (
       syllabus, 
       common, 
       $scope, 
       $location, 
       $q, 
       $mdMedia, 
       $mdDialog) {
         
  let vm = this;
  vm.itemHeading  = "";
  vm.item = {};
  vm.init = init;
  vm.questionData = [];
  vm.answers = [];
  vm.answer = answer;
  vm.answerState = "none";
  vm.next = next;
  vm.guess = "";
  vm.showAnswer = showAnswer;
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
            vm.answers.push(item.english);
            vm.answers.push(item.japanese);
          }
          else if (!item.type) {
            vm.answers.push(item.value); 
          }
        });
      })
    });
    
    vm.questionData = common.shuffleArray(vm.questionData);
    vm.answers = common.shuffleArray(vm.answers);
  }
  
  function getRequestedBelts() {
    return $location.search().belts.split(',');
  }
  
  function loadBelt(belt) {
    return syllabus.get(belt);
  }
  
  function loadItem() {    
    vm.answerState = "none";
    vm.selected = "";
    vm.guess = "";
    vm.item = vm.questionData[vm.itemIndex];
  }
  
  function finish(){
   $location.path('/play/finish')
  }
  
  function answer () {
    if (vm.item.type === "translation") {
      answerTranslation();
    }
    else if (vm.item.type === "question") {
      answerQuestion();
    }
    else {
      answerAnatomy();
    }    
  }
  
  function answerAnatomy (){
    if (vm.selected === vm.item.value) {
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
  }

  function answerQuestion (){
    if (vm.guess === vm.item.value) {
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
  }
  
  function answerTranslation () {
    if (vm.selected === vm.item.japanese) {
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
  }
  
  function correctAnswer(ev) {
    vm.answerState = "correct";
  }
  
  function wrongAnswer(ev) {
    vm.answerState = "incorrect";
  }
  
  function next() {
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
    
    vm.answerState='correct'

    if (vm.item.type === "question") {
      vm.guess = answer;
    }
    else {
      vm.selected = vm.answers[vm.answers.indexOf(answer)];
    }
  }
}]);