// Description:
//   Have a voting system with hubot
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot poll <thing1>,<thing2>,<thing3>,etc <time alive in miliseconds> "The max time is 300000 5m"
//   hubot vote <ballot>
//
// Author:
//   Russell Schlup

module.exports = function(robot) {
  robot.brain.on('loaded', function() {
    robot.brain.ballots = false
  });
  robot.respond(/poll (.*?) (\d+)/i, function(msg) {
    if (!robot.brain.ballots) {
      data = msg.match[1].trim()
      ballots = data.split(",")
      robot.brain.ballots = ballots
      time = parseInt(msg.match[2].trim())
      if (time > 300000) {time = 300000}

      objs = {}
      for(var i in ballots){
        objs[ballots[i]] = {votes:0}
      }
      robot.brain.votes = objs
      setTimeout(function(){
        votes = robot.brain.votes
        strang = '<h2>The Ballots are</h2><br />'
        for(var key in votes){
          strang += key+': '+votes[key].votes+'<br />'
        }
        msg.send(strang);
        robot.brain.ballots = false
      }, time)
    } else {
      msg.send("A vote is currently goin on");
    }
  });
  robot.respond(/vote (.*)/i, function(msg) {
    if (!!robot.brain.ballots) {
      c = false
      vote = msg.match[1].trim()
      ballots = robot.brain.ballots
      for(var i in ballots){
        if(ballots[i]===vote){
          c = true
        }
      }
      if(c){
        robot.brain.votes[vote].votes++
        msg.send("You voted for "+vote);
      }else{
        msg.send("That is not a ballot");
      }
    }else{
      msg.send("There is no poll going on currently");
    }
  })
};
//hubot poll there,here 10000