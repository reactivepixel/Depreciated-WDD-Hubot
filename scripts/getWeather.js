// Description:
//   Enter a valid zipcode to get the current weather report
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot show weather <zipcode> - Shows current Weather for a location
//
// Author:
//   Eddie Gemayel
// feels like/local time/wind string added by Lyte

//store the required request into a variable for easy access
var request = require('request');

// Function to find the weather of the location entered
function getWeather(msg){

	//get zipcode the user entered
	var zipcode = msg.match[1];

	// Conditional statement to check if user entered an integer or not
	if (isNaN(zipcode)) {

		//tell them they messed up if they entered a string
		msg.send("The location you entered is invalid. Be sure you are entering a valid zipcode and try again.");

	}else {

		//url for the API stored in a variable
		apiURL = 'http://api.wunderground.com/api/00bacbd3046f5248/conditions/q/'+zipcode+'.json';

		// make the request to the api
		request(apiURL, function (error, response, body) {

				// This conditional makes sure the connection goes through successfully
				if (!error && response.statusCode < 300){

					// Parse the incoming json
					var json = JSON.parse(response.body);

					//if there is no errors in retrieving location
					if(!json.response.error){
						//spit back out the information to the user
						msg.send(json.current_observation.display_location.city + ", " + json.current_observation.display_location.state_name + " on " + json.current_observation.local_time_rfc822 +
							"\nTemperature: " + json.current_observation.temp_f + " degrees Fahrenheit.\nFeels like: " +
							json.current_observation.feelslike_f + " degrees Fahrenheit." +
							"\nHumidity: " + json.current_observation.relative_humidity +
							"\nCondition: "+ json.current_observation.weather +
							"\nWind: " + json.current_observation.wind_mph + "mph " + json.current_observation.wind_string);

					//if there is an error
					}else{
						//display that specific error message from the json
						var error = json.response.error.description;
						//spit back out the error to the user
						msg.send(error);
					}
				}else{
					//If the API actually never responds whatsoever
					msg.send("It appears the API is down. Please try again later.");
				}

		});
	}
}//end of function

// Listens for the exact match of show weather and calls the getWeather function.
module.exports = function(robot) {
	return robot.respond(/show weather (.*)/i, function(msg) {
		//call the function above
		getWeather(msg);
	});
}
