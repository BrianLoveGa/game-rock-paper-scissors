console.log("HEY HEY");

/// click rock paper spock ect....
/// word under your move changes
/// color underline changes
/// red rock, silver scissors, white paper, blue spock, green lizard
/// press button for comps move
/// score and status updates

let you = document.getElementById("you");

/// player choices of weapon

let rock = document.getElementById("rock");
rock.addEventListener("click", rockPick);

function rockPick() {
  you.innerText = "ROCK";
  you.style.borderColor = "red";
}

let paper = document.getElementById("paper");
paper.addEventListener("click", paperPick);

function paperPick() {
  you.innerText = "PAPER";
  you.style.borderColor = "white";
}

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", sciPick);

function sciPick() {
  you.innerText = "SCISSORS";
  you.style.borderColor = "gray";
}
let lizard = document.getElementById("lizard");
lizard.addEventListener("click", lizardPick);

function lizardPick() {
  you.innerText = "LIZARD";
  you.style.borderColor = "green";
}
let spock = document.getElementById("spock");
spock.addEventListener("click", spockPick);

function spockPick() {
  you.innerText = "SPOCK";
  you.style.borderColor = "blue";
}

/// click for comp move

// pick a random number to get a random computer move

function randomMove() {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "spock";
    case 4:
      return "lizard";
  }
}

let shoot = document.getElementById("shoot");
shoot.addEventListener("click", rpsls);

function rpsls() {
    /// get player choice
    /// get comp random move
    /// compare
    /// declare win lose tie
    /// .....
    /// then profits
}
