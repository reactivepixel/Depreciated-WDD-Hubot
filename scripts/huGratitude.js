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
//varied responses for gratitude
var responseArr=[
	"Anytime user.","No problem, just doing my thang."
]
//Have the robots accept gratitude from the users.
module.exports = function(robot){
	return robot.hear(/^thank\syou$|Hubot$|^thanks\shubot$|^thanks\sderpbot$|^thanks\sDerpbot$|^thanks$/i, function(msg){
  		//Heh giving the bots a bit of boasting
    	msg.send(responseArr[Math.floor(Math.random()*2)]); 
	});
}