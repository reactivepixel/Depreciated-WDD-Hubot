// Description:
//   Clear the page by moveing the content upwards in the window.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot clear - Clears the current height chat.
//
// Author: dgernea


function seeThrough(msg){
	msg.send("\f");
}
module.exports = function(robot) {
	return robot.respond(/clear/i,function(msg){
		seeThrough(msg);
	});
}