// Description:
//   Enter a city in florida and get the respective current weather report
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot show weather <city> - Shows current Weather for a City in Florida
//
// Author:
//   Eddie Gemayel

var request = require('request');

// Function to find the weather of the city entered
function getWeather(msg){
	
	var city = msg.match[1]; // Get what the user entered
	var	regex = /[^\w\s]/gi; // Regex for removing specials characters.
	var	code = city.replace(regex, ""); // Remove regex characters.
	
	// If what the user entered is a string
	if (isNaN(code)) {

		// codeStr = code.toString(), // Stringify the "code" variable.
		apiURL = 'http://api.wunderground.com/api/00bacbd3046f5248/conditions/q/FL/'+code+'.json';
		
		// make the request to the api
		request(apiURL, function (error, response, body) {

				// This conditional makes sure the connection goes thru successfully
				if (!error && response.statusCode < 300){

					// Parse the json
					var json = JSON.parse(response.body);


					if(!json.response.error){

						msg.send("The city of " + json.current_observation.display_location.city + 
						" in " + json.current_observation.display_location.state + 
						" is currently "+ json.current_observation.weather + 
						" with " + json.current_observation.wind_mph + 
						" mph winds. It's now "+ json.current_observation.temp_f + 
						" degrees farenheit." );
					// msg.send(json);

					}else{
						var error = json.response.error.description;
						msg.send(error);
					}
					
				}
				
		});


	}else {
		msg.send("The city you entered is invalid. Be sure to check your spelling.");
	}
}

// Listens for the exact match of weather and calls getWeather function.
module.exports = function(robot) {
	return robot.respond(/show weather (.*)/i, function(msg) {
		getWeather(msg);
	});
}