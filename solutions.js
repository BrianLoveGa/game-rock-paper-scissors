
  // ROCK PAPER SCISSOR



// pick a random number to get a random computer move

 function  randomMove() {
    switch (Math.floor(Math.random() * 5)) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
       case 3:
         return 'spock';
       case 4:
         return 'lizard';        
       }
   }
   
// for computer vs machine to determine winner - with specific outcomes

   function decideWinner(compMove, machineMove) {
    if (compMove === machineMove) {
        return 'The game is a tie!'
      } else if // scissors cuts paper
       ((compMove === 'paper') && (machineMove === 'scissors')) {
         return 'The machine won! scissors cut paper'
}      else if //paper covers rock 
         ((compMove === 'rock') && (machineMove === 'paper')) {
         return 'The machine won! paper covers rock'
}      else // rock crushes lizard
          if ((compMove === 'lizard') && (machineMove === 'rock')) {
         return 'The machine won! rock crushes lizard'
}       else // lizard posions spock
          if ((compMove === 'spock') && (machineMove === 'lizard')) {
         return 'The machine won! lizard posions spock'
}       else // spock smashes scissors
          if ((compMove === 'scissors') && (machineMove === 'spock')) {
         return 'The machine won! spock smashes scissors'         
}       else // scissors decapitate lizard
          if ((compMove === 'lizard') && (machineMove === 'scissors')) {
         return 'The machine won! scissors decapitate lizard'
}       else //lizard eats paper
          if ((compMove === 'paper') && (machineMove === 'lizard')) {
         return 'The machine won! lizard eats paper'
}       else    // paper disproves spock
          if ((compMove === 'spock') && (machineMove === 'paper')) {
         return 'The machine won! paper disproves spock'
}       else // spock vaporizes rock
          if ((compMove === 'rock') && (machineMove === 'spock')) {
         return 'The machine won! spock vaporizes rock'
}       else // and as always has rock crushes scissors
          if ((compMove === 'scissors') && (machineMove === 'rock')) {
         return 'The machine won! rock crushes scissors'
}       else 
         return 'Computer won!'
};
   



// a function to have computer play again machine

   const rockPaperScissors = () => {
    let compMove = randomMove();
    let machineMove = randomMove();
     console.log('Computer threw: ' + compMove);
       console.log('The machine threw: ' + machineMove);
             console.log(decideWinner(compMove,machineMove));
   }


 let compuMove = randomMove();

 
