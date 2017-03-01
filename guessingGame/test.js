// Call Global variables for easy updating

var i = 10;

var random1 = 0;
var random2 = 0;
var random3 = 0;

var guess1 = 0;
var guess2 = 0;
var guess3 = 0;





jQuery.fn.ForceNumericOnly =
    function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                // home, end, period, and numpad decimal
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };



// Generate Random Numbers
function randomGenerator() {
    random1 = Math.floor(Math.random() * 9 + 1);
    random2 = Math.floor(Math.random() * 9 + 1);
    random3 = Math.floor(Math.random() * 9 + 1);

    while (random1 == random2 || random1 == random3 || random2 == random3) {
        random1 = Math.floor(Math.random() * 9 + 1);
        random2 = Math.floor(Math.random() * 9 + 1);
        random3 = Math.floor(Math.random() * 9 + 1);
    }

    console.log(random1);
    console.log(random2);
    console.log(random3);
}

// Capture Value of Submitted Buttons

function inputCapture() {
    guess1 = $("#guess1").val();
    guessCheck1(guess1);

    guess2 = $("#guess2").val();
    guessCheck2(guess2);

    guess3 = $("#guess3").val();
    guessCheck3(guess3);
}

// Check Submitted Values against Randomly Generated Numbers

function guessCheck1(guess1) {
    if (guess1 == random1) {
        $("#b1").css("background-color", "Green");
    } else if (guess1 == random2 || guess1 == random3) {
        $("#b1").css("background-color", "Yellow");
    } else {
        $("#b1").css("background-color", "Red");
    }
}

function guessCheck2(guess2) {
    if (guess2 == random2) {
        $("#b2").css("background-color", "Green");
    } else if (guess2 == random1 || guess2 == random3) {
        $("#b2").css("background-color", "Yellow");
    } else {
        $("#b2").css("background-color", "Red");
    }
}

function guessCheck3(guess3) {
    if (guess3 == random3) {
        $("#b3").css("background-color", "Green");
    } else if (guess3 == random2 || guess3 == random1) {
        $("#b3").css("background-color", "Yellow");
    } else {
        $("#b3").css("background-color", "Red");
    }
}

// Counter for incorrect guesses

function triesLeft() {

    if (random1 == guess1 && random2 == guess2 && random3 == guess3) {
        $("div.tries-container")
            .html("<h1>You Win!</h1>");
        $("div.startAgain")
            .html('<input type="button" id="startAgain" onclick="restart()" value="Start Again" /><br />');

    } else if (i >= 2) {
        i--;
        $("div.tries-container")
            .html("<h1>You Have " + i + " Tries Left!</h1>");

    } else if (i == 1) {
        $("div.tries-container")
            .html("<h1>You Lose, the numbers were " + random1 + " " + random2 + " " + random3 + " !</h1>");
        $("div.startAgain")
            .html('<input type="button" id="startAgain" onclick="restart()" value="Start Again" /><br />');
    }
}


function restart() {
    location.reload(false);
}


$(function () {

    $("#b1").ForceNumericOnly();
    $("#b2").ForceNumericOnly();
    $("#b3").ForceNumericOnly();

    // Generate Random Numbers onload
    window.onload = randomGenerator;

    // Submit answer to be checked against random numbers
    $("#submit").on("click", inputCapture);
    $("#submit").on("click", triesLeft);

});