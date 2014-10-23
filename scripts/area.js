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
// 
// Contributor:
//   Holly Springsteen
//   hhspringsteen@gmail.com

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
						// Holly Springsteen
						// Allow for timezone and current time to be shown
						// Convert state abbrev to full name
						var state = json.area_codes[0].state,
							timezone = json.area_codes[0].timezone,
							time = json.area_codes[0].current_time,
							reqLink = "Data provided by http://www.allareacodes.com";
						
						switch(state){
							case "AL":
								state="Alabama";
								break;
							case "AK":
								state="Alaska";
								break;
							case "AZ":
								state="Arizona";
								break;
							case "AR":
								state="Arkansas";
								break;
							case "CA":
								state="California";
								break;
							case "CO":
								state="Colorado";
								break;
							case "CT":
								state="Connecticut";
								break;
							case "DE":
								state="Delaware";
								break;
							case "FL":
								state="Florida";
								break;
							case "GA":
								state="Georgia";
								break;
							case "HI":
								state="Hawaii";
								break;
							case "ID":
								state="Idaho";
								break;
							case "IL":
								state="Illinois";
								break;
							case "IN":
								state="Indiana";
								break;
							case "IA":
								state="Iowa";
								break;
							case "KS":
								state="Kansas";
								break;
							case "KY":
								state="Kentucky";
								break;
							case "LA":
								state="Louisiana";
								break;
							case "ME":
								state="Maine";
								break;
							case "MD":
								state="Maryland";
								break;
							case "MA":
								state="Massachusetts";
								break;
							case "MI":
								state="Michigan";
								break;
							case "MN":
								state="Minnesota";
								break;
							case "MS":
								state="Mississippi";
								break;
							case "MO":
								state="Missouri";
								break;
							case "MT":
								state="Montana";
								break;
							case "NE":
								state="Nebraska";
								break;
							case "NV":
								state="Nevada";
								break;
							case "NH":
								state="New Hampshire";
								break;
							case "NJ":
								state="New Jersey";
								break;
							case "NM":
								state="New Mexico";
								break;
							case "NY":
								state="New York";
								break;
							case "NC":
								state="North Carolina";
								break;
							case "ND":
								state="North Dakota";
								break;
							case "OH":
								state="Ohio";
								break;
							case "OK":
								state="Oklahoma";
								break;
							case "OR":
								state="Oregon";
								break;
							case "PA":
								state="Pennsylvania";
								break;
							case "RI":
								state="Rhode Island";
								break;
							case "SC":
								state="South Carolina";
								break;
							case "SD":
								state="South Dakota";
								break;
							case "TN":
								state="Tennessee";
								break;
							case "TX":
								state="Texas";
								break;
							case "UT":
								state="Utah";
								break;
							case "VT":
								state="Vermont";
								break;
							case "VA":
								state="Virginia";
								break;
							case "WA":
								state="Washington";
								break;
							case "WV":
								state="West Virginia";
								break;
							case "WI":
								state="Wisconsin";
								break;
							case "WY":
								state="Wyoming";
								break;
						}

						msg.send("Area code " + code + " is located in " + state + ". \n" + "Timezone: "+timezone + " \n" + "Current Time: "+time + " \n" + reqLink);
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