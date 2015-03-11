// Description:
// Random meme images
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot meme image - Returns a random meme image
//
// Author:
// Andrew Kroft

var request = require('request');

// Function to find and return a random meme image
function getMeme(msg) {

    request('https://api.imgflip.com/get_memes', function (error, response){
        var json = JSON.parse(response.body);
        var json = msg.random(json.data.memes);
        msg.send("Meme: " + json.name);
        msg.send(json.url);
    });

} // End of "getMeme" function.

module.exports = function(robot) {
	return robot.respond(/meme image(.*)/i, function(msg) {
		getMeme(msg);
	});
}