var startButton = document.querySelector("#start")
var question = document.querySelector("#question")
var answersList = document.querySelector("#answers")
var timerAmount = document.querySelector(".timerCounter")



var chosenQuestion;
var score = 0;
var timer;
var timerCounter;
var myQuestions = [
  {
    question: "which language is not used to build websites?",
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
localStorage.setItem("myQuestions", JSON.stringify(myQuestions));

function startQuiz() {
  startButton.disabled = true;
  
  timerCounter = 60;
  startTimer()
  renderQuestions()
  
  
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
    answersList.innerHTML = "";

    var r = Math.floor(Math.random()*3)

    var a1 = document.createElement("li");
    var a2 = document.createElement("li");
    var a3 = document.createElement("li");
    question.textContent = myQuestions[r].question;
    a1.textContent = myQuestions[r].answers.a;
    a2.textContent = myQuestions[r].answers.b;
    a3.textContent = myQuestions[r].answers.c;


    answersList.appendChild(a1);
    answersList.appendChild(a2);
    answersList.appendChild(a3);
    
  }
  


startButton.addEventListener("click", startQuiz)
  


  
  