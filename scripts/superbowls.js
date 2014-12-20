//Description:
//Retrieves specified Super Bowl score.
//
//Dependencies:
//none
//
//Commands:
//Hubot Super Bowl <number> - Enter a Super Bowl number to get the score.
//
//Author
//Jake Chapman


//Array of Super Bowls
var superbowls = [
	'Super Bowl I: Kansas City Chiefs (10) vs W Green Bay Packers (35)',
	'Super Bowl II: W Green Bay Packers (33) vs Oakland Raiders (14)',
	'Super Bowl III: W New York Jets (16) vs Baltimore Colts (7)',
	'Super Bowl IV: Minnesota Vikings (7) vs W Kansas City Chiefs (23)',
	'Super Bowl V: W Baltimore Colts (16) vs Dallas Cowboys (13)',
	'Super Bowl VI: W Dallas Cowboys (24) vs Miami Dolphins (3)',
	'Super Bowl VII: W Miami Dolphins (14) vs Washington Redskins (7)',
	'Super Bowl VIII: Minnesota Vikings (7) vs W Miami Dolphins (24)',
	'Super Bowl IX: W Pittsburgh Steelers (16) vs Minnesota Vikings (6)',
	'Super Bowl X: Dallas Cowboys (17) vs W Pittsburgh Steelers (21)',
	'Super Bowl XI: W Oakland Raiders (32) vs Minnesota Vikings (14)',
	'Super Bowl XII: W Dallas Cowboys (27) vs Denver Broncos (10)',
	'Super Bowl XIII: W Pittsburgh Steelers (35) vs Dallas Cowboys (31)',
	'Super Bowl XIV: Los Angeles Rams (19) vs W Pittsburgh Steelers (31)',
	'Super Bowl XV: W Oakland Raiders (27) vs Philadelphia Eagles (10)',
	'Super Bowl XVI: W San Francisco 49ers (26) vs Cincinnati Bengals (21)',
	'Super Bowl XVII: Miami Dolphins (17) vs W Washington Redskins (27)',
	'Super Bowl XVIII: Washington Redskins (9) vs W Los Angeles Raiders (38)',
	'Super Bowl XIX: Miami Dolphins (16) vs W San Francisco 49ers (38)',
	'Super Bowl XX: W Chicago Bears (46) vs New England Patriots (10)',
	'Super Bowl XXI: Denver Broncos (20) vs W New York Giants (39)',
	'Super Bowl XXII: W Washington Redskins (42) vs Denver Broncos (10)',
	'Super Bowl XXIII: Cincinnati Bengals vs W San Francisco 49ers (20)',
	'Super Bowl XXIV: W San Francisco 49ers (55) vs Denver Broncos (10)',
	'Super Bowl XXV: Buffalo Bills (19) vs W New York Giants (20)',
	'Super Bowl XXVI: W Washington Redskins (37) vs Buffalo Bills (24)',
	'Super Bowl XXVII: Buffalo Bills (17) vs W Dallas Cowboys (52)',
	'Super Bowl XXVIII: W Dallas Cowboys (30) vs Buffalo Bills (13)',
	'Super Bowl XXIX: San Diego Chargers (26) vs W San Francisco 49ers (49)',
	'Super Bowl XXX: W Dallas Cowboys (27) vs Pittsburgh Steelers (17)',
	'Super Bowl XXXI: New England Patriots (21) vs W Green Bay Packers (35)',
	'Super Bowl XXXII: Green Bay Packers (24) vs W Denver Broncos (31)',
	'Super Bowl XXXIII: W Denver Broncos (34) vs Atlanta Falcons (19)',
	'Super Bowl XXXIV: W St. Louis Rams (23) vs Tennessee Titans (16)',
	'Super Bowl XXXV: W Baltimore Ravens (34) vs New York Giants (7)',
	'Super Bowl XXXVI: St. Lous Rams (17) vs W New England Patriots (20)',
	'Super Bowl XXXVII: Oakland Raiders (21) vs W Tampa Bay Buccaneers (48)',
	'Super Bowl XXXVIII: Carolina Panthers (29) vs W New England Patriots (32)',
	'Super Bowl XXXIX: W New England Patriots (24) vs Philadelphia Eagles (21)',
	'Super Bowl XL: Seattle Seahawks (10) vs W Pittsburgh Steelers (21)',
	'Super Bowl XLI: W Indianapolis Colts (29) vs Chicago Bears (17)',
	'Super Bowl XLII: W New York Giants (17) vs New England Patriots (14)',
	'Super Bowl XLIII: W Pittsburgh Steelers (27) vs Arizona Cardinals (23)',
	'Super Bowl XLIV: W New Orleans Saints (31) vs Indianapolis Colts (17)',
	'Super Bowl XLV: W Green Bay Packers (31) vs Pittsburgh Steelers (25)',
	'Super Bowl XLVI: W New York Giants (21) vs New England Patriots (17)',
	'Super Bowl XLVII: W Baltimore Ravens (34) vs San Francisco 49ers (31)',
	'Super Bowl XLVIII: W Seattle Seahawks (43) vs Denver Broncos (8)'
];

//Function to retrieve SB score
function getSuperbowl(msg) {
	//Get requested SB number
	var sbNumber = msg.match[1];

	//If an invalid SB number is entered, return error
	if(sbNumber > superbowls.length){
		msg.send('Please enter a valid Super Bowl number');
	}else {
		//Returns the requested SB. sbNumber subtracted by 1 to retrieve the correct index
		msg.send(superbowls[sbNumber-1]);
	}
}

module.exports = function(robot) {
	return robot.respond(/Super Bowl (.*)/i, function(msg) {
		getSuperbowl(msg);
	});
};