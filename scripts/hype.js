// Description
// Do you believe your own hype?
//
// Author
// Erick Sitter

// Lets press that button!
module.exports = function(robot) {
  	// I want to believe
  	robot.respond(/do you believe your own hype?/i, function(msg) {
  		return msg.send("I am the HYPE!!");
  	});
  	robot.hear(/(.*) am the HYPE!!/i, function(msg) {
  		hype = msg.match[1]
  		if (hype == "I") {
  			return msg.send("I am the HYPE!!");
  		}
  		else {
  			return msg.send("Somebody, somewhere is the HYPE!!");
  		};
  	});
};