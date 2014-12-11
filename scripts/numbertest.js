
    
    
    
    
    
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
 	 setupObj.startGame();
  });	
  
  robot.respond(/stop test/i, function(msg) {
 	 setupObj=null;
  });
  
 //  var setupObj = {
// 				tries : 3,
//     			magNum : Math.ceil(Math.random() * 10 - 1)
//   };

	var setupObj = false;
  
   setupObj.startGame = function(){
		var tries = this.tries;
		var magNum = this.magNum;
    	console.log("###########RANDOM NUM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", magNum);
   };
  	
  robot.hear(/^\d{1,2}$/i, function(msg){
  		var guess = msg.match[0];
  		console.log("my guess ",guess);
  		
    	if(guess < setupObj.magNum){
            msg.send("Sorry, your guess is too low. You have " + setupObj.tries +" chances left. MAGIC:" +setupObj.magNum);
            setupObj.tries--;
        }
        else if(guess > setupObj.magNum){
            msg.send("Sorry, your guess is too high. You have " + setupObj.tries + " chances left. MAGIC:" +setupObj.magNum);
            setupObj.tries--;
        }
        else if(guess == setupObj.magNum){
            msg.send("You got it!!! MAGIC:" +setupObj.magNum);
            // setupObj.magNum = Math.ceil(Math.random() * 10 - 1);
//             setupObj.tries = 3;
//             setupObj.startGame();
//             msg.send("We started a new game MAGIC:" +setupObj.magNum);
        }
        if(setupObj.tries == 0){
            msg.send("You have no more chances left! MAGIC:" +setupObj.magNum);
            setupObj.magNum = Math.ceil(Math.random() * 10 - 1);
            setupObj.tries = 3;
            setupObj.startGame();
            msg.send("We started a new game MAGIC:" +setupObj.magNum);
        }
    });
}
