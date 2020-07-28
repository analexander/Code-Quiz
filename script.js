// Question Array ARRAY
var questions =
    [
      {
        question: "Select 2",
        choices: ["One", "Two", "Four"],
        answer: 1
      },
      {
        question: "Select Dog",
        choices: ["Cat", "Monkey", "Dog", "lol"],
        answer: 2
      },
      {
        question: "2+2",
        choices: ["4", "1", "17", "0"],
        answer: 0
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