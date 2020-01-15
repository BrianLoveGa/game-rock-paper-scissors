console.log("HEY HEY");

/// click rock paper spock ect....
/// word under your move changes
/// color underline changes
/// red rock, silver scissors, white paper, blue spock, green lizard
/// press button for comps move
/// score and status updates

let you = document.getElementById("you");
you.innerText = " choice ";
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

let puter = document.getElementById("comp");
let ym = you.innerText.toLowerCase();

function rpsls(e) {
  // keep window open don't re-load page
  e.preventDefault();
  if (you.innerText == "choice") {
    alert("please choose your move first");
  } else {
    let cm = randomMove();
    cm = puter.innerText;

    console.log(cm);
    return cm;
  }
  compare(ym, cm);
  /// get player choice
  /// get comp random move

  /// .....
  /// then profits
}

let status = document.getElementById("status");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let tie = document.getElementById("tie");

win = 0;
lose = 0;
tie = 0;

function compare(ym, cm) {
  ///// compare
  /// declare win lose tie
  if (ym === cm) {
    status.innerText = "you tied";
    tie += 1;
    // 10 ways to lose - 2 per option
  } else if (ym === "paper" && cm === "scissors") {
    status.innerText = "you lost comp sci cuts your paper";
    lose += 1;
  } else if (ym === "rock" && cm === "paper") {
    status.innerText = "you lost comp paper covers your rock";
    lose += 1;
  } else if (ym === "lizard" && cm === "rock") {
    status.innerText = "you lost comp rock smash your liz";
    lose += 1;
  } else if (ym === "spock" && cm === "lizard") {
    status.innerText = "you lost comp liz poisioned your spock";
    lose += 1;
  } else if (ym === "scissors" && cm === "spock") {
    status.innerText = "you lost comp spock smashed your sci";
    lose += 1;
  } else if (ym === "lizard" && cm === "scissors") {
    status.innerText = "you lost comp sci killed your liz";
    lose += 1;
  } else if (ym === "paper" && cm === "lizard") {
    status.innerText = "you lost comp liz ate your paper";
    lose += 1;
  } else if (ym === "spock" && cm === "paper") {
    status.innerText = "you lost comp paper disproved your spock";
    lose += 1;
  } else if (ym === "rock" && cm === "spock") {
    status.innerText = "you lost comp spock vaporized your rock";
    lose += 1;
  } else if (ym === "scissors" && cm === "rock") {
    status.innerText = "you lost comp rock broke your sci";
    lose += 1;
  }
  // 10 ways to win now
  else if (ym === "scissors" && cm === "paper") {
    status.innerText = "You Won, Scissors cuts comp paper";
    win += 1;
  } else if (ym === "scissors" && cm === "lizard") {
    status.innerText = "You Won, Scissors decaps comp liz";
    win += 1;
  } else if (ym === "rock" && cm === "scissors") {
    status.innerText = "You Won, Rock smashes comp sci";
    win += 1;
  } else if (ym === "rock" && cm === "lizard") {
    status.innerText = "You Won, Rock flattens comp liz";
    win += 1;
  } else if (ym === "paper" && cm === "spcok") {
    status.innerText = "You Won, your Paper disproved comp spock";
    win += 1;
  } else if (ym === "paper" && cm === "rock") {
    status.innerText = "You Won, your Paper covered comp rock";
    win += 1;
  } else if (ym === "lizard" && cm === "spock") {
    status.innerText = "You Won, your Liz posioned comp spock";
    win += 1;
  } else if (ym === "lizard" && cm === "paper") {
    status.innerText = "You Won, your Lizard ate the comp paper";
    win += 1;
  } else if (ym === "spock" && cm === "rock") {
    status.innerText = "You Won, your Spock vaporized comp rock";
    win += 1;
  } else if (ym === "spock" && cm === "scissors") {
    status.innerText = "You Won, your Spock smashed comp sci";
    win += 1;
  }
}
