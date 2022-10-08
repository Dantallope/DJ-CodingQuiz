var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var nspage = document.getElementById("newScore")
var hspage = document.getElementById("highscores");
var initials = document.getElementById("inital");
var score = document.getElementById("score");
var hsForm = document.getElementById("hsForm");
var quest1 = document.getElementById("quest1");
var quest2 = document.getElementById("quest2");
var quest3 = document.getElementById("quest3");
var quest4 = document.getElementById("quest4");
var quest5 = document.getElementById("quest5");
var q101 = document.getElementById("q1.1");
var q102 = document.getElementById("q1.2");
var q103 = document.getElementById("q1.3");
var q104 = document.getElementById("q1.4");
var q201 = document.getElementById("q2.1");
var q202 = document.getElementById("q2.2");
var q203 = document.getElementById("q2.3");
var q204 = document.getElementById("q2.4");
var q301 = document.getElementById("q3.1");
var q302 = document.getElementById("q3.2");
var q303 = document.getElementById("q3.3");
var q304 = document.getElementById("q3.4");
var q401 = document.getElementById("q4.1");
var q402 = document.getElementById("q4.2");
var q403 = document.getElementById("q4.3");
var q404 = document.getElementById("q4.4");
var q501 = document.getElementById("q5.1");
var q502 = document.getElementById("q5.2");
var q503 = document.getElementById("q5.3");
var q504 = document.getElementById("q5.4");

var gameOver = false;
var timeLeft = 60;
var highScoreList = [];

function gameTime() {
    quest1.hidden = false;
    q101.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum2();
    });
    q102.addEventListener("click", function () {
        questionNum2();
    });
    q103.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum2();
    });
    q104.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum2();
    });
}

function questionNum2() {
    quest1.hidden = true;
    quest2.hidden = false;
    q201.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum3();
    });
    q202.addEventListener("click", function () {

        timeLeft = timeLeft - 10;
        questionNum3();
    });
    q203.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum3();
    });
    q204.addEventListener("click", function () {
        questionNum3();
    });
}

function questionNum3() {
    quest2.hidden = true;
    quest3.hidden = false;
    q301.addEventListener("click", function () {
        questionNum4();
    });
    q302.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum4();
    });
    q303.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum4();
    });
    q304.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum4();
    });
}
function questionNum4() {
    quest3.hidden = true;
    quest4.hidden = false;
    q401.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum5();
    });
    q402.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum5();
    });
    q403.addEventListener("click", function () {
        console.log("Good Job");
        questionNum5();
    });
    q404.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        questionNum5();
    });
}
function questionNum5() {
    quest4.hidden = true;
    quest5.hidden = false;
    q501.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        newScore();
    });
    q502.addEventListener("click", function () {
        newScore();
    });
    q503.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        newScore();
    });
    q504.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        newScore();
    });
}
function newScore(){
    quest5.hidden = true;
    timerEl.hidden = true;
    nspage.hidden = false;
    gameOver = true;

    var highestscore = {init:initials,num:timeLeft};

    hsForm.addEventListener("summit",function(){
        highScoreList.push(initials)
        console.log(highScoreList);
    });
    

   
    //highScores();
}
function highScores() {
    nspage.hidden = true
    hspage.hidden = false;
    score.textContent = timeLeft;
}
function timer() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0 && gameOver == false) {
            timerEl.textContent = timeLeft;
            timeLeft--;

        } else if (timeLeft <= 0) {
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }else if (gameOver == true){
            clearInterval(timeInterval);
        }
    }, 1000);
}


startEl.addEventListener("click", function () {
    startEl.hidden = true;
    timer();
    gameTime();
})