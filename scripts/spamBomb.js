// Description:
// Makes hubot spam a user next time they talk.
//
// Dependencies:
// None
//
// Configuration:
// None
//
// Commands:
// Hubot spambomb <amount> <user>: <message> - Makes hubot spam a user next time they talk.
//
// Author:
// Austin Mayer
// austinemayer@gmail.com

var appendSpamBomb;

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
  robot.respond(/spambomb (\b([1-9]|1[0-9]|2[0])\b) (.*?): (.*)/i, function(msg) {
    if(msg.match[2].trim() == 0|| msg.match[2].trim() > 20){
      return msg.send("Please enter a number between 1 and 20");
    }else{
      var user, users;
      users = robot.brain.usersForFuzzyName(msg.match[3].trim());
      if (users.length === 1) {
        user = users[0];
        for (i = 0, len = msg.match[2].trim(); i < len; i++) {
          appendSpamBomb(robot.brain.data.spamBombs, user, msg.message.user, msg.match[4]);
        }
        return msg.send("Spam bomb prepared");
      } else if (users.length > 1) {
        return msg.send("Too many users like that");
      } else {
        return msg.send("" + msg.match[3] + "? Never heard of 'em");
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