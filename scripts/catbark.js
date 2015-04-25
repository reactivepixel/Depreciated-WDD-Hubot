//Description
//Hubot will display a video of a barking cat.
//
//
//Dependencies
//None
//
//
//Commands
//
//Hubot barking cat
//
//Author
//Kareem Beazer
//beazerkareem@gmail.com

module.exports = function (robot) {
    return robot.respond(/barking cat$/i, function (msg) {
        //hubot will return the barking cat link
        msg.send('https://www.youtube.com/watch?v=aP3gzee1cps');
    });
};
