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
   "twitter" + "https://twitter.com/hashtag/trending",
   "what's trending" + "http://whatstrending.com/categories/trending-now",
   "buzz feed" + "http://www.buzzfeed.com/trending",
    ];
//Starts up the hubot interface
module.exports = function(robot) {
    return robot.respond(/what's trending$/i, function(msg) {
        
        msg.send("Here's what's trening on " + msg.random(trend) + " Check it out!");
    });
};


