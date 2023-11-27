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
        result = "Rock"
    }
    //ELSE IF the random number is 1 THEN
    else if(random == 1){
        //Set the string variable to "Paper"
        result = "Paper"
    }
    //ELSE IF the random number is 2 THEN
    else if(random == 2){
        //Set the string variable to "Scissors"
        result = "Scissors"
    //END IF
    //Return the the string variable
    }
    return result
 }

 function playRound(playerChoice, getComputerChoice){
    //Create local variables to hold parameters as lowercase letters
    let player = playerChoice.toLowerCase()
    let computer = getComputerChoice.toLowerCase()
    //Create a variable to display the message
    //IF Rock and Paper
    if(player === "rock" && computer === "paper"){
        //Return defeat
        return "You Lose! Paper beats Rock"}
    //ELIF Rock and Scissors
    else if(player === "rock" && computer === "scissors"){
        //Return victory
        return "You Win! Rock beats Scissors"
    }
    //ELIF Paper and Scissors
    else if(player === "paper" && computer === "scissors"){
        //Return defeat
        return "You Lose! Scissors beat Paper"
    }
    //ELIF Paper and Rock
    else if(player === "paper" && computer === "rock"){
        //Return victory
        return "You Win! Paper beats Rock"}
    //ELIF Scissors and Rock
    else if(player === "scissors" && computer === "rock"){
        //Return defeat
        return "You Lose! Scissors beat Paper"
    }
    //ELIF Scissors and Paper
    else if(player === "scissors" && computer === "paper"){
        //Return victory
        return "You Win! Paper beats Rock" 
 }
}

console.log(getComputerChoice());
// console.log("Hello World")