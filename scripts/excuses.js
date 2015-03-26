// Description:
// Retrieves an excuse from developerexcuses.com/
//
// Dependencies:
// cheerio
// request
//
// Configuration:
// none
//
// Commands:
// Hubot excuse me - Retrieves an excuse from developerexcuses.com/
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

// cheerio scraper
var cheerio = require('cheerio'),
	request = require('request');

module.exports = function(robot) {
	return robot.respond(/excuse me/i, function(msg) {
		request("http://developerexcuses.com/", function (err, res, body) {
			if (!err && res.statusCode < 300){
				// get excuses from developerexcuses.com
				var $ = cheerio.load(body); // scrape the site for the body
				msg.send($('.wrapper a').text()); // send back an excuse
			}else{
				msg.send("Sorry but developerexcuses.com is down");
			}
		});
	});
};
