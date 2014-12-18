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

//Array of Joker laugh gifs
var gifs = [
'http://i.giphy.com/vLbcUhCzigPAY.gif',
'http://i.giphy.com/tMyCJmeXHBetq.gif',
'http://i.giphy.com/rdigZDCpCfnMY.gif',
'http://i.giphy.com/CUEsWj7R9ZC0w.gif',
'http://i.giphy.com/A363LZlQaX0ZO.gif'
];

module.exports = function (robot) {
    return robot.respond(/Why so serious$/i, function (msg) {
        //Sends a random gif
        msg.send(msg.random(gifs));
    });
};