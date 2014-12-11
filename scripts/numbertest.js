
    
    
    
    
    
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

};

//Listens for the test string and executes the function
module.exports = function(robot) {
  robot.respond(/test/i, function(msg) {
 	 numgame(msg);
  });	
  
  	var tries = 3;
    var magNum = Math.ceil(Math.random() * 10 - 1);
    console.log("RANDOM NUM ", magNum);
  
  robot.hear(/^\d{1,2}$/i, function(msg){
  		var guess = msg.match[0];
  		console.log("my guess ",guess);
  		
    	if(guess < magNum){
            msg.send("Sorry, your guess is too low. You have " + tries +" chances left. MAGIC:" +magNum);
            tries--;
        }
        else if(guess > magNum){
            msg.send("Sorry, your guess is too high. You have " + tries + "chances left. MAGIC:" +magNum);
            tries--;
        }
        else if(guess == magNum){
            msg.send("You got it!!! MAGIC:" +magNum);
        }
        if(tries == 0){
            msg.send("You have no more chances left! MAGIC:" +magNum);
            
        }
    });
}
