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
//   Hubot clear - <clear desktop> clears the desktop avg line height.
//					<clear mobile> clears the mobile avg line height.
//					<clear tablet> clears the tablet avg line height.
//
// Author: dgernea


function seeThrough(msg){
	for(var esc = 0;esc < msg.count; esc++){
		msg.send(" ");
	}
}
module.exports = function(robot) {
	return robot.respond(/clear\sdesktop|clear\smobile|clear\stablet/i,function(msg){
		console.log("msg "+msg.message.text);
		if(msg.message.text == "Hubot clear desktop"){
			msg.count = 25;
			seeThrough(msg);
			console.log("25");
		}else if(msg.message.text == "Hubot clear mobile"){
			msg.count = 11;
			seeThrough(msg);
			console.log("10");
		}else if(msg.message.text == "Hubot clear tablet"){
			msg.count = 21;
			seeThrough(msg);
			console.log("20");
		}else{
			msg.send("Hey! I can't understand you when you mumble.")
		}
	});
}