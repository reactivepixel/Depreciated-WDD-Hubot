//Description
//
//Cow Picture
//
//Dependencies
//
//none
//
//Commands
//
//Hubot cow - display image
//
//Author
//Mathew Beyer
//matthew@beyerbuilds.com

module.exports = function (robot) {
    return robot.respond(/cow$/i, function (msg) {
        //hubot returns the image/image link
        msg.send('http://www.picgifs.com/graphics/c/cows/graphics-cows-170079.gif#.png');
    });
};
