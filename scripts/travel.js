// Description:
//   Utility commands surrounding Hubot uptime.
//
// Hubot returns a video promoting National Parks
//
// Commands
//   hubot travel
//
//  Dependencies
//      none
//
// author: Sammi Contreras
// sammic@fullsail.edu


module.exports = function(robot) {
    robot.respond(/TRAVEL$/i, function(msg) {
        return msg.send('https://youtu.be/FyR02rLcylU');
    });
};
