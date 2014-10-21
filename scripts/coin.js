// Description:
// Flip a coin
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot (throw|flip|toss) a coin - hubot will flip a coin (heads or tails, who knows)
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

var thecoin = ["heads", "tails"];

module.exports = function(robot) {
	// flip a coin and get a result
	return robot.respond(/(throw|flip|toss) a coin/i, function(msg) {
		msg.send(msg.random(thecoin));
	});
};