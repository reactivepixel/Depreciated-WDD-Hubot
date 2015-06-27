//Description
//
//
//Dependencies
//none
//
//Commands
//Hubot naenae - displays random video of characters/kids doing the Whip-naenae
//
//Author
//Pamela Holmes

//Array of Naenae videos
var dance = [
'https://www.youtube.com/watch?v=uBWrpVrazzA',
'https://www.youtube.com/watch?v=sG-Uklbqjjc',
'https://www.youtube.com/watch?v=5jW56PuJzlI',
'https://www.youtube.com/watch?v=-Bdvl4WKpw4'
];

module.exports = function (robot) {
    return robot.respond(/NAENAE$/i, function (msg) {
        //Sends a random youtube link
        msg.send(msg.random(dance));
    });
};