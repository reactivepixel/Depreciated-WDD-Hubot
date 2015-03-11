// Description:
// Random cat memes
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot cat meme - Returns a random cat meme
//
// Author:
// Andrew Kroft

var request = require('request');

// Function to find and return a random cat meme
function getCatMeme(msg) {

    request('https://api.imgflip.com/get_memes', function (error, response){
        //var rand = response[Math.floor(Math.random() * response.length)];
        //var meme = rand.data.memes.url
        var json = JSON.parse(response.body);
        var json = msg.random(json.data.memes);
        msg.send("Cat meme: " + json.name);
        msg.send("<img src='" + json.url + "' alt='" + json.name + "'/>");
    });

} // End of "getCatMeme" function.

module.exports = function(robot) {
	return robot.respond(/cat meme(.*)/i, function(msg) {
		getCatMeme(msg);
	});
}