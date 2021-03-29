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
    question: "which language is NOT used to build websites?",
    answers: {
      a: "HTML",
      b: "Python",
      c: "CSS"
    },
    correctAnswer: "Python"
  },
  {
    question: "what does CSS stand for?",
    answers: {
      a: "Cascading Style Sheets",
      b: "Child Super Star",
      c: "Creative System Supplier"
    },
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "What is Javascript used for?",
    answers: {
      a: "Make a nice pot of coffee",
      b: "add interactible elements to a page",
      c: "Short for javaScripture, the digital bible",
    
    },
    correctAnswer: "add interactible elements to a page"
  }
];
localStorage.setItem("myQuestions", JSON.stringify(myQuestions));

function startQuiz() {
  startButton.disabled = true;
  
  timerCounter = 60;
  startTimer()
  renderQuestions()
  a1.addEventListener("click")
  
  
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

    var a1 = document.createElement("div");
    var a2 = document.createElement("div");
    var a3 = document.createElement("div");
    question.textContent = myQuestions[r].question;
    a1.textContent = myQuestions[r].answers.a;
    a2.textContent = myQuestions[r].answers.b;
    a3.textContent = myQuestions[r].answers.c;

    answersList.setAttribute("style", "margin-top: 20px")
    a1.setAttribute("class", "questionA")
    a2.setAttribute("class", "questionB")
    a3.setAttribute("class", "questionC")

    a1.setAttribute("style", "margin-top:50px; border: solid 2px; border-radius:25px;  background-color:bisque; padding-left:10px; padding-right:10px ")
    a2.setAttribute("style", "margin-top:50px; border: solid 2px; border-radius:25px;  background-color:bisque; padding-left:10px; padding-right:10px ")
    a3.setAttribute("style", "margin-top:50px; border: solid 2px; border-radius:25px;  background-color:bisque; padding-left:10px; padding-right:10px ")
    answersList.appendChild(a1);
    answersList.appendChild(a2);
    answersList.appendChild(a3);
    
  }
  function winCheck() {
  
  }

  function correct() {

  }
  


startButton.addEventListener("click", startQuiz)
  


  
  