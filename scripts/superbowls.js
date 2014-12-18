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
	'Super Bowl X: Dallas Cowboys (17) vs W Pittsburgh Steelers (21)'
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

module.exports = function(robot) {
	return robot.respond(/super bowl (.*)/i, function(msg) {
		getSuperbowl(msg);
	});
}