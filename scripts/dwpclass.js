// Description:
//	Explaining the class, program, and school.
//
// Commands:
//	hubot dwp_class - Explainging the class, program, and school.
//
// Author: 
//	Emily Van Vlerah
//

module.exports = function(robot){
	
	return robot.hear(/dwp_class/i, function(msg){
		msg.send("This is the Deployment of Web Applications class for the Web Design and Development program at Full Sail University.");
	});

};
