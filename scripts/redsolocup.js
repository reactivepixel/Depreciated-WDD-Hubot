// Description:
//   Hubot can now tell you how many red solo cups are needed to build pyramid
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot red solo cup pyramid <height> feet in height- Enter height, get red solo cup count
//
// Author:
//  Clayton Allen
//  clayton.allen.us@gmail.com

function getHeightRequested(msg){
	var thisHeight = msg.match[4];
}

module.exports = function(robot){

	return robot.respond('/red solo cup pyramid (.*) feet in height/i', function(msg){
		msg.send(getHeightRequested());
	});

}