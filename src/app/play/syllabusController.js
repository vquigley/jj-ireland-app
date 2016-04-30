import angular from 'angular';

angular.module("app").controller('PlaySyllabus', ['syllabus', 'common', '$scope', '$location', '$q', function (syllabus, common, $scope, $location, $q) {
  let vm = this;
  vm.itemHeading  = "";
  vm.item = {};
  vm.answer = answer;
  vm.init = init;
  vm.questionData = [];
  vm.answers = [];
  
  function init() {
    loadQuestionData();
    loadNextItem();
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
          else {
            vm.answers.push(item.value); 
          }
        });
      })
    });
    
    vm.questionData = shuffleArray(vm.questionData);
    vm.answers = shuffleArray(vm.answers);
  }
  
  function getRequestedBelts() {
    return $location.search().belts.split(',');
  }
  
  function loadBelt(belt) {
    return syllabus.get(belt);
  }
  
  function loadNextItem() {
    vm.item = vm.questionData[0];
  }
  
  function finish(){
   $location.path('/play/finish')
  }
  
  function answer () {
    if (vm.item.type === "translation") {
      answerTranslation();
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
  
  function answerTranslation () {
    if (vm.selected === vm.item.japanese) {
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
  }
  
  function correctAnswer() {
    
  }
  
  function wrongAnswer() {
    
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
}]);