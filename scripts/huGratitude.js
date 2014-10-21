// Description:
//   Robo gratitude
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author: 
//	 dgerena aka Eli!

//Have the robots accept gratitude from the users.
module.exports = function(robot){
	return robot.hear(/^thank\syou|Hubot$|thanks\shubot$|thanks\sderpbot$|thanks\sDerpbot$/i, function(msg){
  		//Heh giving the bots a bit of boasting
    	msg.send("Anytime user."); 
	});
}