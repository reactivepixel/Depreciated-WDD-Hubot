// Description:
//   Hubot gives you a random subreddit with it's top title for the day
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot redtop  - Gets you a random subreddit with the top post
//
// Author:
//   Bogoroh

var request = require('request')

// Function to find the area of an areacode
function reddit(msg){
	// Array to output msg.send
	
	request('http://www.reddit.com/r/random/top.json', function (error, response, body) {
		// Make sure the connection went successfully through
		if (!error && response.statusCode < 300){
			var messageArray = [];
			// Parse the json
			var json = JSON.parse(body);
			var sub = json.data.children[0].data.subreddit;
			var title = json.data.children[0].data.title;
			var link =  json.data.children[0].data.permalink;
			// Check to make sure the area code has been found
			messageArray.push(title + " is the top title for " + "/r/"+ sub + ".")
			messageArray.push("The link for this article is: " + "http://www.reddit.com" +link)

			// Output the strings back
			for(z = 0; z <= messageArray.length; z++){
		    (function(z){
		        setTimeout(function(){
		            msg.send(messageArray[z])
		        }, 500 * z);
		    }(z))
			}
		}
		else{
			//Return error if api request goes wrong.
			msg.send("Something went wrong here.."); 
		}	
	});
}

//Listens for the exact match of "blackjack" and calls playJack function.
module.exports = function(robot) {
	return robot.respond(/redtop/i, function(msg) {
		reddit(msg);
	});
}