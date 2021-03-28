var startButton = document.querySelector("#start")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var timerAmount = document.querySelector(".timerCounter")



var chosenQuestion;
var score = 0;
var timer;
var timerCounter;
var myQuestions = [
  {
    question: "which language is not used to build website?",
    answers: {
      a: "HTML",
      b: "Python",
      c: "CSS"
    },
    correctAnswer: "b"
  },
  {
    question: "what does CSS stand for?",
    answers: {
      a: "Cascading Style Sheets",
      b: "Child Super Star",
      c: "Creative System Supplier"
    },
    correctAnswer: "a"
  },
  {
    question: "What is Javascript used for?",
    answers: {
      a: "Make a nice pot of coffee",
      b: "add interactible elements to a page",
      c: "Short for javaScripture, the digital bible",
    
    },
    correctAnswer: "b"
  }
];


function startQuiz() {
  startButton.disabled = true;
  
  timerCounter = 60;
  startTimer()
  
  
  
}


function startTimer() {
  timer = setInterval(function() {
    
    timerCounter--;

    timerAmount.textContent = timerCounter;
    
    if (timerCounter <= 0) {
      clearInterval(timer)
    }
      
 }, 1000);
}

  function renderQuestions() {
    
    answers.textContent = myQuestions }
  


startButton.addEventListener("click", startQuiz)
renderQuestions()

