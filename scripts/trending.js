// Description:
//   Utility commands surrounding Hubot uptime.
//
// Hubot returns what's trending on twitter
//
// Commands
//   hubot what's trending
//
//  Dependencies
//      none
//
// author: Shye TG
// shye@fuillsail.edu

  var trend = [
   "TWITTER " + "https://twitter.com/hashtag/trending",
   "WHAT'S TRENDING " + "http://whatstrending.com/categories/trending-now",
   "BUZZ FEED " + "http://www.buzzfeed.com/trending",
    ];
//Starts up the hubot interface
module.exports = function(robot) {
    robot.respond(/what's trending$/i, function(msg) {
        
    	return msg.send("Here's what's trending on " + msg.random(trend) + " Check it out!");
    });
    robot.respond(/whats trending$/i, function(msg) {
        
    	return msg.send("Here's what's trending on " + msg.random(trend) + " Check it out!");
    });
    robot.respond(/trending$/i, function(msg) {
        
    	return msg.send("Here's what's trending on " + msg.random(trend) + " Check it out!");
    });
};

