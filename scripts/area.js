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
						var state = json.area_codes[0].state,
							timezone = json.area_codes[0].timezone,
							time = json.area_codes[0].current_time,
							reqLink = "Data provided by http://www.allareacodes.com";
						
						if(state=="AL"){
							state="Alabama"
						}else if(state=="AK"){
							state="Alaska"
						}else if(state=="AZ"){
							state="Arizona"
						}else if(state=="AR"){
							state="Arkansas"
						}else if(state=="CA"){
							state="California"
						}else if(state=="CO"){
							state="Colorado"
						}else if(state=="CT"){
							state="Connecticut"
						}else if(state=="DE"){
							state="Delaware"
						}else if(state=="FL"){
							state="Florida"
						}else if(state=="GA"){
							state="Georgia"
						}else if(state=="HI"){
							state="Hawaii"
						}else if(state=="ID"){
							state="Idaho"
						}else if(state=="IL"){
							state="Illinois"
						}else if(state=="IN"){
							state="Indiana"
						}else if(state=="IA"){
							state="Iowa"
						}else if(state=="KS"){
							state="Kansas"
						}else if(state=="KY"){
							state="Kentucky"
						}else if(state=="LA"){
							state="Louisiana"
						}else if(state=="ME"){
							state="Maine"
						}else if(state=="MD"){
							state="Maryland"
						}else if(state=="MA"){
							state="Massachusetts"
						}else if(state=="MI"){
							state="Michigan"
						}else if(state=="MN"){
							state="Minnesota"
						}else if(state=="MS"){
							state="Mississippi"
						}else if(state=="MO"){
							state="Missouri"
						}else if(state=="MT"){
							state="Montana"
						}else if(state=="NE"){
							state="Nebraska"
						}else if(state=="NV"){
							state="Nevada"
						}else if(state=="NH"){
							state="New Hampshire"
						}else if(state=="NJ"){
							state="New Jersey"
						}else if(state=="NM"){
							state="New Mexico"
						}else if(state=="NY"){
							state="New York"
						}else if(state=="NC"){
							state="North Carolina"
						}else if(state=="ND"){
							state="North Dakota"
						}else if(state=="OH"){
							state="Ohio"
						}else if(state=="OK"){
							state="Oklahoma"
						}else if(state=="OR"){
							state="Oregon"
						}else if(state=="PA"){
							state="Pennsylvania"
						}else if(state=="RI"){
							state="Rhode Island"
						}else if(state=="SC"){
							state="South Carolina"
						}else if(state=="SD"){
							state="South Dakota"
						}else if(state=="TN"){
							state="Tennessee"
						}else if(state=="TX"){
							state="Texas"
						}else if(state=="UT"){
							state="Utah"
						}else if(state=="VT"){
							state="Vermont"
						}else if(state=="VA"){
							state="Virginia"
						}else if(state=="WA"){
							state="Washington"
						}else if(state=="WV"){
							state="West Virginia"
						}else if(state=="WI"){
							state="Wisconsin"
						}else if(state=="WY"){
							state="Wyoming"
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