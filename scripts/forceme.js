//Description:
//  Helps you make desicions

// Dependencies:
//   None

// Configuration:
//   None

// Commands:
//   hubot force me thin1,thin2,thing3 - Receive an answer

module.exports = function(robot) {
  robot.respond(/force me (.*)/i, function(msg) {
    data = msg.match[1].trim();
    arr = data.split(",");
    num = Math.floor(Math.random()*((arr.length-1)-0+1))+0
    str = arr[num]
    return msg.send(str);
  });
};