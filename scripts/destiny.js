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
	// wait for the user to ask if this is their day
	return robot.respond(/is it (.*) day/i, function(msg) {
		// variables full of useful information
		// 		action - user input
		// 		nbDay - converts time to epoch time (milliseconds)
		// 		actionHash - hash number based on user input to randomize the response
		
		var action = msg.match[1],
			nbDay = Math.floor(new Date().getTime() / 1000 / 86400),
			actionHash = action.length + action.charCodeAt(0) + action.charCodeAt(action.length - 1),
			destiny = Math.cos(nbDay + actionHash) + 1,
			limit = (Math.sin(actionHash) + 1) / 2;

		// change my or My to your for the response
		if(action.toLowerCase() == 'my'){
			action ='your';
		}

		// gotta wait for the conversion of my or My
		setTimeout(function(){
			if (destiny > limit) {
				// it's just not your day
				return msg.send("Sorry, it's not " + action + " day");
			} else {
				// congrats, it's your day
				return msg.send("Yes, it's " + action + " day !");
			}
		}, 10);
	});
};