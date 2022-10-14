var startEl = document.getElementById("begin");
var timerEl = document.getElementById("timer");
var nspage = document.getElementById("newScore")
var hspage = document.getElementById("highscores");
var initials = document.getElementById("inital");
var score = document.getElementById("score");
var viewHS = document.getElementById("viewHS");
var hsForm = $("#hsForm");
var hslist = $("#hslist");
var response = document.getElementById("response");
var response2 = document.getElementById("response2");
var response3 = document.getElementById("response3");
var response4 = document.getElementById("response4");
var response5 = document.getElementById("response5");
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
timerEl.hidden = true;

function gameTime() {
    quest1.hidden = false;
    timerEl.hidden = false;
    startEl.hidden = true;

    q101.addEventListener("click", function () {
        toQuest2();
        response.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q102.addEventListener("click", function () {
        toQuest2();
        response.textContent = "Correct!";
    });
    q103.addEventListener("click", function () {
        toQuest2();
        response.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q104.addEventListener("click", function () {
        toQuest2();
        response.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
}

function questionNum2() {
    quest1.hidden = true;
    quest2.hidden = false;
    q201.addEventListener("click", function () {
        toQuest3();
        response2.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q202.addEventListener("click", function () {
        toQuest3();
        response2.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q203.addEventListener("click", function () {
        toQuest3();
        response2.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q204.addEventListener("click", function () {
        toQuest3();
        response2.textContent = "Correct!";
    });
}

function questionNum3() {
    quest2.hidden = true;
    quest3.hidden = false;
    q301.addEventListener("click", function () {
        toQuest4();
        response3.textContent = "Correct!";
    });
    q302.addEventListener("click", function () {
        toQuest4();
        response3.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q303.addEventListener("click", function () {
        toQuest4();
        response3.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q304.addEventListener("click", function () {
        toQuest4();
        response3.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
}
function questionNum4() {
    quest3.hidden = true;
    quest4.hidden = false;
    q401.addEventListener("click", function () {
        toQuest5();
        response4.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q402.addEventListener("click", function () {
        toQuest5();
        response4.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q403.addEventListener("click", function () {
        toQuest5();
        response4.textContent = "Correct!";
    });
    q404.addEventListener("click", function () {
        toQuest5();
        response4.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
}
function questionNum5() {
    quest4.hidden = true;
    quest5.hidden = false;
    q501.addEventListener("click", function () {
        toNS();
        response5.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q502.addEventListener("click", function () {
        toNS();
        response5.textContent = "Correct!"
    });
    q503.addEventListener("click", function () {
        toNS();
        response5.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
    q504.addEventListener("click", function () {
        toNS();
        response5.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    });
}
function newScore() {
    quest5.hidden = true;
    timerEl.hidden = true;
    nspage.hidden = false;
    gameOver = true;
    score.textContent = timeLeft;
}
function inputingScore(event) {

    event.preventDefault();

    var scoreItem = $('input[name="inital"]').val();
    localStorage.setItem(scoreItem, timeLeft);

    //hslist.append('<li>' + localStorage.key + "-" + localStorage.getItem(scoreItem) + '</li>');

    highScores();
}
for(i=0; i <= localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    var newNumberListItem = document.createElement("li");

    var numberListValue = document.createTextNode(i);

    newNumberListItem.append(key, value);

    hslist.append(newNumberListItem);

    //hslist.append(key, value);
}

function highScores() {
    nspage.hidden = true
    hspage.hidden = false;
}
function timer() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0 && gameOver == false) {
            timerEl.textContent = timeLeft + " Seconds Left";
            timeLeft--;

        } else if (timeLeft <= 0) {
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        } else if (gameOver == true) {
            clearInterval(timeInterval);
        }
    }, 1000);
}
hsForm.on("submit", inputingScore);

function toQuest2() {
    let quicktimer = 1;

    var responsetimer = setInterval(function () {
        if (quicktimer > 0) {
            quicktimer--;
        } else {
            questionNum2();
            clearInterval(responsetimer);
        }
    }, 1000)
}
function toQuest3() {
    let quicktimer = 1;

    var responsetimer = setInterval(function () {
        if (quicktimer > 0) {
            quicktimer--;
        } else {
            questionNum3();
            clearInterval(responsetimer);
        }
    }, 1000)
}
function toQuest4() {
    let quicktimer = 1;

    var responsetimer = setInterval(function () {
        if (quicktimer > 0) {
            quicktimer--;
        } else {
            questionNum4();
            clearInterval(responsetimer);
        }
    }, 1000)
}
function toQuest5() {
    let quicktimer = 1;

    var responsetimer = setInterval(function () {
        if (quicktimer > 0) {
            quicktimer--;
        } else {
            questionNum5();
            clearInterval(responsetimer);
        }
    }, 1000)
}
function toNS() {
    let quicktimer = 1;

    var responsetimer = setInterval(function () {
        if (quicktimer > 0) {
            quicktimer--;
        } else {
            newScore();
            clearInterval(responsetimer);
        }
    }, 1000)
}

startEl.addEventListener("click", function () {
    startEl.hidden = true;
    timer();
    gameTime();
})
viewHS.addEventListener("click", function () {

    quest1.hidden = true;
    quest2.hidden = true;
    quest3.hidden = true;
    quest4.hidden = true;
    quest5.hidden = true;
    startEl.hidden = true;
    highScores();

})