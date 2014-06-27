// Description:
//   Hubot gives you a random subreddit with its top title for the day
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot redtop  - Gets you a random subreddit with its top post
//
// Author:
//   Bogoroh

var request = require('request')

// Function to find a random top subreddit.
function reddit(msg){
	
	request('http://www.reddit.com/r/random/top.json', function (error, response, body) {
		// Conditional to make sure the connection went successfully through
		if (!error && response.statusCode < 300){
			// Array to output msg.send
			var messageArray = [];
			// Parses the json
			var json = JSON.parse(body);
			var sub = json.data.children[0].data.subreddit;
			var title = json.data.children[0].data.title;
			var link =  json.data.children[0].data.permalink;

			// Pushes to messageArray
			messageArray.push(title + " in "+ "`/r/"+ sub + "`");
			messageArray.push("http://www.reddit.com" +link);

			// Output the strings back
			for(z = 0; z <= messageArray.length; z++){
				(function(z){
					setTimeout(function(){
						msg.send(messageArray[z])
					}, 500 * z);
				}(z));
			}
		} else {
			//Returns error if api request goes wrong.
			msg.send("Something went wrong here."); 
		}
	});
}

//Listens for the exact match of "redtop" and calls reddit function.
module.exports = function(robot) {
	return robot.respond(/redtop/i, function(msg) {
		reddit(msg);
	});
}