// Description:
//   Hubot gives you a state back when you give him the areacode
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot reddit  - Gets you a random subreddit with the top post
//
// Author:
//   Bogoroh

var request = require('request')

// Function to find the area of an areacode
function reddit(msg){
		request('http://www.reddit.com/r/random/top.json', function (error, response, body) {
				// Make sure the connection went successfully through
				if (!error && response.statusCode < 300){
					// Parse the json
					var json = JSON.parse(body);
					console.log(json);
					var sub = json.data.children[0].data.subreddit;
					var title = json.data.children[0].data.title;
					// Check to make sure the area code has been found
					msg.send(title + " is the top title for " + "/r/"+ sub + ".")
				}
				else{
					//Return error if api request goes wrong.
					msg.send("Something went wrong here.."); 
				}	
		});
}

//Listens for the exact match of "blackjack" and calls playJack function.
module.exports = function(robot) {
	return robot.respond(/reddit/i, function(msg) {
		reddit(msg);
	});
}