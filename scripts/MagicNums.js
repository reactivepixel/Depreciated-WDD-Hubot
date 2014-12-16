// Description:
//   Magic Numbers is a game where Hubot picks a random number 0-10 and and the user has to guess it
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot play magic numbers - guess a number between 0-10
//
// Author:
//  Jordan Wilson


//This is where the game starts and the rules are described to the user
function numGame(msg){

	msg.send("Let's play Magic Numbers! :D");// Intro.
    msg.send("Pick a number between 0-10 and I'll tell you if you're high, low or spot on."); 
    msg.send("You have 3 tries.");
    msg.send("What's your guess?");

};

//Listens for the test string and executes the function
module.exports = function(robot) {
	robot.respond(/play magic numbers$/i, function(msg) {
	numGame(msg); //Plays the number game.
 	setupObj.startGame();//Sets the random number and the tries.
  });	
  
robot.respond(/quit$/i, function(msg) {
	setupObj.playing=false;
 	msg.send("Oh really? What if I wanted to play again? No? Go quit then.");//Quit the game.
  });

	var setupObj = {};//This object holds the rules of the game.
  	//The rules.
   setupObj.startGame = function(){
		this.tries = 3;
		this.magNum = Math.ceil(Math.random() * 10 - 1);
		this.playing = true;
   };
  	
  robot.hear(/^\d{1,2}$/i, function(msg){
  		var guess = msg.match[0];//Looks for a one or two digit number.
  		
    	if(guess < setupObj.magNum && setupObj.playing){
    		setupObj.tries--;//Guess is too low.
            msg.send("Sorry, your guess is too low. You have " + setupObj.tries +" chances left.");
        }
        else if(guess > setupObj.magNum && setupObj.playing){
        	setupObj.tries--;//Guess is too high.
            msg.send("Sorry, your guess is too high. You have " + setupObj.tries + " chances left.");
        }
        else if(guess == setupObj.magNum && setupObj.playing){
            msg.send("You got it!!!!!!!!!!!!!!!");//Winner winner chicken dinner!
            setupObj.startGame();
            msg.send("Nice going! Let's play again! Or would you like to 'quit'?");
            msg.send("If you want to play, what's your guess?");
        }
        if(setupObj.tries == 0 && setupObj.playing){
            msg.send("You have no more chances left!");//Lost the game.
            setupObj.startGame();
            msg.send("Tough luck! Would you like to try again, Or would you like to 'quit'?");
            msg.send("If you want to play, what's your guess?");
        }
    });
}
