// Description:
//   Translates your sentence into pirate language 
//
// Dependencies:
//   API via http://isithackday.com/arrpi.php
//
// Commands:
//   hubot arrr your text here 
//
// Author:
//   William Norton - wnorton2013 @ github


/* translate function - receives users input from module.exports 
   then makes API call and returns the new string to user 
*/
function translate(msg){
	// setting variable to users input
	var myText = msg.match[1];
	// conditional to check length of users input
	if(myText.length > 0){
		// variable holding the API address with users input appended in
		var apiURL = 'http://isithackday.com/arrpi.php?text=' + encodeURI(myText) + '&format=json';
		// making the API call with a callback function to accept the response from server
		msg.http(apiURL).get()(function(err, res, body){
			var error, json;
			// try catch block for error checking
			try{
				// set variable to the parsed response from API
				json = JSON.parse(body);
				// return the APIs response to user
				return msg.send(json.translation.pirate);
			}catch (_error){
				// set variable to hold the error
				error = _error;
				return msg.send('There was an error.');
			}
		});
	}else{
		// error message to user
		msg.send('You have to give me something to translate.');
	};
};


/* module.exports function starts the robot
   return robot with a callback that
   passes the users message to the the
   translate function
 */
module.exports = function(robot){
	return robot.respond(/arrr (.*)/i, function(msg){
		translate(msg);
	});
};
