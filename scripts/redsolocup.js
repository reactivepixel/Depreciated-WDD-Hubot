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
//   Hubot red solo cup pyramid <height> - Enter height, get red solo cup count
//
// Author:
//  Clayton Allen
//  clayton.allen.us@gmail.com

module.exports = function(robot){

	return robot.respond('/red solo cup pyramid (.*) in height/i', function(msg){
		msg.send('Oh so you want to build a Red Solo Cup Pyramid, just one second while I calculate that');
	});
}