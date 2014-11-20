//Description
//
//Animal Sounds
//
//Dependencies
//
//none
//
//Commands
//
//Hubot chicken - reply coo coo
//Hubot dog - reply ruff ruff
//Hubot cat - reply meow meow 
//
//Author
//Mathew Beyer
//matthew@beyerbuilds.com

module.exports = function(robot) {
	//returns coo coo after users inputs chicken
	return robot.respond(/chicken$/i, function(msg) {
		msg.send("coo coo");
	});
	//returns ruff ruff after users inputs dog
	return robot.respond(/dog$/i, function(msg) {
		msg.send("ruff ruff");
	});
	//returns meow meow after users inputs cat
	return robot.respond(/cat$/i, function(msg) {
		msg.send("meow meow");
	});
};