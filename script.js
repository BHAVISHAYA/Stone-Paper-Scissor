let userScore = 0;
let compScore = 0;
let flag = false;

const choice = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const showCurrUserScore = document.querySelector("#userKaaScore");
const showCurrCompScore = document.querySelector("#computerKaaScore");
const currWinner = document.querySelector("#win");



const showCurrWinner = (meraScore, computerScore) => {
    if(meraScore > computerScore) {
        currWinner.innerText = `Current Winner - User`;
        currWinner.style.backgroundColor = "#AD7A99";
        currWinner.style.border = "0.2rem solid black";
        currWinner.style.color = "black";
    }
    else if(meraScore === computerScore) {
        currWinner.innerText = `!!! DRAW DRAW DRAW !!!`;
        currWinner.style.backgroundColor = "#AD7A99";
        currWinner.style.border = "0.2rem solid black";
        currWinner.style.color = "black";
    }
    else {
        currWinner.innerText = `Current Winner - Computer`;
        currWinner.style.backgroundColor = "#AD7A99";
        currWinner.style.border = "0.2rem solid black";
        currWinner.style.color = "black";
    }
}

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let comChoice = Math.floor(Math.random() * 3);
    return options[comChoice];
}

const playGame = (userChoice, compChoice) => {
    if(userChoice === "rock") {
        // Computer have 2 choices -> paper, scissor 
        if(compChoice === "paper") {
            compScore++;
            message.innerText = `You Lose 🥺🥺. ${compChoice} kill your ${userChoice}`;
            message.style.backgroundColor = "#2F2963";
            message.style.border = "0.2rem solid black";
        }
        else if(compChoice === "scissor") {
            userScore++;
            message.innerText = `You Win 🥳🥳. Your ${userChoice} kills ${compChoice}`;
            message.style.backgroundColor = "#454372";
            message.style.border = "0.2rem solid black";
        }
    }
    else if(userChoice === "paper") {
        // Computer have 2 choices -> rock, scissor
        if(compChoice === "rock") {
            userScore++;
            message.innerText = `You Win 🥳🥳. Your ${userChoice} kills ${compChoice}`;
            message.style.backgroundColor = "#454372";
            message.style.border = "0.2rem solid black";
        }
        else if(compChoice === "scissor") {
            compScore++;
            message.innerText = `You Lose 🥺🥺. ${compChoice} kill your ${userChoice}`;
            message.style.backgroundColor = "#2F2963";
            message.style.border = "0.2rem solid black";
        }
    }
    else {
        // Computer have 2 choices -> rock, paper
        if(compChoice === "rock") {
            compScore++;
            message.innerText = `You Lose 🥺🥺. ${compChoice} kill your ${userChoice}`;
            message.style.backgroundColor = "#2F2963";
            message.style.border = "0.2rem solid black";
        }
        else if(compChoice === "paper") {
            userScore++;
            message.innerText = `You Win 🥳🥳. Your ${userChoice} kills ${compChoice}`;
            message.style.backgroundColor = "#454372";
            message.style.border = "0.2rem solid black";
        }
    }
    showCurrWinner(userScore, compScore);
    showCurrCompScore.innerText = compScore;
    showCurrUserScore.innerText = userScore;
}

const drawGame = (sameChoice) => {
    message.innerText = `You both select ${sameChoice}, Try again`;
    message.style.backgroundColor = "#081b31";
    message.style.border = "none";
}

choice.forEach((box) => {
    box.addEventListener("click", () => {
        let userChoice = box.getAttribute("id");
        let compChoice = getComputerChoice();
        if(userChoice === compChoice) {
            drawGame(userChoice);
            showCurrWinner(userScore, compScore);
        }
        else {
            playGame(userChoice, compChoice);
        }
    })
})