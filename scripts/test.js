// Description:
//   This is a test
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot test - It's a test
//
// Author:
//  Jordan Wilson



function numgame(msg){

    msg.send("Let's play Magic Numbers! :D"); //Magic number game! YAAAAYYY!
    msg.send("What's your guess?");

    var magNum = Math.ceil(Math.random() * 10 + 1);
    var guess = //robot.hear(/test/i);
    var tries = 3;
    
        if(guess < magNum){
            
            msg.send("Sorry, your guess is too low. You have " + tries +" chances left.");
            tries--;
        }
        else if(guess > magNum){
            msg.send("Sorry, your guess is too high. You have " + tries + "chances left.");
            tries--;
        }
        else if(guess == magNum){
            msg.send("You got it!!!");
        }
        if(tries == 0){
            msg.send("You have no more chances left!");
        }


};

//Listens for the test string and executes the function
module.exports = function(robot) {
  return robot.respond(/test/i, function(msg) {
 	 numgame(msg);
  });
}