const rockPaperSci = prompt("What do you throw? Enter your answer below ... 3....2.....1.......Shoot", "CHOOSE: rock or paper or lizard or scissors or spock")
    if (rockPaperSci === 'rock'){
      alert('The computer threw: ' + compuMove)
      alert (decidePromptWinner(x='rock',compuMove))
    } else if (rockPaperSci === 'paper') {
      alert('The computer threw: ' + compuMove)
      alert (decidePromptWinner(x='paper',compuMove))
    } else if (rockPaperSci === 'lizard'){
      alert('The computer threw: ' + compuMove)
      alert (decidePromptWinner(x='lizard',compuMove))
    } else if (rockPaperSci === 'scissors'){
      alert('The computer threw: ' + compuMove)
      alert (decidePromptWinner(x='scissors',compuMove))
    } else if (rockPaperSci === 'spock'){
      alert('The computer threw: ' + compuMove)
      alert (decidePromptWinner(x='spock',compuMove))
    } else if ((rockPaperSci !== 'rock')||(rockPaperSci !=='paper')||(rockPaperSci!=='lizard')||(rockPaperSci!=='scissors')||(rockPaperSci!=='spock')){
      alert("Please enter your move in lowercase exactly as it is spelled in the prompt ... or you chose to exit. Thanks for stopping by.... Not much else here currently.")

    };

    // delay prompt 5 secs so page can load

    const promptDelay = () =>{
      setTimeout(rockPaperSci, 5000);
    };
    
    promptDelay();
  


   function decidePromptWinner(x, compuMove) {
    if (x === compuMove) {
         console.log("you threw " +x);
         console.log("the comp threw " +compuMove);
        console.log( 'The game is a tie!' );
        alert(" This round is a tie ");
      } else if // scissors cuts paper
       ((x === 'paper') && (compuMove === 'scissors')) {
         console.log("you threw " +x);
         console.log("the comp threw " +compuMove);
         alert( 'The machine won! - scissors cuts paper'); 
         console.log("The machine won! - scissors cuts paper");
         alert("Refresh to play again");
}      else if //paper covers rock 
         ((x === 'rock') && (compuMove === 'paper')) {
          console.log("you threw " +x);
          console.log("the comp threw " +compuMove);         
          alert( 'The machine won! - paper covers rock' );
          console.log("The machine won! - paper covers rock");
          alert("Refresh to play again");
}      else // rock crushes lizard
          if ((x === 'lizard') && (compuMove === 'rock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - rock crushes lizard');
            console.log("The machine won! - rock crushes lizard");
            alert("Refresh to play again");
}       else // lizard posions spock
          if ((x === 'spock') && (compuMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove);
            alert( 'The machine won! lizard posions spock'); 
            console.log("The machine won! lizard posions spock");
            alert("Refresh to play again");
}       else // spock smashes scissors
          if ((x === 'scissors') && (compuMove === 'spock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - spock smashes scissors' );
            console.log( 'The machine won! - spock smashes scissors' );
            alert("Refresh to play again");        
}       else // scissors decapitate lizard
          if ((x === 'lizard') && (compuMove === 'scissors')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - scissors decapitate lizard');
            console.log('The machine won! - scissors decapitate lizard');
            alert("Refresh to play again");
}       else //lizard eats paper
          if ((x === 'paper') && (compuMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - lizard eats paper');
            console.log('The machine won! - lizard eats paper');
            alert("Refresh to play again");
}       else    // paper disproves spock
          if ((x === 'spock') && (compuMove === 'paper')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - paper disproves spock');
            console.log('The machine won! - paper disproves spock');
            alert("Refresh to play again");
}       else // spock vaporizes rock
          if ((x === 'rock') && (compuMove === 'spock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - spock vaporizes rock');
            console.log( 'The machine won! - spock vaporizes rock');
            alert("Refresh to play again");
}       else // and as always has rock crushes scissors
          if ((x === 'scissors') && (compuMove === 'rock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +compuMove); 
            alert( 'The machine won! - and as always has rock crushes scissors');
            console.log( 'The machine won! - and as always has rock crushes scissors');
            alert("Refresh to play again");
            /// list all your wins to eliminate the you win after you lose alert bug - prob an easier way but i'm new...
}            else if // scissors cuts paper
            ((compuMove === 'paper') && ( x === 'scissors')) {
              console.log("you threw " +x);
              console.log("the comp threw " +compuMove);
              alert( 'You won! - scissors cuts paper'); 
              console.log("You win! - scissors cuts paper");
              alert("Refresh to play again");
     }      else if //paper covers rock 
              ((compuMove === 'rock') && ( x === 'paper')) {
               console.log("you threw " +x);
               console.log("the comp threw " +compuMove);         
               alert( 'You won! - paper covers rock' );
               console.log("You win! - paper covers rock");
               alert("Refresh to play again");
     }      else // rock crushes lizard
               if ((compuMove === 'lizard') && ( x === 'rock')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'YOU won! - rock crushes lizard');
                 console.log("YOU win! - rock crushes lizard");
                 alert("Refresh to play again");
     }       else // lizard posions spock
               if ((compuMove === 'spock') && ( x === 'lizard')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove);
                 alert( 'You won! lizard posions spock'); 
                 console.log("You win! lizard posions spock");
                 alert("Refresh to play again");
     }       else // spock smashes scissors
               if ((compuMove === 'scissors') && ( x === 'spock')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - spock smashes scissors' );
                 console.log( 'You win! - spock smashes scissors' );
                 alert("Refresh to play again");        
     }       else // scissors decapitate lizard
               if ((compuMove === 'lizard') && ( x === 'scissors')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - scissors decapitate lizard');
                 console.log('You win! - scissors decapitate lizard');
                 alert("Refresh to play again");
     }       else //lizard eats paper
               if ((compuMove === 'paper') && ( x === 'lizard')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - lizard eats paper');
                 console.log('You win! - lizard eats paper');
                 alert("Refresh to play again");
     }       else    // paper disproves spock
               if ((compuMove === 'spock') && ( x === 'paper')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - paper disproves spock');
                 console.log('You win! - paper disproves spock');
                 alert("Refresh to play again");
     }       else // spock vaporizes rock
               if ((compuMove === 'rock') && (x === 'spock')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - spock vaporizes rock');
                 console.log( 'You win! - spock vaporizes rock');
                 alert("Refresh to play again");
     }       else // and as always has rock crushes scissors
               if ((compuMove === 'scissors') && ( x === 'rock')) {
                 console.log("you threw " +x);
                 console.log("the comp threw " +compuMove); 
                 alert( 'You won! - as always has rock crushes scissors');
                 console.log( 'You win! - as always has rock crushes scissors');
                 alert("Refresh to play again");
}};
   




/// watch the computer play itself in console log
/// 2 rounds to start

 rockPaperScissors();
 rockPaperScissors();






