// Description:
// Excuses scraper from developerexcuses.com/
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

var cheerio = require('cheerio');

module.exports = function(robot) {
	return robot.respond(/excuse me/i, function(msg) {
		return robot.http("http://developerexcuses.com/").get()(function(err, res, body) {
			var $ = cheerio.load(body);
			return msg.send($('.wrapper a').text());
		});
	});
};