/*
Description:
   Simple Decision making responsibility offloader

Dependencies:
   None

Configuration:
   None

Commands:
   Hubot should I <Any question no matter how illogical>

Contributor:
   Daniel Carroll
   dcarroll@fullsail.edu
*/

module.exports = function(robot) {
    robot.respond(/should I (.*)$/i, function(msg) {
        msg.send("Is your name Daniel?");
        responseNumber = 0;
            robot.hear(/yes$/i, function (msg) {
                if(responseNumber === 0) {
                    msg.send("Then you already know what to do.");
                    responseNumber = responseNumber + 1;
                }
            });
            robot.hear(/no$/i, function (msg) {
                if(responseNumber === 0) {
                    msg.send("You should ask Daniel.");
                    responseNumber = responseNumber + 1;
                }
            })

    });
};