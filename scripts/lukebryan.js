// Description:
// Have hubot pick luke bryan song for you
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot play luke bryan
//
// Author:
// Stacy Faude
// istacy@fullsail.edu

// array of Luke Bryan songs on youtube
var songs = ["'Play it again' (https://www.youtube.com/watch?v=ALV-QtDFpSw)"];

module.exports = function(robot) {
	return robot.respond(/play luke bryan/i, function(msg) {
		// hubot decide on a random song from the songs array
		msg.send("I recommend " + msg.random(songs));
	});
};
