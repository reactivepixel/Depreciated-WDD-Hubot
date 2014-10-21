// Description:
// Retrieves an excuse from developerexcuses.com/
//
// Dependencies:
// cheerio
//
// Configuration:
// none
//
// Commands:
// Hubot excuse me
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

// cheerio scraper
var cheerio = require('cheerio');

module.exports = function(robot) {
	return robot.respond(/excuse me/i, function(msg) {
		try{
			return robot.http("http://developerexcuses.com/").get()(function(err, res, body) {
				// get excuses from developerexcuses.com
				var $ = cheerio.load(body); // scrape the site for the body
				return msg.send($('.wrapper a').text()); // send back an excuse
			});
		}
		catch(err){
			msg.send("Sorry no excuses right now, developerexcuses.com is down :(");
		}
	});
};