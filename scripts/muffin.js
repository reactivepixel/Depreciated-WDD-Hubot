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
	robot.hear(/muffin button/i, function(msg) {
    	return msg.send("Did you say muffin button?!" + " " + "https://www.youtube.com/watch?v=xpIeqU0OiAU");
  	});

  	// Respond to the muffin button
  	robot.respond(/wheres that button that makes blueberry muffins/i, function(msg) {
  		return msg.send("Sorry, a button that makes muffins does not exist. Well, unless it's an oven at 375 degrees.");
  	});
};