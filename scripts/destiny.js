// Description:
// Destiny - is this the day?
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot is it <action> day - returns if today is the day for your action
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

module.exports = function(robot) {
	return robot.respond(/is it (\w+) day/i, function(msg) {
		var action = msg.match[1],
			nbDay = Math.floor(new Date().getTime() / 1000 / 86400),
			actionHash = action.length + action.charCodeAt(0) + action.charCodeAt(action.length - 1),
			destiny = Math.cos(nbDay + actionHash) + 1,
			limit = (Math.sin(actionHash) + 1) / 2;

		if(action == 'my' || action == 'My'){
			action ='your';
		}

		setTimeout(function(){
			if (destiny > limit) {
				return msg.send("Sorry, it's not " + action + " day");
			} else {
				return msg.send("Yes, it's " + action + " day !");
			}
		}, 10);
	});
};