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
	//specific regex for each one to use to filter later
	boastReg="/pretty\\snice|^awesome$|^cool$|^nice$|",
	gratsReg="^thank\\syou$|^thanks\\shubot|^thanks\\sderpbot$|^thanks\\sDerpbot$|^thanks$|",
	lifeReg="^are\\syou\\salive\\?$|are\\syou\\sdown\\?$|^are\\syou\\sdead\\?$|^you\\sup\\?$|you down\\?$|^dead$/",
	//building the primary regex for inputs
	RegEx = boastReg+gratsReg+lifeReg+regMod;

//filtering through msg to find what the robot heard and respond.
function responseFilter(msg){
	//After making all of these before creating a switch statement for replies i think i can do away with them.
	// Or add a greater amount to them so as to have a bank to call them from

	// Holly Springsteen
	// consolidate variables
	// use msg.random instead of complex math
	// use variables in msg.send cases
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
			case "awesome":
			case "cool":
				msg.send(randomBoast);
				break;

			//Gratitude section
			case "thank you":
			case "thanks hubot":
			case "thanks derpbot":
			case "thanks":
				msg.send(randomGratitude);
				break;

			//Living section
			case "are you alive?":
			case "are you down?":
			case "are you dead?":
			case "you down?":
			case "you up?":
				msg.send(randomLifeResponses);
				break;
		}
}
module.exports = function(robot) {
	return robot.hear(RegEx, function(msg) {
		responseFilter(msg);
	});
};