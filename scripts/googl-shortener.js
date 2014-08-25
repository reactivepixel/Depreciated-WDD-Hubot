// Description:
// Shortens a URL using Google's URL shortening service, goo.gl
//
// Dependencies:
// request
//
// Configuration:
// None
//
// Commands:
// Hubot googl <LONG URL> - Will shorten a long url to a goo.gl one. (Only .com, .org, .net, .edu, and .gov domains)
// Hubot googl www.google.com - Will shorten www.google.com to http://goo.gl/fbsS
//
// Author:
// Bryan Erickson
// GitHub - bkerickson

// required dependencies
var request = require('request');

//Function that makes a call to Google's goo.gl url shortener service API
function googlShortener(msg){

	// define a regex pattern to test the entered url
	var urlRegexPattern = new RegExp('(http(s)?:\/\/)?([a-zA-Z\-]*\.)+(com|org|net|edu|gov)(\/.*(\/)*)*');
	// test if a url was entered and that it passes the regex test
	if(msg.match[1] && urlRegexPattern.test(msg.match[1])){
		// save the entered url and trim it of whitespace
		googlEnteredUrl = msg.match[1];
		googlEnteredUrl = googlEnteredUrl.trim();
	}else{
		// if no url was entered or it was not valid, set the variable to an empty string
		googlEnteredUrl = "";
	}
	// if the string length is 0 as a result of a failed regex or no entry, send an error message
	if(googlEnteredUrl.length == 0){
		msg.send("Please check the URL you entered or enter a URL to be shortened, and try again. IE: hubot googl www.google.com");
		return;
	}

	// options for the request POST call
	var googlPostOptions = {
		uri: 'https://www.googleapis.com/urlshortener/v1/url',
		method: 'POST',
		json: {
			"longUrl": googlEnteredUrl
		}
	};

	// send the request to the goo.gl API
	request(googlPostOptions, function (error, response, body) {
		// if no errors came back and the status is good, display the new shortened URL
		if (!error && response.statusCode == 200) {
			msg.send(response.body.longUrl + " was successfully shortened.")
			msg.send("Your shortened URL is: " + response.body.id);
		}else{
			// if there was an error with the API call, send an error message
			msg.send("Google was not able to shorten your url. Please check that you entered it correctly.");
		}

	}); // end of request
}; // end of googlShortener function

//Listens for the keyphrase 'googl <URL>' and calls the function to get a shortened URL from goo.gl
module.exports = function(robot) {
	return robot.respond(/googl(.*)?$/i, function(msg) {
			googlShortener(msg);
	});
}
