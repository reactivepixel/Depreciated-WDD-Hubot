// Description:
//   Simple Deceision making responsibility offloader
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot should I <Any question no matter how illogical>
//
// Contributor:
//   Daniel Carroll
//   dcarroll@fullsail.edu


module.exports = function(robot) {
    robot.respond(/should I (.*)$/i, function(msg) {
        msg.send("Is your name Daniel?");
        robot.hear(/yes$/i, function(msg){
            msg.send("Then you already know what to do.");
        });
        robot.hear(/no$/i, function(msg){
            msg.send("You should ask Daniel.")
        })
    });
};