// Description:
// Calls an api to get a random Yo Momma joke.
//
// Dependencies:
// request, cheerio
//
// Configuration:
// None
//
// Commands:
// Hubot yo momma <Your Joke> - You can put any yo momma joke.
// Hubot yo momma - Or you can just put the command if you prefer.
//
// Author:
// Austin Mayer
// austinemayer@gmail.com

//Dependencies required.
var request = require('request'),
	cheerio = require('cheerio');

function getYoMommaJoke(msg){
	//Makes a request to get a random yo momma joke from the api.
	request('http://api.yomomma.info/', function (error, response){
		//Catches an error or if the api does not come back with anything.
		if(!error && response.statusCode < 300){
			//Cheerio gets the html from the requested page.
			$ = cheerio.load(response.body);
			//Parses the Json and just grabs the joke to send back to the user.
			var yoMommaText = $('body').text(),
				yoMommaJSON = JSON.parse(yoMommaText),
				yoMommaJoke = yoMommaJSON.joke;
			msg.send(yoMommaJoke);
		}
		else{
			//Random array of messages if there is an error.
			var noComeback =[
				"Well that was rude.",
				"Hmm, give me a second...",
				"Ha, very funny.",
				"My mom was decommissioned last year...",
				"I don't have a mom."
			];
			msg.send(msg.random(noComeback));
		}
	});
}


module.exports = function(robot){
	//Receives the command and anything after the command.
	return robot.respond(/yo momma(.*)/i, function(msg){		
		//Calls the function to get the random joke.
		getYoMommaJoke(msg);
	});
}
