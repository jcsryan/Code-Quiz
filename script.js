var count = "1 2 3 4 5";
var num = count.split(" ");
var questions = [
    { q: 'The sky is blue.', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];
  var score = 0;



var mainEl = document.getElementById("page");
var timerEl = document.getElementById("timer");
var countdownEl = document.getElementById("countdown")
var countFunc = 0;

var areYouReady = alert("Are you ready to begin?");

function countDownTimer() {
    var timeleft = 4;
    var timeInterval = setInterval(function() {
        countdownEl.textContent = "get ready: " + timeleft;
        timeleft--;

        if (timeleft === -1) {
             codeQuiz();
             scoreFunc();
            clearInterval(timeInterval);
            countdownEl.textContent = "";
        }
    }, 1000);
};


var scoreFunc = function() {
    

}


var codeQuiz = function(){
for (var i = 0; i < questions.length; i++) {

    }
};

document.getElementById("countdown").innerHTML = countDownTimer();
document.getElementById("questions").innerHTML = codeQuiz();