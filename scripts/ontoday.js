// Description:
// Retrieves a random historical event for the day
//
// Dependencies:
// request, cheerio
//
// Configuration:
// none
//
// Commands:
// Hubot on this day -- returns a historical event 
//
// Author:
// Anthony Kluba
//
//Dependencies required.
var request = require('request'),
	cheerio = require('cheerio');

function onToday(msg){

	// array to covert month number into month name for array
	var arrMonth = new Array();
		arrMonth[0] = "January";
		arrMonth[1] = "February";
		arrMonth[2] = "March";
		arrMonth[3] = "April";
		arrMonth[4] = "May";
		arrMonth[5] = "June";
		arrMonth[6] = "July";
		arrMonth[7] = "August";
		arrMonth[8] = "September";
		arrMonth[9] = "October";
		arrMonth[10] = "November";
		arrMonth[11] = "December"; 
	
	// setting date -- month and day
	var date = new Date(),
		month = arrMonth[date.getMonth()],
		day = date.getDate();
	
	// concatenated url
	var dateEventURL = 'http://en.wikipedia.org/wiki/' + month + '_' + day;
	
	// request call to the url 
	request(dateEventURL, function (error, response, html) {
		// catch errors or bad status codes
		if(!error && response.statusCode < 300){
			
			// load page html
			$ = cheerio.load(html);
			
			// retrieving list of historical events
			$('#mw-content-text ul').eq(1).filter(function(){
				var strEvents = $(this).text(), // text from li elements
					arrEvents = strEvents.split(/\n/), // places events in array
					countEvents = arrEvents.length - 2, // find how many events are present
					randEvent = Math.floor(Math.random() * countEvents) + 1; // chooses random number 
				
				// insure events are present
				if(countEvents > 0){	
					msg.send(month + ' ' + day +' ' + arrEvents[randEvent]); // successful message sent to user 
				}else{
					msg.send("Must of been a boring day in history, try back tomorrow!"); // error message for no events present
				}
			});				
		}else{
			msg.send("Must of been a boring day in history, try back tomorrow!"); // error message for errors or bad status codes
		}
	});
}; // end of onToday function

//Listens for the exact match of on this day and calls onToday function.
module.exports = function(robot) {
  return robot.respond(/on this day/i, function(msg) {
 		onToday(msg);
  });
}
