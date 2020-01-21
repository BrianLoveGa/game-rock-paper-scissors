console.log("HEY HEY");

/// click rock paper spock ect....
/// word under your move changes
/// color outline changes
/// red rock, silver scissors, white paper, blue spock, green lizard
/// press button for comps move
/// score and status updates

// start with your move
let you = document.getElementById("you");
let ym = null;

/// player choices of weapon
/// not a drop down menu - just click to pick - mobile friendly - no keyboard required
/// rock
let rock = document.getElementById("rock");
rock.addEventListener("click", rockPick);
function rockPick() {
  you.innerText = "ROCK";
  you.style.borderColor = "red";
  ym = "rock";
}
/// paper
let paper = document.getElementById("paper");
paper.addEventListener("click", paperPick);
function paperPick() {
  you.innerText = "PAPER";
  you.style.borderColor = "white";
  ym = "paper";
}
/// scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", sciPick);
function sciPick() {
  you.innerText = "SCISSORS";
  you.style.borderColor = "gray";
  ym = "scissors";
}
/// lizard
let lizard = document.getElementById("lizard");
lizard.addEventListener("click", lizardPick);
function lizardPick() {
  you.innerText = "LIZARD";
  you.style.borderColor = "green";
  ym = "lizard";
}
/// spock
let spock = document.getElementById("spock");
spock.addEventListener("click", spockPick);
function spockPick() {
  you.innerText = "SPOCK";
  you.style.borderColor = "blue";
  ym = "spock";
}

/// click a button after you pick your weapon for computers move
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

function rpsls(e) {
  // keep window open don't re-load page
  e.preventDefault();
  if (you.innerText === "choice") {
    alert("please choose your move first");
  } else {
    let cm = randomMove();
    puter.innerText = cm;
    if (cm === "rock") {
      puter.style.borderColor = "red";
    } else if (cm === "paper") {
      puter.style.borderColor = "white";
    } else if (cm === "scissors") {
      puter.style.borderColor = "gray";
    } else if (cm === "lizard") {
      puter.style.borderColor = "green";
    } else if (cm ==="spock"){
      puter.style.borderColor = "blue";
    } else {
      puter.style.borderColor = 'black';
    }
    compare(ym, cm);
    return cm;
  }
}

/// tell you if round is a 'win', 'lose', or 'draw' ... - anyone remember that show?

let status = document.getElementById("status");

function compare(ym, cm) {
  // console.log("compare");
  // console.log(ym);
  ///// compare
  /// declare win lose tie - start with tie - base case
  if (ym === cm) {
    status.innerText = "You Tied - well at least it's not a loss";
    scoreT();
    // console.log("tie");

    // 10 ways to lose - 2 per option - lowercase you - :-(
  } else if (ym === "paper" && cm === "scissors") {
    status.innerText = "you lost comp scissors cuts your paper.";
    scoreL();
  } else if (ym === "rock" && cm === "paper") {
    status.innerText = "you lost comp paper covers your rock.";
    scoreL();
  } else if (ym === "lizard" && cm === "rock") {
    status.innerText = "you lost comp rock smash your lizard.";
    scoreL();
  } else if (ym === "spock" && cm === "lizard") {
    status.innerText = "you lost comp lizard poisioned your Spock.";
    scoreL();
  } else if (ym === "scissors" && cm === "spock") {
    status.innerText = "you lost comp Spock smashed your scissors.";
    scoreL();
  } else if (ym === "lizard" && cm === "scissors") {
    status.innerText = "you lost comp scissors killed your lizard.";
    scoreL();
  } else if (ym === "paper" && cm === "lizard") {
    status.innerText = "you lost comp lizard ate your paper.";
    scoreL();
  } else if (ym === "spock" && cm === "paper") {
    status.innerText = "you lost comp paper disproved your Spock.";
    scoreL();
  } else if (ym === "rock" && cm === "spock") {
    status.innerText = "you lost comp Spock vaporized your rock.";
    scoreL();
  } else if (ym === "scissors" && cm === "rock") {
    status.innerText = "you lost comp rock broke your scissors.";
    scoreL();
  }
  // 10 ways to win now - upper case You :-)
  else if (ym === "scissors" && cm === "paper") {
    status.innerText = "You Won, Scissors cuts comp paper!";
    scoreW();
  } else if (ym === "scissors" && cm === "lizard") {
    status.innerText = "You Won, Scissors decaps comp lizard!";
    scoreW();
  } else if (ym === "rock" && cm === "scissors") {
    status.innerText = "You Won, Rock smashes comp scissors!";
    scoreW();
  } else if (ym === "rock" && cm === "lizard") {
    status.innerText = "You Won, Rock flattens comp lizard!";
    scoreW();
  } else if (ym === "paper" && cm === "spcok") {
    status.innerText =
      "You Won, your Paper disproved comp Spock - nice research!";
    scoreW();
  } else if (ym === "paper" && cm === "rock") {
    status.innerText =
      "You Won, your Paper covered comp rock, and other good topics!";
    scoreW();
  } else if (ym === "lizard" && cm === "spock") {
    status.innerText = "You Won, your Lizard posioned comp Spock.";
    scoreW();
  } else if (ym === "lizard" && cm === "paper") {
    status.innerText =
      "You Won, your Lizard ate the comp paper! .... nom nom nom ...";
    scoreW();
  } else if (ym === "spock" && cm === "rock") {
    status.innerText =
      "You Won, your Spock vaporized comp rock! ... pew pew pew ...";
    scoreW();
  } else if (ym === "spock" && cm === "scissors") {
    status.innerText =
      "You Won, your Spock smashed comp scissors! - May you live long and prosper!";
    scoreW();
  }
}

//// might as well keep score if you're playing

let win = document.getElementById("win");
let lose = document.getElementById("lose");
let tie = document.getElementById("tie");
w = 0;
l = 0;
t = 0;

/// if it's a tie
function scoreT() {
  t += 1;
  tie.innerText = t;
}
/// if its a loss
function scoreL() {
  l += 1;
  lose.innerText = l;
}
/// if you win - yeah right - you won't.
function scoreW() {
  w += 1;
  win.innerText = w;
}

/// the end - code by: Brian Loveless
