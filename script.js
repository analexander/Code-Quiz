var startBtn = document.querySelector("#start");
var startContainer = document.querySelector(".start-container");
var firstQuestionCont = document.querySelector(".question-1");

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("#start")) {
        startContainer.setAttribute("style", "display:none");
        firstQuestionCont.setAttribute("style", "visibility:visible");
    }
});