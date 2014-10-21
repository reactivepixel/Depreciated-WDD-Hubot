// Description:
//   Explain to the user that The bot is alive... if its alive...
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  None
//
// Author: 
//	 dgerena aka Eli!

// This containse the responses so i can flip between them.
var responseArr=[
	"I am here, what's up?","Can I help you?"
]
// Here i play with fire as i regex some of the things the robot will listen for.
module.exports = function(robot){
  	return robot.hear(/are\syou\salive$|are\syou\sdown$|are\syou\sdead$/i, function(msg){
  		//Wanted to make this a utility after the murder that occured with derpbot in lab.
    	msg.send(responseArr[Math.floor(Math.random()*2)]+" Ask me anything, just check the help list for a query."); 
	});
}

