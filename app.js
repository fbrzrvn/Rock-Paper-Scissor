

const showRulesButton = document.getElementById("rules-btn");
const closeRulesButton = document.getElementById("close-icon");
const rulesContianer = document.getElementById("rules-container");
const choice = document.querySelectorAll("[data-choice]");

const startGame = document.getElementById("start-game");
const showChoices = document.getElementById("show-choices");
const showUserChoice = document.getElementById("show-user-choice");
const showComputerChoice = document.getElementById("show-computer-choice");
const result = document.getElementById("winner");
const winnerTextElement = document.getElementById("winner-text");
const playAgainButton = document.getElementById("play-again-btn");
const scoreTextElement = document.getElementById("score-text");


let score = 0;
let counter = 0;

showRulesButton.addEventListener("click", () => {
  rulesContianer.classList.toggle("hide");
})

closeRulesButton.addEventListener("click", () => {
  rulesContianer.classList.toggle("hide");
})

playAgainButton.addEventListener("click", () => {
  result.classList.toggle("hide");
  startGame.classList.toggle("hide");
  showChoices.classList.toggle("hide");
})

choice.forEach(choice => {
  choice.addEventListener("click", e => {
    const userChoice = e.target.id;
    console.log(userChoice);
    showUserChoice.innerHTML = `
      <i id="${userChoice}" class="fas fa-hand-${userChoice} ${userChoice}-icon-game"></i>
      <p>you picked</p>`;
    startGame.classList.toggle("hide");
    showChoices.classList.toggle("hide");
    
    const computerChoice = randomChoice(choice);
    showComputerChoice.innerHTML = `<i id="${computerChoice}" class="fas fa-hand-${computerChoice} ${computerChoice}-icon-game"></i>
    <p>house picked</p>`;
    result.classList.toggle("hide");

    play(userChoice, computerChoice);
  })
})


function randomChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choiceArray.length);
  const computerChoice = choiceArray[randomChoice];
  return computerChoice;
}


function play(userChoice, computerChoice) {

  if (userChoice == 'paper' && computerChoice == 'rock') {
    winnerTextElement.innerHTML = "YOU WIN";
    score++;
    counter++;
  } else if (userChoice == 'paper' && computerChoice == 'scissors') {
    winnerTextElement.innerHTML = "COMPUTER WINS";
    counter++;
  } else if (userChoice == 'rock' && computerChoice == 'scissors') {
    winnerTextElement.innerHTML = "YOU WIN";
    score++;
    counter++;
  } else if (userChoice == 'rock' && computerChoice == 'paper') {
    winnerTextElement.innerHTML = "COMPUTER WINS";
    counter++;
  } else if (userChoice == 'scissors' && computerChoice == 'paper') {
    winnerTextElement.innerHTML = "YOU WIN";
    score++;
    counter++;
  } else if (userChoice == 'scissors' && computerChoice == 'rock') {
    winnerTextElement.innerHTML = "COMPUTER WINS";
    counter++;
  } else {
    winnerTextElement.innerHTML = "IT'S A TIE..";
    counter++;
  }

  scoreTextElement.innerText = `${score}/${counter}`;
}
