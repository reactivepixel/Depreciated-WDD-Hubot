// Description:
//   You freakin Rock dude! 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot rock - Returns the "Dude you Freakin Rock" message.
//
// Author: 
//	 Chad Hales
//
// Contributor:
//	 None


// Robot Function
module.exports = function(robot){
	// The robot will respond on rock call
	return robot.respond(/rock/i,function(msg){
		//Dude you Rock
		msg.send("Dude You Freakin Rock!");
		setTimeout(function(){
			//Have a nice day
			msg.send("Have a great day!!!");
		}, 500);
	});
}


