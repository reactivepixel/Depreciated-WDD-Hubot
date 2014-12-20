//This is a hammer time give given my the command STOP!
module.exports = function (robot) {
    return robot.respond(/stop$/i, function (msg) {
        //hubot displays gif
        msg.send('http://media.giphy.com/media/Xdcj75alQutVe/giphy.gif');
        //hubot displays message
        msg.send('HAMMER-TIME!');
    });
};