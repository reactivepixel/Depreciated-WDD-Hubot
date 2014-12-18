//Description
//Joker laughing GIF
//
//Dependencies
//none
//
//Commands
//Hubot Why so serious? - displays Joker laughing
//
//Author
//Jake Chapman

module.exports = function (robot) {
    return robot.respond(/why so serious$/i, function (msg) {
        msg.send('http://i.giphy.com/vLbcUhCzigPAY.gif');
    });
};