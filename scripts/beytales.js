// Description:
//   Hubot Beytales. 
//
//
// Commands:
//	 Hubot beytales - hubot will show a video of Beyonce dancing to Ducktales
//
// Author: 
//	 Steven Williams
// 
// Date:
//    May 29, 2015


module.exports = function (robot) {
    return robot.respond(/beytales$/i, function (msg) {
        //hubot displays video
        msg.send('https://youtu.be/-EW9yS1YhTE');
        //hubot displays message
        msg.send('WHOOHOO!');
    });
};

