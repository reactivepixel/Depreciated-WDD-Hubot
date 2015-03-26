// Description:
//   Bananna!
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot bananna - Returns a GIF image of a Minion and a Bananna
//
// Author: 
//	 Chad Hales
//
// Contributor:
//	 None



module.exports = function (robot) {
    return robot.respond(/bananna/i, function (msg) {
        //hubot returns the image/image link
        msg.send('http://www.picgifs.com/graphics/b/bananas/graphics-bananas-996081.gif');
    });
};