// Description:
// Shortens a long URL using Google's URL shortening service, goo.gl
//
// Dependencies:
// request
//
// Configuration:
// None
//
// Commands:
// Hubot googl <LONG URL> - Will shorten a long url to a goo.gl one. (Only .com, .org, .net, .edu, and .gov domains).
// Hubot googl www.google.com - Will shorten www.google.com to http://goo.gl/fbsS
//
// Author:
// Bryan Erickson
// GitHub - bkerickson

// required dependencies
var request = require('request');

//Function that makes a call to Google's goo.gl url shortener service API
function googlShortener(msg){

	// define the regex pattern to test the entered url
	var urlRegexPattern = new RegExp('(http(s)?:\/\/)?(([a-zA-Z0-9\-])+\.)+(com|org|net|edu|gov)(\/.*(\/)*)*'),
		googlMessageArray = [];

	// test if a url was entered and that it passes the regex test
	// else no url was entered or it was not valid, set the variable to an empty string
	if(msg.match[1] && urlRegexPattern.test(msg.match[1])){
		// if valid save the entered url and trim it of any whitespace
		googlEnteredUrl = msg.match[1].trim();
	}else{
		googlEnteredUrl = "";
	}
	// if the string length is 0 as a result of a failed regex or no entry, send an error message
	if(googlEnteredUrl.length == 0){
		msg.send("Please check the URL you entered or enter a URL to be shortened, and try again. Note: only .com, .org, .net, .edu, and .gov can be used. IE: `hubot googl www.google.com`");
		return false;
	}else{
		// nothing to do here
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
		// else there was an error with the API call, send an error message
		if (!error && response.statusCode < 300) {
			googlMessageArray.push(response.body.longUrl + " was successfully shortened.");
			googlMessageArray.push("Your shortened URL is: " + response.body.id + "");
		}else{
			googlMessageArray.push("Google could not shorten your url, or the URL shortener is down at the moment. Please check that you entered your URL correctly and try again in a few minutes.");
		}
		// loop through the output message array
		for(arrayIndex = 0; arrayIndex < googlMessageArray.length; arrayIndex++){
			(function(arrayIndex){
				setTimeout(function(){
					msg.send(googlMessageArray[arrayIndex])
				}, 50 * arrayIndex);
			}(arrayIndex));
		};
	}); // end of request
}; // end of googlShortener function

//Listens for the key-phrase 'googl <URL>' and calls the function to get a shortened URL from goo.gl
module.exports = function(robot) {
	return robot.respond(/googl(.*)?$/i, function(msg) {
			googlShortener(msg);
	});
}
