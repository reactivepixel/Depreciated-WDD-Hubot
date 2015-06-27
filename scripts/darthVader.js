// Description:
//  Are you my father?
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot Are you my father? - Returns image of darth vader
//
// Author: 
//	 Bryan Cash
//
// Contributor:
//	 None

module.exports = function (robot) {
    return robot.respond(/Are you my father?/i, function (msg) {
        //hubot returns animated image of darth vader
        msg.send('http://media-cache-ec0.pinimg.com/736x/6c/25/fb/6c25fb6f0bccd3da68324a56f7bc4505.jpg#.png');
    });
};