/*  TODO STEPS FOR THE GUESS GAME: 
1) create range between 1 and 2.
2) prompt user to enter their username
3) create a function that takes "range" as a parameter
4) prompt the current player to predict the number generated between the given range.

  stage 1: range is from 1 and 2
  stage 2: range is from 1 and 3
  stage 3: range is from 1 and 4
  stage 4: range is from 1 and 5 
   etc
   5) if the number predicted is correct, award the current player a point and move them to stage 2 by increment the range limit value by 1:

*/

  console.log("Welcome to Number Guessing Game created by Kayode Owolabi Jesuseun")
 function checkGuessedNumber (low = 1, high = 2) {
   let userName = prompt("Enter your name")
   let userPhoneNumber = prompt("Enter your guess number")
   let point = 0;
  for(let i = 0; i < 5; i++) {
    let userConvertedNumber = Number.parseInt(userPhoneNumber, 10);
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let convertedRandomNumber = Number.parseInt(randomNumber, 10);
   if(userConvertedNumber === convertedRandomNumber){
      console.log(`Correct! You have earned ${point += 1} award`)
     console.log("You are qualify to guess number at stage 2 of the game")
      console.log(`Your new Guess number is from ${low} to ${high += 1}`)
     userPhoneNumber = prompt("Enter your guess number")
     userConvertedNumber = Number.parseInt(userPhoneNumber, 10);
      
   } else if(userConvertedNumber === convertedRandomNumber){
     console.log(`Correct! You have earned ${point += 1} awards`)
     console.log("You are qualify for stage 3 of the game")
      console.log(`Your new Guess number is from ${low} to ${high += 1}`)
     userPhone = prompt("Enter your guess number")
     userConvertedNumber = Number.parseInt(userPhone, 10);
   } 
     else if(userConvertedNumber === convertedRandomNumber) {
       console.log(`Correct! You have earned ${point += 1 } awards`)
     console.log("You are qualify for stage 4 of the game")
      console.log(`Your new Guess number is from ${low} to ${high += 1}`)
     userPhoneNumber = prompt("Enter your guess number")
     userConvertedNumber = Number.parseInt(userPhoneNumber, 10);
   }

       else if(userConvertedNumber === convertedRandomNumber) {
      console.log(`Correct! You have earned ${point += 1 } awards`)
     console.log("You are qualify for stage 5 of the game")
      console.log(`Your new Guess number is from ${low} to ${high += 1}`)
     userPhoneNumber = prompt("Enter your guess number")
     userConvertedNumber = Number.parseInt(userPhoneNumber, 10);
   }
         else if(userConvertedNumber === convertedRandomNumber) {
     console.log(`Correct! You have earned ${point += 1} awards`)
     console.log("You are qualify for stage 6 of the game")
      console.log(`Your new Guess number is from ${low} to ${high += 1}`)
           console.log("You have won the game")
   }

      else {
     console.log("Try again")
        userPhoneNumber = prompt("Enter your guess number")
     userConvertedNumber = Number.parseInt(userPhoneNumber, 10);
   }
     }
     if( point >= 4) {
        return "Congratulations! You scored atleast 4 points, We are proud of you!"
     } else {
       return `You have earned a total ${point} award! Try once again`
     }
   
 }

console.log(checkGuessedNumber());

 



