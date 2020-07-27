var startBtn = document.querySelector("#start");
var startContainer = document.querySelector(".start-container");
var firstQuestionCont = document.querySelector(".question-1");
var secondQuestionCont = document.querySelector(".question-2");
var thirdQuestionCont = document.querySelector(".question-3");
var fourthQuestionCont = document.querySelector(".question-4");
var fifthQuestionCont = document.querySelector(".question-5");

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("#start")) {
    startContainer.setAttribute("style", "display:none");
    firstQuestionCont.setAttribute("style", "visibility:visible");
    }
 });