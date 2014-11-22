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

// Dependencies
var request = require('request');

// Taste The Rainbow Functio
function tastetherainbow(msg){

	// Building the request to colourlovers
	request('http://www.colourlovers.com/api/colors/random?format=json', function (error, response, body){

		// If there are no errors from the response parse the JSON
		if (!error && response.statusCode < 300){
			var colorData = JSON.parse(response.body),

				// Get the name of the Color
				colorName = colorData[0].title;

				// Grab the color image returned from the response
				colorCard = colorData[0].imageUrl;
			
			// Display the color name 
			msg.send("Your color name is: " + colorName.toUpperCase());

			// Output the color image
			msg.send(colorCard);

		}else{

			// If there was an error in the request rensponse tell the user something evil is lurking and they need to retry
			msg.send("Yuck!!! That rainbow was nasty... Try running that again");
		}
	});
}

module.exports = function(robot) {

	// Listen for the command
	return robot.respond(/tastetherainbow/i, function(msg) {

		// Taste the rainbow homie!!!
 		tastetherainbow(msg);
  });
}