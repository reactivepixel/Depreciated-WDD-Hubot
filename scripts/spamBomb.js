// Description:
// Makes hubot spam a user next time they talk.
//
// Dependencies:
// N/A
//
// Configuration:
// N/A
//
// Commands:
// Hubot textbomb <amount> <user>: <message> - Makes hubot spam a user next time they talk.
//
// Author:
// Austin Mayer
// austinemayer@gmail.com

var appendTextBomb;

appendTextBomb = function(data, toUser, fromUser, message) {
  var name;
  data[name = toUser.name] || (data[name] = []);
  return data[toUser.name].push([fromUser.name, message]);
};

module.exports = function(robot) {
  robot.brain.on('loaded', (function(e) {
    return function() {
      var base;
      return (base = robot.brain.data).textBombs || (base.textBombs = {});
    };
  })(this));
  robot.respond(/textbomb( \b([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0])\b)? (.*?): (.*)/i, function(msg) {
    var user, users;
    users = robot.brain.usersForFuzzyName(msg.match[3].trim());
    if (users.length === 1) {
      user = users[0];
      for (i = 0, len = msg.match[2].trim(); i < len; i++) {
        appendTextBomb(robot.brain.data.textBombs, user, msg.message.user, msg.match[4]);
      }
      return msg.send("textBomb prepared");
    } else if (users.length > 1) {
      return msg.send("Too many users like that");
    } else {
      return msg.send("" + msg.match[3] + "? Never heard of 'em");
    }
  });
  return robot.hear(/./i, function(msg) {
    var textBomb, textBombs, i, len;
    if (robot.brain.data.textBombs == null) {
      return;
    }
    if ((textBombs = robot.brain.data.textBombs[msg.message.user.name])) {
      for (i = 0, len = textBombs.length; i < len; i++) {
        textBomb = textBombs[i];
        msg.send(textBomb[1]);
      }
      return delete robot.brain.data.textBombs[msg.message.user.name];
    }
  });
};