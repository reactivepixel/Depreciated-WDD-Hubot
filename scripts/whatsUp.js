// Ask Hubot whats up and he will talk to you 

module.exports = function(robot) {

  robot.respond(/wassup$/i, function(msg) {
    return msg.send("Chilling, whats good with you?");
  });

  robot.respond(/ADAPTER$/i, function(msg) {
    return msg.send(robot.adapterName);
  });

  robot.respond(/ECHO (.*)$/i, function(msg) {
    return msg.send(msg.match[1]);
  });

  robot.respond(/TIME$/i, function(msg) {
    return msg.send("Server time is: " + (new Date()));
  });

  robot.respond(/DIE$/i, function(msg) {
    msg.send("Goodbye, cruel world.");
    return process.exit(0);
  });

  return robot.hear(/^PONG$/i, function(msg) {
    return msg.send("Thats not how this goes...");
  });

};