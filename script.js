// Question Array ARRAY
var questions =
    [
      {
        question: "Commonly used data types do NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: 2
      },
      {
        question: "The condition of an if/else statement is enclosed with:",
        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        answer: 2
      },
      {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["&lt;javascript&gt;", "&lt;scripted&gt;", "&lt;script&gt;", "&lt;js&gt;"],
        answer: 2
      },
      {
        question: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the above"],
        answer: 2
      },
      {
        question: "Arrays in Javascript can be used to store:",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: 3
      }
    ];

    // Highscore List
var highscores = [];

// Data to keep track of quiz
var currentQuestionIndex = 0;

var currentScore = 0;

var intervalTimer = null;
var questionTimeRemaining = 0;
var defaultQuestionTime = 75;

var feedbackTimer = null;
var feedbackTime = 2;

// Elements
var btn_ = document.querySelector(".question-1");
var questionElem = document.getElementById("txt_question");
var answerOptionsElem = document.getElementById("answer_option_container");

// Setup Main Section
btn_start.addEventListener("click", OnClick_Start);
btn_highscores.addEventListener("click", OnClick_Highscores);
submit_initials.addEventListener("click", OnClick_SubmitInitials);

btn_highscroes_back.addEventListener("click", ShowMainMenu);
btn_highscores_clear.addEventListener("click", OnClick_ClearHighscores);

ShowMainMenu();


///
///
///
///


function ShowMainMenu()
{
  document.getElementById("div_main").setAttribute("style", "display:block");
  document.getElementById("div_question").setAttribute("style", "display:none");
  document.getElementById("div_feedback").setAttribute("style", "display:block");
  document.getElementById("div_submitScore").setAttribute("style", "display:none");
  document.getElementById("div_highscoreTable").setAttribute("style", "display:none");
}

function ShowQuestion(index)
{
    // clear any options from previous question
    answerOptionsElem.innerHTML = "";

    // make sure we have a valid question
    if(questions[index] === undefined) {
        EndOfQuiz();
    } else {
    //var fragment = document.createDocumentFragment(); // change later to something more basic bitch

    // set question
    questionElem.innerHTML = questions[index].question;

    
    var indexCounter = 0;
    questions[index].choices.forEach(function(choice) {
        var tempBtn = document.createElement('button');
        tempBtn.innerHTML = choice;
        tempBtn.setAttribute("onclick", "SubmitAnswer(" + indexCounter + ")");
        tempBtn.classList.add("btn", "btn-block", "btn-light");
        answerOptionsElem.appendChild(tempBtn);
        indexCounter++;
    });
    }
}

function SubmitAnswer(Answer)
{
    Answer = parseInt(Answer);
    
    if(questions[currentQuestionIndex].answer === Answer)
    {
        SetFeedback("Correct!");
        //console.log("CORRECT");
        currentScore++;
    }
    else
    {
    	SetFeedback("Wrong!");
      
      questionTimeRemaining -= 10;
      if(questionTimeRemaining <= 0) {
          OutOfTime();
      }
      //console.log("INCORRECT");
    }
    currentQuestionIndex++;
    ShowQuestion(currentQuestionIndex);
}

// quiz functions
function StartTimer()
{
    questionTimeRemaining = defaultQuestionTime;
    document.getElementById("time_remaining").innerHTML = questionTimeRemaining;
    intervalTimer = setInterval(TimerFunc, 1000);
}
function TimerFunc()
{
    questionTimeRemaining--;
    if(questionTimeRemaining <= 0) {
        OutOfTime();
    }
    document.getElementById("time_remaining").innerHTML = questionTimeRemaining;
}
function OutOfTime()
{
  console.log("Out Of Time");
  EndOfQuiz();
}
function EndOfQuiz()
{  
    currentQuestionIndex = 0;

    clearInterval(intervalTimer);

    if(questionTimeRemaining < 0) {
        questionTimeRemaining = 0;
    }

  //var feedbackText = "The quiz is now over. You scored " + currentScore + "/" + questions.length;

  document.getElementById("div_main").setAttribute("style", "display:none");
  document.getElementById("div_question").setAttribute("style", "display:none");
  document.getElementById("div_feedback").setAttribute("style", "display:block");
  document.getElementById("div_submitScore").setAttribute("style", "display:block");
  document.getElementById("div_highscoreTable").setAttribute("style", "display:none");
    
    
}

// feedback functions
function SetFeedback(string)
{
	p_feedback.innerHTML = string;
	feedbackTime = 2;
	feedbackTimer = setInterval(FeedbackTimerFunc, 1000);
}
function ClearFeedback()
{
	p_feedback.innerHTML = "";
    clearInterval(feedbackTimer);
}
function FeedbackTimerFunc()
{
    feedbackTime--;
    if(feedbackTime <= 0)
    {
        ClearFeedback();
    }
}

// button functions

function OnClick_Start()
{  
    questionIdx = 0;
  
    document.getElementById("div_main").setAttribute("style", "display:none");
    document.getElementById("div_question").setAttribute("style", "display:block");
    
    ShowQuestion(questionIdx);
    StartTimer();
}
function OnClick_Highscores()
{
  document.getElementById("div_main").setAttribute("style", "display:none");
  document.getElementById("div_question").setAttribute("style", "display:none");
  document.getElementById("div_feedback").setAttribute("style", "display:none");
  document.getElementById("div_submitScore").setAttribute("style", "display:none");
  document.getElementById("div_highscoreTable").setAttribute("style", "display:block");
}
function OnClick_SubmitInitials() {
    console.log("!!! - " + questionTimeRemaining);
    var hs =
    {
        initials: document.getElementById("initials").value,
        score: questionTimeRemaining
    }
    highscores.push(hs);
    
    var list = document.getElementById("hs_list");
    var li = document.createElement('li');
    li.innerHTML = hs.initials + " | Score: " + hs.score; 
    list.appendChild(li);
    OnClick_Highscores();
}
function OnClick_ClearHighscores()
{
    highscores = [];
    document.getElementById("hs_list").innerHTML = "";
}
