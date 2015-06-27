// Description:
//	The prompt responds with a link to a video on slush making.
//
// Commands:
//	hubot slush - Responds with a link to a video.
//
// Author: 
//	Emily Van Vlerah
//

module.exports = function(robot){
	
	return robot.hear(/slush/i, function(msg){
		msg.send("Mmmmm Slushies" + " " + "https://www.youtube.com/watch?v=5T68TvdoSbI");
	});

};