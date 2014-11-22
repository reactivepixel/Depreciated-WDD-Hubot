// Description:
// Hubot Random Color Generator
//
// Dependencies:
// request
//
// Configuration:
// none
//
// Commands:
// Hubot tastetherainbow - Gives you a cool new random color to use in your web or graphic design!
//
// Author:
// Clayton Allen
// 
// Email:
// clayton.allen.us@gmail.Commands

var request = require('request');

function tastetherainbow(msg){
	request('http://www.colourlovers.com/api/colors/random?format=json', function (error, response, body){
		if (!error && response.statusCode < 300){
			var colorData = JSON.parse(response.body),
				colorName = colorData;
			msg.send("Your color name is " + colorName);
		}else{
			msg.send("Yuck!!! That rainbow was nasty... Try running that again");
		}
	});
}

module.exports = function(robot) {
  return robot.respond(/tastetherainbow/i, function(msg) {
 		tastetherainbow(msg);
  });
}