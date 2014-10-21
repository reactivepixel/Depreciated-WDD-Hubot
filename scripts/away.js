// Description:
// Availability tracking
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// brb - will let people know when you are away and welcomes you back upon next entry
// afk - will let people know when you are away and welcomes you back upon next entry
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

module.exports = function(robot) {
	// users_away object for storing users that will are brb or afk
	var users_away = {};

	// hubot listen for input
	robot.hear(/(.*)/i, function(msg) {
		var substr, user, _results;
		// if the user is away and the text is not brb or afk
		if (users_away[msg.message.user.name] && msg.message.text != 'brb' && msg.message.text != 'afk') {
			// welcome back the user
			msg.send("Welcome back "+msg.message.user.name+"!");
			// remove user from users_away object
			return delete users_away[msg.message.user.name];
		}else{
			_results = [];
			// for everyone that is away
			for (user in users_away) {
				substr = msg.message.text.substring(0, user.length + 1);
				if (substr.toLowerCase() === user.toLowerCase() + ':') {
					break;
				}else{
					_results.push(void 0);
				}
			}
		return _results;
		}
	});

	// hubot if you hear brb or afk do this
	return robot.hear(/^(brb|afk)/i, function(msg) {
		msg.send(msg.message.user.name + " is currently away.");
		setTimeout(function(){
			return users_away[msg.message.user.name] = true;
		}, 200);
	});
};
