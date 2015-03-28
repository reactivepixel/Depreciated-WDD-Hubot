// Description:
//   Hubot Dance. 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot dance - hubot dances the carlton
//
// Author: 
//	 Juanita J Hales
// 
// Date:
//    March 27, 2015

//command robot dance
module.exports = function (robot) {
    return robot.respond(/dance$/i, function (msg) {
        //hubot returns Carlton gif
        msg.send('http://i.imgur.com/gjsxU0s.gif');
    });
};
