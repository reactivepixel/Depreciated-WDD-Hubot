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
//   Hubot tweet count <url> - Enter an article's URL to see how many times it has been shared on Twitter.
//
// Author:
//   Eddie Gemayel


//storing the request in a variable
var request = require('request');

// Function to find the tweet count of an internet article
function getTweetCount(msg){

	//get URL that the user entered
	var url = msg.match[1];
	//RegEx to test if url entered was an actual URL
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  	'(\\#[-a-z\\d_]*)?$','i'); // fragment locater // fragment locater

	//Regex conditional to see if whatever was entered was actually a URL
	if(pattern.test(url)) {

		//url for the API stored in a variable
		apiURL = 'http://urls.api.twitter.com/1/urls/count.json?url='+ url +'';

		// make the request to the api
		request(apiURL, function (error, response, body) {

			// This conditional makes sure the connection goes through successfully
			if (!error && response.statusCode < 300){

				// Parse the incoming json
				var json = JSON.parse(response.body);

				//spit back out the information to the user
				msg.send("That page has been shared on Twitter "+ json.count +" times." );

			}else{
				//send them back error message if connection didn't go through
				msg.send("It appears the API is down. Please try again later.");
			}
		});
	}else{
		//if they didn't enter a url
		msg.send("Hmmm...I don't think that's a valid URL.");
	}

}//end of function

module.exports = function(robot) {
  // Listens for the exact match of tweet count.
	return robot.respond(/tweet count (.*)/i, function(msg) {
		//call our main function
		getTweetCount(msg);
	});
}
