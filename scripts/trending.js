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


module.exports = function(robot) {
    robot.hear(/trending$/i, function(msg) {
        return msg.send('https://twitter.com/whatstrending');
    });
};

