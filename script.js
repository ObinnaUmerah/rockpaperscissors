const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock")
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper")
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors")
});



function getComputerChoice(){
    //Create a variable for the string result
    let result;
    //Create a variable for the random number
    let random;
    //Call the Math class' random function
    //(Revision: Changed max from 2 to 3. Did not know that the range was 2 for some odd reason.)
    random = Math.floor(Math.random() * (3 - 0)) + 0;
    //IF the random number is 0 THEN
    if(random == 0){
        //Set the string variable to "Rock"
        result = "rock"
    }
    //ELSE IF the random number is 1 THEN
    else if(random == 1){
        //Set the string variable to "Paper"
        result = "paper"
    }
    //ELSE IF the random number is 2 THEN
    else if(random == 2){
        //Set the string variable to "Scissors"
        result = "scissors"
    //END IF
    //Return the the string variable
    }
    return result
 }

 function playRound(playerChoice){
    //Create local variables to hold parameters as lowercase letters
    // let player = playerChoice.toLowerCase()
    let computer = getComputerChoice().toLowerCase()
    //Create a variable to display the message
    //Create a scenario for a tie between the player and the computer
    //IF Player and Computer are the same

    if(player === computer){
       return playRound(player)
    }
    //IF Rock and Paper
    if(player === "rock" && computer === "paper"){
        //Return defeat
        return false}
    //ELIF Rock and Scissors
    else if(player === "rock" && computer === "scissors"){
        //Return victory
        return true
    }
    //ELIF Paper and Scissors
    else if(player === "paper" && computer === "scissors"){
        //Return defeat
        return false
    }
    //ELIF Paper and Rock
    else if(player === "paper" && computer === "rock"){
        //Return victory
        return true}
    //ELIF Scissors and Rock
    else if(player === "scissors" && computer === "rock"){
        //Return defeat
        return false
    }
    //ELIF Scissors and Paper
    else if(player === "scissors" && computer === "paper"){
        //Return victory
        return true 
 }
}

//Create and initialize variable to hold user's input
// let input = prompt("Hello. Please choose between rock, paper, and scissors")
//Create variable to store player's score
let player
//Create variable to store computer's score
let computer
//FOR the number being smaller than five
// for(let i = 0; i < 5; i++){
    //IF playRound is TRUE
    if(playRound() === true){  
        //Add one to player's score
        
        //(Commented out this part of the code)
        // player++
        //Print out the current round along with the winner

        //Commented this part of the code as well
        // console.log("You won round " + parseInt(i + 1));
        console.log("Congratulations, you have won the game");
}
//ELSE
    else{
        //Add one to computer's score


        //(Commented out this code)
        // computer++
        //Print out the current round along with the winner
        // Commented out this part of the code
        // console.log("The computer won round " + parseInt(i + 1));
        console.log("The computer has won the game. Better luck next time.");
    }
// }
    // //IF Player is greater than computer
    // if(player > computer){
    //     //Print that the player is the winner
    //     console.log("Congratulations, you have won the game!");
    // }
    // //ELSE
    //     //Print that the computer is the winner
    //     console.log("The computer has won the game. Better luck next time.");



