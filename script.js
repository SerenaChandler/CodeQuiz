var body = document.querySelector(".body")
var startButton = document.querySelector(".button")
var allTime = document.querySelector(".timer")

var question = document.querySelector("#question")
var answersList = document.querySelector("#answers")
var timerAmount = document.querySelector(".timerCounter")
var pointsList = document.querySelector(".finalScore")
var a1 = document.createElement("div");
var a2 = document.createElement("div");
var a3 = document.createElement("div");
var finalPoints = document.createElement("h1");
var gameOver = document.createElement("h1")
var gameOverContainer = document.querySelector(".initial")
gameOver.textContent = "please enter initials"
var initial = document.createElement("input")
initial.setAttribute("style", "position: absolute; top: 50%; right: 47%")
var submitButton = document.createElement("button")
submitButton.textContent = "Submit"



var i = 0
var chosenQuestion;
var score = 0;
var timer;
var timerCounter;
var myQuestions = [
  {
    question: "which language is NOT used to build websites?",
    answers: {
      a: "Python",
      b: "HTML",
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
      a: "add interactible elements to a page",
      b: "make a nice of coffee",
      c: "Short for javaScripture, the digital bible",
    
    },
    correctAnswer: "add interactible elements to a page"
  }
];



function startQuiz() {
  startButton.disabled = true;
  startButton.innerHTML = "";
  timerCounter = 60;
  startTimer()
  renderQuestions()
  console.log(a1)
  a1.addEventListener("click", correct)
  a2.addEventListener("click", incorrect)
  a3.addEventListener("click", incorrect)
  
  
}


function startTimer() {
  timer = setInterval(function() {
    
    timerCounter--;

    timerAmount.textContent = timerCounter;
    
    if (timerCounter <= 0 || i >= "3" ) {
      clearInterval(timer)
      
      allTime.innerHTML = "";
      question.innerHTML = "";
      
    
      
      gameOverContainer.appendChild(initial)
      gameOverContainer.appendChild(submitButton)
      gameOverContainer.appendChild(gameOver)

    }
      
 }, 1000);
}

  function renderQuestions() {
    answersList.innerHTML = "";
    console.log(score)
    
      

    finalPoints.textContent = "your score is " + score
    question.textContent = myQuestions[i].question;
    a1.textContent = myQuestions[i].answers.a;
    a2.textContent = myQuestions[i].answers.b;
    a3.textContent = myQuestions[i].answers.c;


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
    pointsList.appendChild(finalPoints)
    
    
   
  }





  function incorrect() {
    timerCounter = timerCounter - 20
    i++
    renderQuestions()
  }

  function correct() {
    score++
    i++
    renderQuestions()
  }
  


startButton.addEventListener("click", startQuiz)


  


  
  