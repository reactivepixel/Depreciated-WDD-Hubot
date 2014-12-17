//Description
//Joker laughing GIF
//
//Dependencies
//none
//
//Commands
//Hubot why so serious? - display gif
//
//Author
//Jake Chapman

module.exports = function (robot) {
    return robot.respond(/why so serious$/i, function (msg) {
        msg.send('http://i.giphy.com/vLbcUhCzigPAY.gif');
    });
};