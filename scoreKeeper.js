console.log("JS FILE IS CONNECTED")

// document selectors
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var rstBtn = document.querySelector("#rst");
var p1ScoreCard = document.querySelector("#p1ScoreCard");
var p2ScoreCard = document.querySelector("#p2ScoreCard");
var goalSet = document.querySelector("#numInput");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var pConsole = document.querySelector("#pConsole");
var p1Name = document.querySelector("#p1Input");
var p2Name = document.querySelector("#p2Input");

// player scores and gameOver
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// reset function (this is NOT the reset button listener)
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreCard.textContent = 0;
    p2ScoreCard.textContent = 0;
    gameOver = false;
    p1ScoreCard.classList.remove ("winner");
    p2ScoreCard.classList.remove ("winner");
    p1Name.value = ("");
    p2Name.value = ("");
    p1Btn.textContent = ("Player 1");
    p2Btn.textContent = ("Player 2");
};

// Player 1 Button functions and scoring
p1Btn.addEventListener("click", function(){
    // checks to see if game is over; if false, it will add another point to p1Score; else, nothing should happen when the button is clicked
    if(!gameOver){
        p1Score++;
        p1ScoreCard.textContent = p1Score;
        // checks to see if player 1 score meets the winning score, and declares gameover; else, it will declare the current score.
        if(p1Score === winningScore){
            gameOver = !gameOver;
            p1ScoreCard.classList.add ("winner");
            pConsole.textContent = (`GAME OVER: PLAYER 1 WINS WITH A SCORE OF ${p1Score} TO ${p2Score}!!!`);
        } else {            
            pConsole.textContent = (`Player 1 has clicked! The current score: ${p1Score} to ${p2Score}`);
        };
    } else {

    };
});

// player 1 text input functionality
p1Input.addEventListener("change", function(){
    if(!gameOver) {
        if(p1Score > 0 || p2Score > 0) {
            pConsole.textContent = ("Cannot change player name after game has begun!");
        } else {
            p1Btn.textContent = p1Input.value;
        };
    };
});

// player 2 button functions and scoring
p2Btn.addEventListener("click", function(){
    // checks to see if game is over; if false, it will add another point to p2Score; else, nothing should happen when the button is clicked
    if(!gameOver){
        p2Score++;
        p2ScoreCard.textContent = p2Score;
        // checks to see if player 2 score meets the winning score, and declares gameover; else, it will declare the current score.
        if(p2Score === winningScore){
            gameOver = !gameOver;
            p2ScoreCard.classList.add ("winner");
            pConsole.textContent = (`GAME OVER: PLAYER 2 WINS WITH A SCORE OF ${p2Score} TO ${p1Score}!!!`);
        } else {
            pConsole.textContent = (`Player 2 has clicked! The current score: ${p1Score} to ${p2Score}`);
        };
    } else {

    };
});

// player 2 text input functionality
p2Input.addEventListener("change", function(){
    if(!gameOver) {
        if(p1Score > 0 || p2Score > 0) {
            pConsole.textContent = ("Cannot change player name after game has begun!");
        } else {
            p2Btn.textContent = p2Input.value;
        };
    };
});

// winning score number input functionality
goalSet.addEventListener("change", function(){
    if(!gameOver) {
        winningScoreDisplay.textContent = goalSet.value;
        winningScore = Number(goalSet.value);
        pConsole.textContent = ("Winning score has been changed: resetting the game!");
        reset();
    } else {

    };
});

// reset button functionality
rstBtn.addEventListener("click", function(){
    reset();
    goalSet.value = ("");
    winningScoreDisplay.textContent = 5;
    winningScore = 5;
    pConsole.textContent = ("Reset has been clicked!");
});