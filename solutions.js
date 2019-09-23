
  // ROCK PAPER SCISSOR

  /// this was all me and the prompt version is working 
   
 function  randomMove() {
    switch (Math.floor(Math.random() * 5)) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
       case 3:
         return 'Spock';
       case 4:
         return 'lizard';        
       }
   }
   
   function decideWinner(usersMove, computersMove) {
    if (usersMove === computersMove) {
        return 'The game is a tie!'
      } else if // scissors cuts paper
       ((usersMove === 'paper') && (computersMove === 'scissors')) {
         return 'The machine won! scissors cut paper'
}      else if //paper covers rock 
         ((usersMove === 'rock') && (computersMove === 'paper')) {
         return 'The machine won! paper covers rock'
}      else // rock crushes lizard
          if ((usersMove === 'lizard') && (computersMove === 'rock')) {
         return 'The machine won! rock crushes lizard'
}       else // lizard posions spock
          if ((usersMove === 'Spock') && (computersMove === 'lizard')) {
         return 'The machine won! lizard posions spock'
}       else // spock smashes scissors
          if ((usersMove === 'scissors') && (computersMove === 'Spock')) {
         return 'The machine won! spock smashes scissors'         
}       else // scissors decapitate lizard
          if ((usersMove === 'lizard') && (computersMove === 'scissors')) {
         return 'The machine won! scissors decapitate lizard'
}       else //lizard eats paper
          if ((usersMove === 'paper') && (computersMove === 'lizard')) {
         return 'The machine won! lizard eats paper'
}       else    // paper disproves spock
          if ((usersMove === 'Spock') && (computersMove === 'paper')) {
         return 'The machine won! paper disproves spock'
}       else // spock vaporizes rock
          if ((usersMove === 'rock') && (computersMove === 'Spock')) {
         return 'The machine won! spock vaporizes rock'
}       else // and as always has rock crushes scissors
          if ((usersMove === 'scissors') && (computersMove === 'rock')) {
         return 'The machine won! rock crushes scissors'
}       else 
         return 'Computer won!'
};
   


let compMove = randomMove();



   const rockPaperScissors = () => {
    let usersMove = randomMove();
    const computersMove = randomMove();
     console.log('Computer threw: ' + usersMove);
       console.log('The machine threw: ' + computersMove);
             console.log(decideWinner(usersMove,computersMove));
   }

   let rockPaperSci = prompt("What do you throw? Enter your answer below ... 3....2.....1.......Shoot", "CHOOSE: rock or paper or lizard or scissors or spock")
    if (rockPaperSci === 'rock'){
      alert('The computer threw: ' + compMove)
      alert (decidePromptWinner(x='rock',compMove))
    } else if (rockPaperSci === 'paper') {
      alert('The computer threw: ' + compMove)
      alert (decidePromptWinner(x='paper',compMove))
    } else if (rockPaperSci === 'lizard'){
      alert('The computer threw: ' + compMove)
      alert (decidePromptWinner(x='lizard',compMove))
    } else if (rockPaperSci === 'scissors'){
      alert('The computer threw: ' + compMove)
      alert (decidePromptWinner(x='scissors',compMove))
    } else if (rockPaperSci === 'spock'){
      alert('The computer threw: ' + compMove)
      alert (decidePromptWinner(x='spock',compMove))
    } else if ((rockPaperSci !== 'rock')||(rockPaperSci !=='paper')||(rockPaperSci!=='lizard')||(rockPaperSci!=='scissors')||(rockPaperSci!=='spock')){
      alert("Please enter your move in lowercase exactly as it is spelled in the prompt ... or you chose to exit. Thanks for stopping by.... Not much else here currently.")
    };

  


   function decidePromptWinner(x, computersMove) {
    if (x === computersMove) {
         console.log("you threw " +x);
         console.log("the comp threw " +computersMove);
        return 'The game is a tie!'
      } else if // scissors cuts paper
       ((x === 'paper') && (computersMove === 'scissors')) {
         console.log("you threw " +x);
         console.log("the comp threw " +computersMove);
         alert( 'The machine won! - scissors cuts paper'); 
         console.log("The machine won! - scissors cuts paper");
         alert("Refresh to play again");
}      else if //paper covers rock 
         ((x === 'rock') && (computersMove === 'paper')) {
          console.log("you threw " +x);
          console.log("the comp threw " +computersMove);         
          alert( 'The machine won! - paper covers rock' )
          console.log("The machine won! - paper covers rock")
          alert("Refresh to play again")
}      else // rock crushes lizard
          if ((x === 'lizard') && (computersMove === 'rock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - rock crushes lizard')
            alert("Refresh to play again")
}       else // lizard posions spock
          if ((x === 'Spock') && (computersMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! lizard posions spock') 
            alert("Refresh to play again")
}       else // spock smashes scissors
          if ((x === 'scissors') && (computersMove === 'Spock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - spock smashes scissors' )
            alert("Refresh to play again")        
}       else // scissors decapitate lizard
          if ((x === 'lizard') && (computersMove === 'scissors')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - scissors decapitate lizard')
            alert("Refresh to play again")
}       else //lizard eats paper
          if ((x === 'paper') && (computersMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - lizard eats paper')
            alert("Refresh to play again")
}       else    // paper disproves spock
          if ((x === 'Spock') && (computersMove === 'paper')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - paper disproves spock')
            alert("Refresh to play again")
}       else // spock vaporizes rock
          if ((x === 'rock') && (computersMove === 'Spock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - spock vaporizes rock')
            alert("Refresh to play again")
}       else // and as always has rock crushes scissors
          if ((x === 'scissors') && (computersMove === 'rock')) {
            console.log("you threw " +x);
            console.log("the comp threw " +computersMove); 
            alert( 'The machine won! - and as always has rock crushes scissors')
            alert("Refresh to play again")
}       else 
          console.log("you threw " +x);
          console.log("the comp threw " +computersMove); 
          alert( 'You won! - good job')
          alert("Refresh to play again")
};
   

/// watch the computer play itself in console log
 rockPaperScissors();
 rockPaperScissors();






