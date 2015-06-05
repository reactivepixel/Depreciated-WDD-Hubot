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
var songs = ["https://www.youtube.com/watch?v=ALV-QtDFpSw","https://www.youtube.com/watch?v=1WEpLzsdEeY","https://www.youtube.com/watch?v=crCqWK3SmRo&index=3"];

module.exports = function(robot) {
	return robot.respond(/play luke bryan/i, function(msg) {
		// hubot decide on a random song from the songs array
		msg.send(msg.random(songs));
	});
};
