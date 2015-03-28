// Description:
//   Hubot timer. 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot timer - sets a minute timer
//
// Author: 
//	 Juanita J Hales
// 
//Date: 
//   March 27, 2015

//fire Hubot Timer
module.exports = function(robot){
	// respond with Minute Timer Started
	return robot.respond(/timer/i,function(msg){
		msg.send("Minute Timer Start!");
		setTimeout(function(){
			//set timeout message and 60 second timer
			msg.send("60 seconds is up!");
		}, 60000);
	});
}//close module