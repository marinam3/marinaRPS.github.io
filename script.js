function Game() {
    var userpick;
    userpick = document.getElementById("userpick").value;

    console.log(userpick);

    const compChoice = [Math.floor(Math.random() * 3) + 1];

    console.log(compChoice);

    if (compChoice.valueOf(0) == 1) {

        if (userpick == "rock") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose rock: You Draw!";
        }
        else if (userpick == "paper") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose rock: You Win!";
        }
        else {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose rock: You Lose!";
        }
    }
    else if (compChoice.valueOf(0) == 2) {
        if (userpick == "paper") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose paper: You Draw!";
        }
        else if (userpick == "scissors") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose paper: You Win!";
        }
        else {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose paper: You Lose!";
        }
    }
    else if (compChoice.valueOf(0) == 3) {
        if (userpick == "scissors") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose scissors: You Draw!";
        }
        else if (userpick == "rock") {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose scissors: You Win!";
        }
        else {
            document.getElementById("main").innerHTML += " You chose " + userpick + ". Computer chose scissors: You Lose!";
        }
    }
    else {
        document.getElementById("main").innerHTML += " Computer chose Rock: Invalid, try again.";
    }
}


