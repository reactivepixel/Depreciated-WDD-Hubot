// Description
// It's... the legendary Muffin Button!
//
// Author
// Erick Sitter

module.exports = function(robot) {
  // Type muffin button to get a muffin
  robot.hear(/do you believe your own hype?/i, function(msg) {
      return msg.send("I am the hype!!");
    });

    robot.respond(/(.*) am the hype/i, function(msg) {
      hypemaster = msg.match[1]
      if (hypemaster == "I") {
        return msg.send("the hype!!")
      }
      else {
        return msg.send("Somebody, somewhere is the hype!")
      }
    });
    robot.respond(/response test/i, function(msg) {
      return msg.send("Test");
    });
};