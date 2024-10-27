
function getComputerChoice() {
    let x = Math.random();
    let y = "";
    if (x < .33) {
        y = "rock";
    }
    else if (x > .33 && x < .66) {
        y = "scissors";
    }
    else if (x > .66) {
        y = "paper";
    }
    return y;
}
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ");
    choice = choice.toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid, Enter Rock, Paper, or Scissors ");
        choice = choice.toLowerCase();
    }
    return choice;
}
function playRound(humanChoice, computerChoice) {
    let text;
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                text = "Tie";
                break;
            case "paper":
                text = "You lose";
                break;
            case "scissors":
                text = "You win!";
                break;
        }
    }
    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "paper":
                text = "Tie";
                break;
            case "scissors":
                text = "You lose";
                break;
            case "rock":
                text = "You win!";
                break;
        }
    }
    else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "scissors":
                text = "Tie";
                break;
            case "rock":
                text = "You lose";
                break;
            case "paper":
                text = "You win!";
                break;
        }
    }
    return text;
}


function playGame(humanChoice) {
    let humanScore = 0;
    let computerScore = 0;

    let choice = humanChoice;
    let computerChoice = getComputerChoice();
    let results = playRound(choice, computerChoice);
    const result = document.getElementById('results');
    switch (results) {
        case "Tie":
            result.innerText = "Tie";
            break;
        case "You lose":
            result.innerText = "You lose";
            computerScore++;
            break;
        case "You win!":
            result.innerText = "You win!";
            humanScore++;
            break;
    }
    const wins = document.getElementById('winCount');
    const losses = document.getElementById('lossCount');
    const value = parseInt(wins.innerText) + humanScore;
    const value1 = parseInt(losses.innerText) + computerScore;
    wins.innerText = value;
    losses.innerText = value1;
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);

    });
});
