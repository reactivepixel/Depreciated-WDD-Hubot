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
//   Hubot areacode <areacode> - Enter area code, get its state
//
// Author:
//   Bogoroh

var request = require('request')

// Function to find the area of an area code.
function areaCode(msg){
	// Converts the string to an int.
	var codeReceive = msg.match[1].trim();
	// Regex for removing specials characters.
	var regex = /[^\w\s]/gi;	
	// Remove regex characters.
	var codeString = codeReceive.replace(regex, "");
	// Converts user's input into a number.
	var code = parseInt(codeString);
	
	// Conditional to make sure the user only typed numbers.
	if (isNaN(code)) {
		msg.send("Area code contains illegal Characters and/or letters. Please only enter numbers.");
	// Checks to make sure the area code's length is equal to 3 numbers.
	} else if (codeString.length !== 3){
		msg.send("Area code is not equal to 3 digits. Make sure it's only 3.");
	} else {
		// Stringify the "code" variable.
		codeStr = code.toString();
		request('http://www.allareacodes.com/api/1.0/api.json?npa='+codeStr+'&tracking_email=derp@apetion.com&tracking_url=http://apetion.com', function (error, response, body) {
				// Conditional to make sure the connection went successfully through.
				if (!error && response.statusCode < 300){
					// Parse the json
					var json = JSON.parse(body);
					var status = json.status;
					
					// Checks to make sure the area code has been found.
					if (status === "success"){
						var data = json.area_codes[0].state;
						msg.send("Area code " + code + " is located in " + data + "." );
					// Area code was not found.
					} else {
						msg.send("Sorry, this area code has not been found. Please try another area code.");
					}
				}
				else{
					//Returns error if api request goes wrong.
					msg.send("Something went wrong here.."); 
				}	
		});
	}
}

//Listens for the exact match of "blackjack" and calls playJack function.
module.exports = function(robot) {
	return robot.respond(/areacode (.*)/i, function(msg) {
		areaCode(msg);
	});
}