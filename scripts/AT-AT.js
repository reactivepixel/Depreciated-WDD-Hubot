// Description:
//  Walk the AT-AT
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot Walk the AT-AT - Returns an image of an animated AT-AT
//
// Author: 
//	 Bryan Cash
//
// Contributor:
//	 None

module.exports = function (robot) {
    return robot.respond(/Walk the AT-AT/i, function (msg) {
        //hubot returns animated image of an AT-AT
        msg.send('http://www.picgifs.com/graphics/s/star-wars/graphics-star-wars-006895.gif#.png');
    });
};