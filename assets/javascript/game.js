
$(document).ready(function (ev) {

    initalStart();

    // track gem values 
    var Wins = 0;
    var Losses = 0;
    var newScore = 0;
    $("#playerScore").text(newScore);

    function initalStart() {
        blue = randonGemNumber();
        green = randonGemNumber();
        red = randonGemNumber();
        yellow = randonGemNumber();
        newScore = 0;
        $("#finalTotal").text(newScore);
        computerGuess = Math.floor(Math.random() * 102 + 19);
        $("#lostandwon").text(computerGuess);
        console.log();
    }

    function randonGemNumber() {
        var random = Math.floor(Math.random() * 12 + 1);
        console.log(random);
        return random;

    }

    function scoreChecker() {

        if (newScore > computerGuess) {
            Losses++;
            $("#numberofLosses").text(Losses);
            promtToplay();
        } else if (computerGuess === newScore) {
            Wins++
            $("#numberofWins").text(Wins)
            promtToplay()
        }
    }

    function promtToplay() {

        var playAgain = prompt();

        if (playAgain.toLocaleLowerCase() === "y") {
            prompt("You Won! Play Again? Y/N")

            initalStart();

        } else if (playAgain.toLocaleLowerCase() === "n") {
            prompt("Game Over.");
            document.location.reload()

        }


    }

    $(".blue").on("click", function (event) {

        newScore = blue + newScore;
        var answer = newScore;

        $("#finalTotal").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    });

    $(".green").on("click", function (event) {

        newScore = green + newScore;
        var answer = newScore;

        $("#finalTotal").text(answer);
        scoreChecker();

        console.log(answer + "answer")
    });

    $(".red").on("click", function (event) {
        newScore = red + newScore
        var answer = newScore;

        $("#finalTotal").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    });

    $(".yellow").on("click", function (event) {
        newScore = yellow + newScore
        var answer = newScore;

        $("#finalTotal").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    })


});