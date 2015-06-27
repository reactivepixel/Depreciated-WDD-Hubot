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

    // Respond to the muffin button
    robot.respond(/response test/i, function(msg) {
      return msg.send("Test");
    });
};