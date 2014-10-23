// Description:
//   Robots have feels too.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author: 
// Eli Gerena
// dgerena@github.com
//
// Contributor:
// Holly Springsteen
// hhspringsteen@gmail.com


//For the love of regex, this was tough to figure out. 
//Thanks go out to holly for here assistance in furthering my knowledge in regex.
//a few regex notations I need
var regMod="i",
	slash="/",
//specific regex for each one to use to fileter later
	boastReg="/^pretty\\snice|^awesome$|^cool$|^nice$|",
	gratsReg="^thank\\syou$|^thanks\\shubot|^thanks\\sderpbot$|^thanks\\sDerpbot$|^thanks$|",
	lifeReg="^are\\syou\\salive\\?$|are\\syou\\sdown\\?$|^are\\syou\\sdead\\?$|^you\\sup\\?$|you down\\?$|^dead$/",
//building the primary regex for inputs
	RegEx = boastReg+gratsReg+lifeReg+regMod;

//filtering through msg to find what the robot heard and respond.
function responseFilter(msg){
	//After making all of these before creating a switch statement for replies i think i can do away with them.
	// Or add a greater amount to them so as to have a bank to call them from
	var boasts=["Ya, I'm the best","I am the greatest!"],
		gratitudes=["Anytime "+msg.message.user.name+".","No problem, just doing my thang."],
		lifeResponses=["I am here, what's up?","No, Can I help you?"],
		// get a random response to the arrays above
		randomBoast = msg.random(boasts),
		randomGratitude = msg.random(gratitudes),
		randomLifeResponses = msg.random(lifeResponses);
	switch(msg.message.text){
			//Boast section
			case "nice":
				msg.send(randomBoast);
				break;
			case "awesome":
				msg.send(randomBoast);
				break;
			case "cool":
				msg.send(randomBoast);
				break;
			case "pretty nice":
				msg.send(randomBoast);
				break;
			//Gratitude section
			case "thank you":
				msg.send(randomGratitude);
				break;
			case "thanks hubot":
				msg.send(randomGratitude);
				break;
			case "thanks derpbot":
				msg.send(randomGratitude);
				break;
			case "thanks":
				msg.send(randomGratitude);
				break;
			//Living section
			case "are you alive?":
				msg.send(randomLifeResponses);
				break;
			case "are you down?":
				msg.send(randomLifeResponses);
				break;
			case "are you dead?":
				msg.send(randomLifeResponses);
				break;
			case "dead":
				msg.send(randomLifeResponses);
				break;
			case "you down?":
				msg.send(randomLifeResponses);
				break;
			case "you up?":
				msg.send(randomLifeResponses);
				break;
			//God forbid you somehow do get past all the above text comparisons and didnt misscapitalize the bots will explain you need to learn to speak clearly.
			default:
				msg.send("Hey! I can't understand you when you mumble make sure to capitalize my awesome name, all right.")
		}
}
module.exports = function(robot) {
	return robot.hear(RegEx, function(msg) {
		// msg.send(msg.message);
		responseFilter(msg);
	});
};