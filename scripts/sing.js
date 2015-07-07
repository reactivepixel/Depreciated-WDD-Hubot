//Description
//Simple script to show random song video to sing along with
//
//Dependencies
//none
//
//Commands
//Hubot sing - displays random song video to sing along with
//
//Author
//Bishop Lafer

//Array of music videos
var sing = [
'https://www.youtube.com/watch?v=-I_T3XvzPaM',
'https://www.youtube.com/watch?v=7mdIWaRi-7c',
'https://www.youtube.com/watch?v=6IUG-9jZD-g',
'https://www.youtube.com/watch?v=Vbg7YoXiKn0'
];

module.exports = function (robot) {
    return robot.respond(/SING$/i, function (msg) {
        //Sends a random youtube link
        msg.send(msg.random(sing));
    });
};