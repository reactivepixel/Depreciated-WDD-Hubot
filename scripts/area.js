// Description:
//   Hubot gives you a state back when you give him the areacode.
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot areacode <areacode> - Enter area code, get its state.
//
// Author:
//   Bogoroh

var request = require('request');

// Function to find the area of an area code.
function areaCode(msg){
	
	var codeReceive = msg.match[1].trim(), // Converts the string to an int.
		regex = /[^\w\s]/gi, // Regex for removing specials characters.
		codeString = codeReceive.replace(regex, ""), // Remove regex characters.
		code = parseInt(codeString); // Converts user's input into a number.
	
	// Conditional to make sure the user only typed numbers.
	if (isNaN(code)) {
		msg.send("Area code contains illegal Characters and/or letters. Please only enter numbers.");
	} else if (codeString.length !== 3){ // Checks to make sure the area code's length is equal to 3 numbers.
		msg.send("Area code is not equal to 3 digits. Make sure it's only 3.");
	} else {
		
		codeStr = code.toString(), // Stringify the "code" variable.
		apiURL = 'http://www.allareacodes.com/api/1.0/api.json?npa='+codeStr+'&tracking_email=derp@apetion.com&tracking_url=http://apetion.com';
		
		// Making request to API
		request(apiURL, function (error, response, body) {
				// Conditional to make sure the connection went successfully through.
				if (!error && response.statusCode < 300){
					// Parse the json
					var json = JSON.parse(body),
						status = json.status;
					
					if (status === "success"){ // Checks to make sure the area code has been found.
						var data = json.area_codes[0].state,
							reqLink = '<a href="http://www.allareacodes.com/">Area code</a> data by <a href="http://www.allareacodes.com/"><img border="0" src="http://www.allareacodes.com/images/new_logo_small.gif" alt="All Area Codes" align=absmiddle></a>'
						msg.send("Area code " + code + " is located in " + data + ". \n" + reqLink);
					} else { // Area code was not found.
						msg.send("Sorry, this area code has not been found. Please try another area code.");
					}
				}
				else{ // Returns error if api request goes wrong.
					msg.send("Something went wrong here.");
				}
		});
	}
}

// Listens for the exact match of "areacode" and calls areaCode function.
module.exports = function(robot) {
	return robot.respond(/areacode (.*)/i, function(msg) {
		areaCode(msg);
	});
}