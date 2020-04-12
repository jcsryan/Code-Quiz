 
  var questions = [
    { "question": 'What does JS stand for', 
    "option1": 'Javascript',
    "option2": 'Just Sauce',
    "option3": 'Jerry Springer',
    "option4": 'Justice Served', 
    "answer": "1" },
    { "question": 'What version of HTML is commonly used?', 
    "option1": '3',
    "option2": '4',
    "option3": '5',
    "option4": '12',
    "answer": "3" },
    { "question": 'What is used to set something into local storage?', 
    "option1": '.getItem',
    "option2": '.setItem',
    "option3": '.betItem',
    "option4": '.tetItem',
    "answer": "2" },
    { "question": 'What program does the class use to set our Git repos?', 
    "option1": 'bash',
    "option2": 'crash',
    "option3": 'stash',
    "option4": 'mash',
    "answer": "1" },
    { "question": 'How many questions in this quiz so far?', 
    "option1": '2',
    "option2": '3',
    "option3": '5',
    "option4": 'C',
    "answer": "3" }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  var container = document.getElementById('quizContainer');
  var questionEl = document.getElementById('question');
  var opt1 = document.getElementById('opt1');
  var opt2 = document.getElementById('opt2');
  var opt3 = document.getElementById('opt3');
  var opt4 = document.getElementById('opt4');
  var nextButton = document.getElementById('nextButton');
  var resultCont = document.getElementById('result');
  var totQuestions = questions.length;


  var mins = 1;
  var secs = mins * 60;



  function countDown() {
      setTimeout('Decrement()', 60);
  }

  function Decrement() {
      if(document.getElementById){
          minutes = document.getElementById('minutes');
          seconds = document.getElementById('seconds');
          if(seconds < 59){
              seconds.value = secs;
          } else {
              minutes.value = getMinutes();
              seconds.value = getSeconds();
          } if(mins <1){
              minutes.style.color = "red";
              seconds.style.color = "red";
          } if(mins < 0){
              alert('Times Up!');
              minutes.value = 0;
              seconds.value = 0;
              container.style.display = 'none';
              resultCont.style.display = '';
              resultCont.textContent = "Your score:" + score;
          } else {
              secs --;
              setTimeout('Decrement()', 1000);
          }
      }
  };

  function getMinutes(){
      mins = Math.floor(secs /60);
      return mins;
  };

  function getSeconds(){
      return secs - Math.round(mins * 60);
  }


  function loadQuestion(questionIndex) {
      var i = questions[questionIndex];
      questionEl.textContent = (questionIndex + 1) + '. ' + i.question;
      opt1.textContent = i.option1;
      opt2.textContent = i.option2;
      opt3.textContent = i.option3;
      opt4.textContent = i.option4;
  }
  function loadNextQuestion() {
      var selectedOption = document.querySelector('input[type=radio]:checked');
      if(!selectedOption){
          alert('Choose an answer!');
          return;
      }
      var answer = selectedOption.value;
      if(questions[currentQuestion].answer == answer){
          score += 20;
          secs += 5;
      }
      if(questions[currentQuestion].answer != answer){
        secs -= 25;
      }
      selectedOption.checked = false
      currentQuestion++;
     
      
      if(currentQuestion == totQuestions - 1){
          nextButton.textContent = 'finished';
      }
      if(currentQuestion == totQuestions){
          container.style.display = 'none';
          resultCont.style.display = '';
          resultCont.textContent = "Your score:" + score;
          return;
      }
      loadQuestion(currentQuestion);
  };



 loadQuestion(currentQuestion);

