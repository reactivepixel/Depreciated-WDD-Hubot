// Description:
//   Enter an article's URL and see how many times on twitter it has been shared
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot get tweetcount <url> - Shows the amount of times an article on the web has been shared on twitter
//
// Author:
//   Eddie Gemayel

//storing the request in a variable
var request = require('request');

// Function to find the tweet count of an internet article
function getTweetCount(msg){

	//get URL that the user entered
	var url = msg.match[1];
		
	//url for the API stored in a variable
	apiURL = 'http://urls.api.twitter.com/1/urls/count.json?url='+ url +'';
		
	// make the request to the api
	request(apiURL, function (error, response, body) {

			// This conditional makes sure the connection goes thru successfully
			if (!error && response.statusCode < 300){

				// Parse the incoming json
				var json = JSON.parse(response.body);

				//spit back out the information to the user
				msg.send("That page has been shared on Twitter "+ json.count +" times." );

			}else{
				//in case the API is down and cannot get the tweets
				msg.send("It appears the API is down. Please try again later.");
			}
	});
	
}//end of function

// Listens for the exact match of show weather and calls the getWeather function.
module.exports = function(robot) {
	return robot.respond(/get tweetcount (.*)/i, function(msg) {
		//call our main function
		getTweetCount(msg);
	});
}