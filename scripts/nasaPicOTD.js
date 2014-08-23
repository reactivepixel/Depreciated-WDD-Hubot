// Description:
// Retrieves the Nasa Astronomy Picture of the Day for the current date, or for an entered date.
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
// Hubot nasa picture - gets the NASA Astronomy Picture of the Day for today.
// Hubot nasa pic <date> - gets the NASA Astronomy Picture of the Day for a specific date (between 06/16/1995 and today, some dates may have no picture)
// Hubot nasa picture <date> - gets the NASA Astronomy Picture of the Day for a specific date (between 06/16/1995 and today, some dates may have no picture)
// Hubot nasa picture 11/11/11 - gets the NASA Astronomy Picture of the Day for 11/11/11
// Hubot nasa picture 12/31/2013 - gets the NASA Astronomy Picture of the Day for 12/31/2013
// Hubot nasa picture May 4, 2014 - gets the NASA Astronomy Picture of the Day for May 4, 2014
//
// Author:
// bkerickson


// required packages
var request = require('request');
var cheerio = require('cheerio');

//Function that scrapes the NASA Astronomy Picture of the Day for the image title and image url
function getAstroPicOfTheDay(msg){

	// if a date option was entered, create a new Date object from the entered date
	if(msg.match[2]){
		// trim any whitespace from the entered date option
		enteredAstroPicDate = msg.match[2].trim();

		// create a new Date object with the entered date
		var astroPicFullDate = new Date(enteredAstroPicDate);

		// test to make sure a valid date was entered and not a random string
		if (isNaN(astroPicFullDate.getDate())) {
			msg.send("You did not enter a valid date, please try again.");
			return;
		}else {
			// date is valid, nothing to do here
		}

	}else{
		// no date option was entered, create a Date object with the current date
		var astroPicFullDate = new Date();
	};

	// get the day, month, and year from the date, pass them into the twoDigitDateFormat function
	var astroPicDay = twoDigitDateFormat(astroPicFullDate.getDate());
	var astroPicMonth = twoDigitDateFormat(astroPicFullDate.getMonth() + 1);

	var astroPicYear = astroPicFullDate.getFullYear();
	// get the 2-digit year from the 4-digit year
	if(astroPicYear > 1999){
		astroPicYear = twoDigitDateFormat(astroPicYear - 2000);
	}else if(astroPicYear <= 1999){
		astroPicYear = twoDigitDateFormat((astroPicYear - 2000) + 100);
	}


	// build the target url for the Astronomy Picture of the Day
	astroPicUrl = 'http://apod.nasa.gov/apod/ap'+ astroPicYear + astroPicMonth + astroPicDay +'.html';
	// make the request call to the url to get the page html
	request(astroPicUrl, function (error, response, html) {

		if (!error && response.statusCode < 300){

			$ = cheerio.load(html);
			// get the title of the image
			$('title').filter(function(){
				pageTitleTag = $(this);
				astroPicOfDayTitle = pageTitleTag.text().trim();
			});
			// get the url to the image
			$('img').filter(function(){
				pageImgTag = $(this);
				astroPicOfDay = pageImgTag.attr('src');
			});

			msg.send(astroPicOfDayTitle);
			msg.send("http://apod.nasa.gov/apod/" + astroPicOfDay);

		}else{
			//Return error message if the request fails for bad date or no image.
			msg.send("You may have entered a date outside of the range NASA provides (between 06/16/1995 and today), or the date may not have a photo.  Please try again.");
		};

	}); // end of request
}; // end of getAstroPicOfTheDay function

// function to convert the date components into strings 2 chars long for the YYMMDD format of the APOTD url
function twoDigitDateFormat(inputDate){
	// if the date is a single digit, convert it to a 2-digit format by concatenating it to a 0
	if(inputDate < 10){
		outputDate = "0" + inputDate;
	}else{
		// otherwise the date is already 2-digit, convert it to a string
		outputDate = "" + inputDate;
	}

	return outputDate;
}; // end of twoDigitDateFormat function

//Listens for the keyphrases 'nasa pic' or 'nasa picture', calls the function to get the picture
module.exports = function(robot) {
  return robot.respond(/(nasa pic\b|nasa picture)\s*(.*)?$/i, function(msg) {
 		getAstroPicOfTheDay(msg);
  });
}
