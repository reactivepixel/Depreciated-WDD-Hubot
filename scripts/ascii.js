// Description:
// ASCII Text Art
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot ascii <text> - Show text in ascii art
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com


module.exports = function(robot) {
	// hubot respond to "ascii" command
	return robot.respond(/ascii (.*)/i, function(msg) {
		// request acii art from heroku
		return msg.http("http://asciime.heroku.com/generate_ascii").query({
			s: msg.match[1].split(' ').join('  ')
		}).get()(function(err, res, body) {
			// send back the ascii
			return msg.send(msg.match[1]+" \n"+body);
		});
	});
};