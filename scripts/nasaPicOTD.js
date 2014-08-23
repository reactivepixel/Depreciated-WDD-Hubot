// Description:
// Retrieves the Nasa Astronomy Picture of the Day for the current date
//
// Dependencies:
// request
// cheerio
//
// Configuration:
// none
//
// Commands:
// Hubot nasa pic - gets the NASA Astronomy Picture of the Day for today.
//
// Author:
// bkerickson


var request = require('request');
var cheerio = require('cheerio');

function getAstroPicOfTheDay(msg){

	var pictureUrl = 'http://apod.nasa.gov/apod/ap140823.html';

	request(pictureUrl, function (error, response, html) {

		if (!error && response.statusCode < 300){

			var $ = cheerio.load(html);
			var picture;

			$('img').filter(function(){
				var data = $(this);
				picture = data.attr('src');
			})

			msg.send("http://apod.nasa.gov/apod/" + picture);

		}else{

			msg.send("Error");
		}
	})

}

//Listens for the keyphrases 'nasa pic' or 'nasa picture', calls the function to get the picture
module.exports = function(robot) {
  return robot.respond(/(nasa pic\b|nasa picture)\s*(.*)?$/i, function(msg) {
 		getAstroPicOfTheDay(msg);
  });
}
