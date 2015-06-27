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
//	 Hubot Walk the AT-AT - Returns image of darth vader
//
// Author: 
//	 Bryan Cash
//
// Contributor:
//	 None

module.exports = function (robot) {
    return robot.respond(/Walk the AT-AT/i, function (msg) {
        //hubot returns the image/image link
        msg.send('http://www.picgifs.com/graphics/s/star-wars/graphics-star-wars-006895.gif');
    });
};