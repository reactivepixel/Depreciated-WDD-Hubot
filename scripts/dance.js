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


module.exports = function (robot) {
    return robot.respond(/dance$/i, function (msg) {
        //hubot returns Carlton
        msg.send('http://i.imgur.com/gjsxU0s.gif');
    });
};
