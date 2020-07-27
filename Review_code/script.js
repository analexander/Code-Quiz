//DISCLAIMER: PARTS MAY BE BROKEN D:

//Make a timer that has a start and stop button
var elementsArea = document.querySelector("#lab-space");
var questionsArea = document.querySelector("#questions-space");
var elementsArea = document.querySelector("#answers-space");

var counter = 0;

var questions = [
    {
        question: "Question 1",
        answers: [
            {
                text: "A",
                isCorrect: true
            },
            {
                text: "B",
                isCorrect: false
            },
            {
                text: "C",
                isCorrect: false
            }
        ]
    },
    {
        question: "Question 2",
        answers: [
            {
                text: "A",
                isCorrect: false
            },
            {
                text: "B",
                isCorrect: false
            },
            {
                text: "C",
                isCorrect: true
            }
        ]
    }
    // "Question 1",
    // "Question 2",
    // "Question 3",
    // "Question 4",
    // "Question 5"
];


var intervalState;

var timerText = document.createElement("p");
var seconds = 25;
timerText.textContent = seconds;
elementsArea.appendChild(timerText);

var startButton = document.createElement("button");
startButton.textContent = "Start";
elementsArea.appendChild(startButton);

var stopButton = document.createElement("button");
stopButton.textContent = "Stop";
elementsArea.appendChild(stopButton);

var endButton = document.createElement("button");
endButton.textContent = "End";
elementsArea.appendChild(endButton);

function startGame(){
    //console.log("It works")
    console.log(seconds);
    intervalState = setInterval(function(){
        seconds = seconds - 1;
        timerText.textContent = seconds;
        if(seconds <= 0){
            clearInterval(intervalState);
            console.log("Time up!");
        }
    }, 1000);


        var questionElement = questions[counter];

        var questionArea = document.createElement("div");

        var currentQ = document.createElement("p");
        currentQ.textContent = questionElement.question;

        for (let i = 0; i < questionElement.answers.length; i++) {
            var answer = document.createElement("p");
            answer.addEventListener("click", function() {
                if(!questionElement.answers[i].isCorrect){
                    seconds -= 10;
                    alert("Incorrect");
                }
                else{
                    alert("Correct");
                }
                counter++;
            });
            
        }



}

// function stopTimer(){
//     //console.log("It works")
//     clearInterval(intervalState);
//     console.log(seconds);
// }

function endTimer(){
    var endElement = document.createElement("p");
    clearInterval(intervalState);
    endElement.textContent = "Timer ended. Remaining seconds: " + seconds;
    elementsArea.appendChild(endElement);

}

startButton.addEventListener("click", startGame);
//stopButton.addEventListener("click", stopTimer)
endButton.addEventListener("click", endTimer);