//Set global variables for the timer
let timeUp;
let countDown;

//Event listener for the "I'm Done" Button
$("#end").on("click", function() {
    check();
    clearInterval(countDown);
})

//Event listener for the Start button to begin quiz
$("#start").on("click", function() {
    document.getElementById("end").style.visibility="visible";
    document.getElementById("quiz").style.visibility="visible";
    document.getElementById("after-Done").style.visibility= "hidden";

    timeCount(60)

})

//This function tracks the timer and automatically ends the quiz if 0 seconds remain
function timeCount(secs) {
    $("#timer").text(secs + " seconds remain to finish the quiz!");

    countDown = setInterval(function() {
        secs--;
        $("#timer").text(secs + " seconds remain to finish the quiz!");

        if (secs <1) {
            clearInterval(countDown);
            check();
        }
    }, 1000);
}

//This function checks the answers of the quiz and displays the number of right and wrong answers
function check() {

    const q1 = document.quiz.question1.value;
    const q2 = document.quiz.question2.value;
    const q3 = document.quiz.question3.value;
    const q4 = document.quiz.question4.value;
    const q5 = document.quiz.question5.value;
    const q6 = document.quiz.question6.value;
    let correct = 0;
    let incorrect = 0;

    if (q1 === "Patrick") {
        correct++;
    } else {
        incorrect++;
    }

    if (q2 === "Ashley") {
        correct++;
    } else {
        incorrect++;
    }

    if (q3 === "Kimmie") {
        correct++;
    } else {
        incorrect++;
    }

    if (q4 === "Wallabee") {
        correct++;
    } else {
        incorrect++;
    }

    if (q5 === "The Greasers") {
        correct++;
    } else {
        incorrect++;
    }

    if (q6 === "Cosmo") {
        correct++;
    } else {
        incorrect++;
    }

    document.getElementById("quiz").style.visibility="hidden";
    document.getElementById("after-Done").style.visibility= "visible";
    document.getElementById("correct").innerHTML= "you got " + correct + " questions correct!"
    document.getElementById("incorrect").innerHTML= "you got " + incorrect + " questions incorrect..."
}
