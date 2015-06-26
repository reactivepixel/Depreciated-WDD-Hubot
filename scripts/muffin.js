// Description
// It's... the legendary Muffin Button!
//
// Commands
// Hubot muffin button 
//
// Author
// Erick Sitter

// Lets press that button!
module.exports = function(robot) {
	// Type muffin button to get a muffin
	robot.hear(/muffin_button$/i, function(msg) {
    	return msg.send("Did you say muffin button?!" + " " + "https://www.youtube.com/watch?v=xpIeqU0OiAU");
  	});
};