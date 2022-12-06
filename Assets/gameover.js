// <!-- GAMEOVER JS TO DISPLAY AND SAVE SCORE AND SAVE INITIAL OF PLAYER -->
let currentLeader = localStorage.getItem("currentLeader");
let currentScore = localStorage.getItem("currentScore");
let currentHighScore = localStorage.getItem("currentHighScore");

// storing information in application inspect

let currentLeaderEl = document.querySelectorAll(".current-leader");
let currentScoreEl = document.querySelectorAll(".current-score");

let currentLeaderScoreEl = document.querySelector("#game-high-score");
let alertWinLoseEl = document.querySelector("#win-lose");


// needs a form to submit winner name and play again button
let formEl = document.querySelector("form");

let inputPlayerBoxEl = document.querySelector("#player-input-box");
let inputNameEl = document.querySelector("#player-name");
let submitNameButton = document.querySelector("#submit-name-button");


let playAgainButton = document.querySelector("#play-again-button");

let endGameHighScore = document.querySelector("#game-high-score");



// we need EventListeners to rerun quiz back to original html

currentLeaderEl.forEach((noa) => {
    noa.textContent = currentLeader;
});

currentScoreEl.forEach((noa) => {
    noa.textContent = currentScore;
});

if (!currentLeader) {
    alertWinLoseEl.textContent =
        "You're the top player";
    currentLeaderEl.forEach((noa) => {
        noa.textContent = "Lets Begin";
    });

    currentLeaderScoreEl.textContent = "Lets Begin";
    localStorage.setItem("currentHighScore", currentScore);

} else {
    endGameHighScore.textContent = currentHighScore;
    currentLeaderEl.textContent = currentLeader + " - " + currentHighScore;

    // DETERMINE IF PLAYER IS WINNER 

    if (currentScore > currentHighScore) {
        currentLeaderEl.textContent = "Enter Your Initials";
        alertWinLoseEl.textContent =
            "You're in the lead";
        localStorage.setItem("currentHighScore", currentScore);
    } else {
        alertWinLoseEl.textContent = "Lets play again";
        playAgainButton.style.display = "inherit";
        inputPlayerBoxEl.style.display = "none";
    }
}

removeCurrentScore = () => {
    localStorage.removeItem("currentScore");
};

submitNameButton.addEventListener("click", () => {
    removeCurrentScore();
    localStorage.setItem("currentLeader", inputNameEl.value);
    document.location.assign("index.html");
});

playAgainButton.addEventListener("click", () => {
    removeCurrentScore();
    document.location.assign("index.html");
});