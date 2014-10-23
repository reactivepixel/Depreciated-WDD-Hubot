// Description:
//   Hubot attack command. 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot attack - Returns the attack "effects"
//
// Author: 
//	 dgerena aka Eli!
//
// Contributor:
//	 None

// Holy robot function batman!
module.exports = function(robot){
	// The robot will respond on attack call
	return robot.respond(/attack/i,function(msg){
		//The boom
		msg.send("BOOOOOM!");
		setTimeout(function(){
			//The pow
			msg.send("POWWW!");
		}, 1000);
	});
}