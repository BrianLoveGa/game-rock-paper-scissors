// Answers for homework day 4 Brian L

// worked in a group zoom after class

// Verbal questions


// What is the difference between a parameter and an argument?
// the argument is the formula or function & parameter is an input of a function or formula

// Within a function, what is the difference between return and console.log?
// return will make a value that can be used later in the function... console . log is a command that "prints" to the console so we can check if our js is working.

// Palindrome

// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

function checkPalindrome(str) {
    stra = str.toLowerCase();
    strb = stra.split("");
    // string to lower case and each letter saved to an array
    y = str.toLowerCase();
    yx = y.split("");
    yxz= yx.reverse();
    // string to lower case split to a diff array and the array reversed
    for (let i=0; i<strb.length;i++){
      foo = strb[i];
    } for (let n=0;n<yxz.length;n++){
      moo = yxz[n]
    }
    //  not working prob need a for loop for each array - normal and reversed above this line 

    //- yep working now with the double loops
      if (foo === moo) {
        return true;
      } else if (foo !== moo){ /// this could prob be shortened but it is working so I am scared to mess it up
        return false;
  };
};

console.log("hello")
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("racecaryayaz"));
console.log(checkPalindrome("civic"));
console.log(checkPalindrome("Noon"));
// console will show hello
// true
// false
// true
// true
console.log(checkPalindrome("your momma"));
// => false
console.log(checkPalindrome("Radar"));
// => true
console.log(checkPalindrome("Borscht"));
// => false


// Sum Array

function sumArray(arr) {
  let sum = 0;
  for (let i=0;i<arr.length;i++){
    x = 0;
    x += sum + arr[i];
    console.log(x); // returns 1 2 3 4 5 6 ... 
  }
    console.log(x);
    console.log(sum);
    return x;

};
 console.log(sumArray([1, 2, 3, 4, 5, 6]));

/// only getting 6 as result... something wrong

// prime numbers 
// these next 2 we did as a group but as to who was in the group now eludes me... I will be better about logging this info moving forward


function checkPrime(n) {
  if (n===1){
    return false; /// 1 not prime
  } else if(n === 2){
    return true; // 2 is prime
  }else {
    for(let x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    } return true;  
  };
};

// console.log(checkPrime(7));
// step 2

function printPrimes(limit) {
 
    var notPrimes = [];
    var primes = [];
  
    for (var i = 1; i < limit; i++) { notPrimes.push(true); } 
    for (var i = 2; i < limit; i++) {
      if (notPrimes[i-2]) {
        for (var j = i*2; j <= limit; j += i) {
          notPrimes[j-2] = false;    
        }
      }
    }
    for (var p = 0; p < notPrimes.length; p++) {
      if (notPrimes[p]) { primes.push(p+2); }
    }
    
    return primes;
  
  } 
  // this is working but don't want it to run checking the game

  // console.log(printPrimes(97));

  // wasn't sure how to call on earlier function in this set up i found the bones of on reddit 

  // ROCK PAPER SCISSOR

  /// this was all me and the prompt version is working but commented out for hw grading...
   
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
         return 'The machine won!'
}      else if //paper covers rock 
         ((usersMove === 'rock') && (computersMove === 'paper')) {
         return 'The machine won!'
}      else // rock crushes lizard
          if ((usersMove === 'lizard') && (computersMove === 'rock')) {
         return 'The machine won!'
}       else // lizard posions spock
          if ((usersMove === 'Spock') && (computersMove === 'lizard')) {
         return 'The machine won!'
}       else // spock smashes scissors
          if ((usersMove === 'scissors') && (computersMove === 'Spock')) {
         return 'The machine won!'         
}       else // scissors decapitate lizard
          if ((usersMove === 'lizard') && (computersMove === 'scissors')) {
         return 'The machine won!'
}       else //lizard eats paper
          if ((usersMove === 'paper') && (computersMove === 'lizard')) {
         return 'The machine won!'
}       else    // paper disproves spock
          if ((usersMove === 'Spock') && (computersMove === 'paper')) {
         return 'The machine won!'
}       else // spock vaporizes rock
          if ((usersMove === 'rock') && (computersMove === 'Spock')) {
         return 'The machine won!'
}       else // and as always has rock crushes scissors
          if ((usersMove === 'scissors') && (computersMove === 'rock')) {
         return 'The machine won!'
}       else 
         return 'You won!'
};
   


