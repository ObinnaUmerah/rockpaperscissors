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

const result = document.querySelector('#results');

let playerScore = 0;
let compScore = 0;

// const results = document.querySelector('.results');
// results.addEventListener('click', () 



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

 function playRound(choice){
    //Create local variables to hold parameters as lowercase letters
    let computer = getComputerChoice()
    
    //IF Player and Computer are the same

    if(choice === computer){
        //Was previously player before, it's now choice
        result.textContent = "It's a tie! Player: " + playerScore + " Computer: " + compScore;
    }

    else if ((choice === "rock" && computer === "scissors") ||
               (choice === "paper" && computer === "rock") ||
               (choice === "scissors" && computer === "paper")) {
        playerScore++;
        result.textContent = "You win! Player: " + playerScore + " Computer: " + compScore;
    } else {
        compScore++;
        result.textContent = "Computer wins! Player: "  + playerScore + " Computer: " + compScore
    }

    // Check if either player or computer has reached 5 points
    if (playerScore === 5 || compScore === 5) {
        // Declare the winner
        if (playerScore === 5) {
            result.textContent = "\nPlayer wins the game! Player: "  + playerScore + " Computer: " + compScore;
        } else {
            result.textContent = "\nComputer wins the game! Player: "  + playerScore + " Computer: " + compScore;
        }

   
}
 }


//Create and initialize variable to hold user's input
// let input = prompt("Hello. Please choose between rock, paper, and scissors")
//Create variable to store player's score
let player
//Create variable to store computer's score
let computer




