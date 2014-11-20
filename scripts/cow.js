//Description
//
//Cow Picture
//
//Dependencies
//
//none
//
//Commands
//
//Hubot cow - display image
//
//Author
//Mathew Beyer
//matthew@beyerbuilds.com

module.exports = function(robot) {
	return robot.respond(/cow$/i, function(msg) {
		//hubot returns the image/image link
		msg.send("http://i.imgur.com/G2YpErL.jpg#.png"); // Holly Springsteen - use .jpg extension instead of page address (last extension must be png to display)
	});
};