let compMove = randomMove();



   const rockPaperScissors = () => {
    let usersMove = randomMove();
    const computersMove = randomMove();
     console.log('You threw: ' + usersMove);
       console.log('The computer threw: ' + computersMove);
             console.log(decideWinner(usersMove,computersMove));
   }

  //  let rockPaperSci = prompt("What do you throw? Enter your answer below ... 3....2.....1.......Shoot", "rock or paper or lizard or scissors or spock")
  //   if (rockPaperSci === 'rock'){
  //     alert('The computer threw: ' + compMove)
  //     alert (decidePromptWinner(x='rock',compMove))
  //   } else if (rockPaperSci === 'paper') {
  //     alert('The computer threw: ' + compMove)
  //     alert (decidePromptWinner(x='paper',compMove))
  //   } else if (rockPaperSci === 'lizard'){
  //     alert('The computer threw: ' + compMove)
  //     alert (decidePromptWinner(x='lizard',compMove))
  //   } else if (rockPaperSci === 'scissors'){
  //     alert('The computer threw: ' + compMove)
  //     alert (decidePromptWinner(x='scissors',compMove))
  //   } else if (rockPaperSci === 'spock'){
  //     alert('The computer threw: ' + compMove)
  //     alert (decidePromptWinner(x='spock',compMove))
  //   } else if ((rockPaperSci !== 'rock')||(rockPaperSci !=='paper')||(rockPaperSci!=='lizard')||(rockPaperSci!=='scissors')||(rockPaperSci!=='spock')){
  //     alert("Please enter your move in lowercase exactly as it is spelled in the prompt ... or you chose to exit. thanks for stopping by.... Not much else here currently.")
  //   };




   function decidePromptWinner(x, computersMove) {
    if (x === computersMove) {
         console.log("you threw " +x);
         console.log("comp threw " +computersMove);
        return 'The game is a tie!'
      } else if // scissors cuts paper
       ((x === 'paper') && (computersMove === 'scissors')) {
         console.log("you threw " +x);
         console.log("comp threw " +computersMove);
         alert( 'The machine won! - scissors cuts paper'); 
         console.log("The machine won! - scissors cuts paper");
         alert("Refresh to play again");
}      else if //paper covers rock 
         ((x === 'rock') && (computersMove === 'paper')) {
          console.log("you threw " +x);
          console.log("comp threw " +computersMove);         
          alert( 'The machine won! - paper covers rock' )
          console.log("The machine won! - paper covers rock")
          alert("Refresh to play again")
}      else // rock crushes lizard
          if ((x === 'lizard') && (computersMove === 'rock')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - rock crushes lizard')
            alert("Refresh to play again")
}       else // lizard posions spock
          if ((x === 'Spock') && (computersMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! lizard posions spock') 
            alert("Refresh to play again")
}       else // spock smashes scissors
          if ((x === 'scissors') && (computersMove === 'Spock')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - spock smashes scissors' )
            alert("Refresh to play again")        
}       else // scissors decapitate lizard
          if ((x === 'lizard') && (computersMove === 'scissors')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - scissors decapitate lizard')
            alert("Refresh to play again")
}       else //lizard eats paper
          if ((x === 'paper') && (computersMove === 'lizard')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - lizard eats paper')
            alert("Refresh to play again")
}       else    // paper disproves spock
          if ((x === 'Spock') && (computersMove === 'paper')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - paper disproves spock')
            alert("Refresh to play again")
}       else // spock vaporizes rock
          if ((x === 'rock') && (computersMove === 'Spock')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - spock vaporizes rock')
            alert("Refresh to play again")
}       else // and as always has rock crushes scissors
          if ((x === 'scissors') && (computersMove === 'rock')) {
            console.log("you threw " +x);
            console.log("comp threw " +computersMove); 
            alert( 'The machine won! - and as always has rock crushes scissors')
            alert("Refresh to play again")
}       else 
          console.log("you threw " +x);
          console.log("comp threw " +computersMove); 
          alert( 'You won! - good job')
          alert("Refresh to play again")
};
   

/// watch the computer play itself in console log
 rockPaperScissors();
// rockPaperScissors();
// rockPaperScissors();
// rockPaperScissors();
// rockPaperScissors();





