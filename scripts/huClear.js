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
//  Hubot clear desktop clears the desktop avg line height.
//	Hubot clear mobile clears the mobile avg line height.
//	Hubot clear tablet clears the tablet avg line height.
//
// Author: 
//	 dgerena aka Eli!


// I had wished to be able to pass in some specific charecter codes to push the page dependent on size of the browser had to settle for entering in spaces...
function seeThrough(msg){
	for(var esc = 0;esc < msg.count; esc++){
		msg.send(" ");
	}
}
// my filtering here is directly due to a misunderstanding about the extent to which i understood regex. Have to work on that for the forseable future...
// regex can be awesome or a pain in the rear.
module.exports = function(robot) {
	return robot.respond(/clear\sdesktop|clear\smobile|clear\stablet/i,function(msg){
		console.log("msg "+msg.message.text);
		//Filtering out the possible context to which someone might try to use the huclear.js/ Will work with the local and staging bots.
		//Suggested fixes or upgrades are to extend this to work with anyones bot named anything. Or to function while somehow getting the viewing size.
		if(msg.message.text == "Derpbot clear desktop"){
			msg.count = 25;
			seeThrough(msg);
			console.log("25");
		}else if(msg.message.text == "Derpbot clear mobile"){
			msg.count = 11;
			seeThrough(msg);
			console.log("10");
		}else if(msg.message.text == "Derpbot clear tablet"){
			msg.count = 21;
			seeThrough(msg);
			console.log("20");
		}else if(msg.message.text == "Hubot clear desktop"){
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
			//God forbid you somehow do get past all the above text comparisons and didnt misscapitalize the bots Ill explain you need to learn to speak clearly.
			msg.send("Hey! I can't understand you when you mumble. Also make sure to capitalize my awesome name, all right.")
		}
	});
}