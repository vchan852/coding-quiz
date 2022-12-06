// VARIABLES

let timeLeft= 100;
let currentQuestion = {};
let questionsPool = [];
let score = 0;
let gameOver = false; //boulean
const rightAnswer = 10;
const wrongAnswer = 10;


let timeLeftEl = document.querySelector("#countdown");
let timeLeftBoxEl = document.querySelector("#time-left-box");

let currentLeaderEl = document.querySelectorAll(".current-leader");
let currentLeaderScoreEl = document.querySelector("#current-leader");
let currentScoreEl = document.querySelector("#current-score");

let gameEl = document.querySelector("#start-game");
let gameHighScoreEl=document.querySelector("#game-high-score");

let startGameButton = document.querySelector("#start-game-button");

let questionEl = document.querySelector("#question");
let abButtons = document.querySelectorAll(".ab-button");
let buttons = document.querySelectorAll(".button");


let rightWrongEl = document.querySelector("#right-wrong");

// LOCAL STORAGE SECTION
let currentLeader = localStorage.getItem("currentLeader");
let currentScore = localStorage.getItem("currentScore");
let currentHighScore = localStorage.getItem("currentHighScore");



// QUESTIONS AND ANSWERS FOR QUIZ
var question = [

    { question: "What symbols are used to display a function?",
    a : "[] and {}",
    b : "() and []",
    c : "{} and []",
    answer: "c",
    },
    { question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a : "<script src='xxx.js'>",
    b : "<script name='xxx.js'>",
    c : "<script href='xxx.js'>",
    answer: "a",
    },
   
    { question: "How do you write 'Stream Indigo' in an alert box?",
    a : "alert('Stream Indigo')",
    b : "alertBox='Stream Indigo",
    c : "alertBox('Stream Indigo')",
    answer: "a",
    },
   
    { question: "What is the correct way to write a JavaScript array?",
    a : "avar txt = new Array:1=('joshua')2=('dk')3=('tae')",
    b : "var txt = new Array('joshua','dk','tae')",
    c : "var txt = new Array='joshua','dk','tae'",
    answer: "b",
    },
   
    { question: "How can you add a comment in a JavaScript?",
    a : "#This is a comment",
    b : "<!--This is a comment-->",
    c : "//This is a comment",
    answer: "c",
    },

   ];

// UPDATE LEADER IN NAV BAR

// updates variables with current score and leader score
currentLeaderEl.forEach((el) => {
    el.textContent = currentLeader;
});

setLeader = () => {
    localStorage.setItem("currentLeader", currentScore);
};
// updates the information on navbar on who is leading
if (!currentLeader) {
    currentLeaderEl.forEach((el) => {
        el.textContent = "?";
    });
} else {
    currentScoreEl.textContent = currentLeader + " -> " + currentHighScore;
    currentLeaderScoreEl.textContent = currentHighScore;
}

currentScoreEl.textContent = "?";


// GAME START
startGame = () => { 
    currentScoreEl.textContent = "Lets Begin";
    outOfTime = false;
    score = 0;
    questionsPool = [...question];

    populateNextQuestion();
 
    gameEl.style.display = "none";
};

// END OF GAME
checkGameOver = () => {
    if (outOfTime) {
        gameOver = true;

        buttons.forEach((button) => {
            button.style.display = "none";
        });
        return setInterval(() => {
            location.assign("./gameover.html");
        }, 1000);
    }
    if (questionsPool.length === 0) {
        gameOver = true;
        return location.assign("./gameover.html"); // sends player to the gameover html if all questions are done
    }
};

populateNextQuestion = () => {
    checkGameOver();

    // GAME QUESTIONS 
    // need to generate 'random' question selection for player
    let questionIndex = Math.floor(Math.random() * questionsPool.length);
    currentQuestion = questionsPool[questionIndex];
    questionEl.textContent = currentQuestion.question;
    abButtons.forEach((abButton) => {
        let property = abButton.dataset["property"];
        abButton.innerText = currentQuestion[property];
        if (abButton.innerText === "undefined") {
            abButton.parentElement.style.display = "none";
        } else {
            abButton.parentElement.style.display = "inherit";
        }
    });
    questionsPool.splice(questionIndex, 1);
};

// NEED TO ADD THE ANSWERS , USE EVENTLISTENER
// THERE NEEDS TO BE A CLICK BUTTON TO RECORD PLAYERS CHOICE
abButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let selectedAnswer = e.target;

        let selectedAnswerProperty = selectedAnswer.dataset["property"];
        rightWrongEl.style.display = "inherit";

            // INCREASE POINTS FOR RIGHT ANSWER
        if (selectedAnswerProperty == currentQuestion.answer) {
            //rightWrongEl.textContent = "Right";
            score += rightAnswer;
            
            localStorage.setItem("currentScore", score);

            // update the container
            currentScoreEl.textContent = score;
        } else {
            //rightWrongEl.textContent = "Wrong";

            // we need to deduct time
            timeLeft -= wrongAnswer;
        }
        setTimeout(() => {
            rightWrongEl.style.display = "none";
        }, 1000);

        populateNextQuestion();
    });
});

// TIME STARTS WHEN GAME STARTS
startCountdown = () => {
    timeLeftEl.textContent = "Remaining Time : " + timeLeft;
    let timerCountdown = setInterval(() => {
        timeLeftEl.textContent = "Remaining Time : " + (timeLeft - 1);
        timeLeft--;
        if (timeLeft < 0) {
            timeLeftEl.textContent = "Time is Up";
            clearInterval(timerCountdown);
            outOfTime = true;
            return checkGameOver();
        }
    }, 1000);
};

startGameButton.addEventListener("click", () => {
    startCountdown();
    startGame();
});
