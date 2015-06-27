// Description:
//   Utility commands surrounding Hubot uptime.
//        
// Commands:
//   hubot ping - Reply with pong
//   hubot echo <text> - Reply back with <text>
//   hubot time - Reply with current time
//   hubot die - End hubot process
    
module.exports = function(robot) {
  robot.respond(/PING$/i, function(msg) {
    return msg.send("PONG test ");
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
