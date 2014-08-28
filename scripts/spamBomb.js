// Description:
// Makes Hubot spam a user next time they talk.
//
// Dependencies:
// None
//
// Configuration:
// None
//
// Commands:
// Hubot spambomb <amount> <user>: <message> - Makes Hubot spam a user next time they talk.
//
// Author:
// Austin Mayer
// austinemayer@gmail.com

var appendSpamBomb;
//
appendSpamBomb = function(data, toUser, fromUser, message) {
  var name;
  data[name = toUser.name] || (data[name] = []);
  return data[toUser.name].push([fromUser.name, message]);
};

module.exports = function(robot) {
  robot.brain.on('loaded', (function(e) {
    return function() {
      var base;
      return (base = robot.brain.data).spamBombs || (base.spamBombs = {});
    };
  })(this));

  robot.respond(/(spambomb (\d)+ (\w)*: (\w)*|spambomb (\w)*: (\w)*)/i, function(msg) {
    msg.send(msg.match[0]);
    msg.send(msg.match[1]);
    msg.send(msg.match[2]);
    msg.send(msg.match[3]);
    msg.send(msg.match[4]);
    msg.send(msg.match[5]);
    msg.send(msg.match[6]);
    var count = msg.match[1].trim() || 5;
    if(msg.match[1].trim() <= 0|| msg.match[1].trim() > 20 || (isNaN(msg.match[1].trim()))){
      return msg.send("Please enter a number between 1 and 20");
    }else{
      var user, users;
      users = robot.brain.usersForFuzzyName(msg.match[2].trim());
      if (users.length === 1) {
        user = users[0];
        for (i = 0, len = msg.match[1].trim(); i < len; i++) {
          appendSpamBomb(robot.brain.data.spamBombs, user, msg.message.user, msg.match[3]);
        }
        return msg.send("Spam bomb prepared");
      } else if (users.length > 1) {
        return msg.send("Too many users like that");
      } else {
        return msg.send("" + msg.match[2] + "? Never heard of 'em");
      }
    }
  });

  return robot.hear(/./i, function(msg) {
    var spamBomb, spamBombs, i, len;
    if (robot.brain.data.spamBombs == null) {
      return;
    }
    if ((spamBombs = robot.brain.data.spamBombs[msg.message.user.name])) {
      for (i = 0, len = spamBombs.length; i < len; i++) {
        spamBomb = spamBombs[i];
        msg.send(spamBomb[1]);
      }
      return delete robot.brain.data.spamBombs[msg.message.user.name];
    }
  });
};