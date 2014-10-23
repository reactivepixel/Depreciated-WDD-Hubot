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

//After making all of these before creating a switch statement for replies i think i can do away with them.
// Or add a greater amount to them so as to have a bank to call them from
var boasts=[
	"Ya, I'm the best","I am the greatest!"
]
var gratitudes=[
	"Anytime user.","No problem, just doing my thang."
]
var lifeResponses=[
	"I am here, what's up?","No, Can I help you?"
]
//For the love of regex, this was tough to figure out. 
//Thanks go out to holly for here assistance in furthering my knowledge in regex.
//a few regex notations I need
var regMod="i"
var slash="/"
//specific regex for each one to use to fileter later
var boastReg="/^pretty\\snice|^awesome$|^cool$|^nice$|"
var gratsReg="^thank\\syou$|^thanks\\shubot|^thanks\\sderpbot$|^thanks\\sDerpbot$|^thanks$|"
var lifeReg="^are\\syou\\salive\\?$|are\\syou\\sdown\\?$|^are\\syou\\sdead\\?$|^you\\sup\\?$|you down\\?$|^dead$/"
//building the primary regex for inputs
var RegEx = boastReg+gratsReg+lifeReg+regMod
//filtering through msg to find what the robot heard and respond.
function responseFilter(msg){
	switch(msg.message.text){
			//Boast section
			case "nice":
				msg.send(boasts[Math.floor(Math.random()*2)]);
				break;
			case "awesome":
				msg.send(boasts[Math.floor(Math.random()*2)]);
				break;
			case "cool":
				msg.send(boasts[Math.floor(Math.random()*2)]);
				break;
			case "pretty nice":
				msg.send(boasts[Math.floor(Math.random()*2)]);
				break;
			//Gratitude section
			case "thank you":
				msg.send(gratitudes[Math.floor(Math.random()*2)]);
				break;
			case "thanks hubot":
				msg.send(gratitudes[Math.floor(Math.random()*2)]);
				break;
			case "thanks derpbot":
				msg.send(gratitudes[Math.floor(Math.random()*2)]);
				break;
			case "thanks":
				msg.send(gratitudes[Math.floor(Math.random()*2)]);
				break;
			//Living section
			case "are you alive?":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
				break;
			case "are you down?":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
				break;
			case "are you dead?":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
				break;
			case "dead":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
				break;
			case "you down?":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
				break;
			case "you up?":
				msg.send(lifeResponses[Math.floor(Math.random()*2)]);
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