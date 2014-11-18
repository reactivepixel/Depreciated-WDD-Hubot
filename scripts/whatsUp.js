// Ask Hubot whats up and he will talk to you 

module.exports = function(robot) {

  robot.respond(/WASSUP$/i, function(msg) {
    return msg.send("Chilling, whats good with you?");
  });

    return robot.hear(/^WASSUP$/i, function(msg) {
    return msg.send("You talking to me?");
  });


};