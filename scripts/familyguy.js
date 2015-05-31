// Description:
//   Hubot Family Guy. 
//
//
// Commands:
//	 Hubot what time is it - hubot will show you what time it is
//
// Author: 
//	 Steven Williams
// 
// Date:
//    May 28, 2015


module.exports = function (robot) {
    return robot.respond(/what time is it/i, function (msg) {
        //hubot displays message
        msg.send("It's Peanut Butter Jelly Time!!!");
        //hubot displays gif
        msg.send('http://studybreaks.com/sites/default/files/peanut%20butter.gif');
        
    });
};

