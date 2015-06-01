// Description:
//   Hubot gives you the amount of days until your Birthday
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot days until birthday <date> -  Hubot returns the amount of earth days until birthday.Format M/D/Y.
//	<trigger> - <what the hear trigger does>
//
//	Notes:
//
// Author:
//  David Gilliam
//	davygxyz@gmail.com
module.exports = function(robot) {
	return robot.hear(/days until birthday(.*)/i, function (msg) {

			var answer = process.env.HUBOT_DAYS_UNTIL_BIRTHDAY;
			var insertDate = new Date(msg.match[1]);
			console.log(insertDate);
			var currentDate = new Date();
			var millYear = 31556952000;
			var millDay = 86400000;
			//converting to milliseconds
			insertDate = insertDate.getTime();
			currentDate =currentDate.getTime();
			//console check
			//console.log(millYear+' / '+millDay+' / '+insertDate+' / '+currentDate+' / ');

			var daysBirth = insertDate / millDay;
			var daysCurrent = currentDate / millDay;
			//console check
			//console.log(daysBirth+" / "+daysCurrent);

			var days = daysBirth - daysCurrent;
			var days = Math.round(days)
			//console check
			//console.log(days);

			msg.send('There is approximately '+days+' earth days until your birthday.');

    });

} 