//Description
//Simple script to show random skate videos
//
//Dependencies
//none
//
//Commands
//Hubot skate - displays random skate video
//
//Author
//Bishop Lafer

//Array of Skate videos
var skate = [
'https://www.youtube.com/watch?v=O0VFeIlCI1Q',
'https://www.youtube.com/watch?v=aLwk3-LPIxQ',
'https://www.youtube.com/watch?v=dY1M8YxMhkg',
'https://www.youtube.com/watch?v=4pqzytIqD3I'
];

module.exports = function (robot) {
    return robot.respond(/SKATE$/i, function (msg) {
        //Sends a random youtube link
        msg.send(msg.random(skate));
    });
};