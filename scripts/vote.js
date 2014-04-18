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
    // if there is a poll going on it won't allow you to set another one
    if (!robot.brain.ballots) {
      // pulls the first regex
      data = msg.match[1].trim()
      // turns it into an array and splits by commas
      ballots = data.split(",")
      // adds it to redis
      robot.brain.ballots = ballots
      // turn the string into an array
      time = parseInt(msg.match[2].trim())

      if(time !== NaN){
        // will only let the max time be 5 mins
        if (time > 300000) {time = 300000}

        objs = {}
        // runs through the ballouts and makes
        // objects for voting purposes
        for(var i in ballots){
          objs[ballots[i]] = {votes:0}
        }
        // saves the ballouts turned into objects to redis
        robot.brain.votes = objs

        // this funciton will run after the specified time you
        // set for it
        setTimeout(function(){
          votes = robot.brain.votes
          strang = '# ======== The Ballots are'
          for(var key in votes){
            strang += key+': '+votes[key].votes+'/n'
          }
          msg.send(strang)
          robot.brain.ballots = false
        }, time)
      }else{
        msg.send("Sorry the time was written incorrectly please write time in miliseconds with only number");  
      }
    } else {
      msg.send("A vote is currently goin on");
    }
  });

  // This funciton is for the voting procedure
  robot.respond(/vote (.*)/i, function(msg) {
    if (!!robot.brain.ballots) {
      check = false
      // pull the first regex
      vote = msg.match[1].trim()
      // pulls down the ballots from redis
      ballots = robot.brain.ballots
      // checks if the ballot exists
      for(var i in ballots){
        if(ballots[i]===vote){
          check = true
        }
      }

      // if the for loop above found your vote
      // it will add it if not it will say it doesn't exist 
      if(check){
        // adds your vote to the chosen object
        robot.brain.votes[vote].votes++
        // gives you feedback
        msg.send("You voted for "+vote);
      }else{
        msg.send("That is not a choice");
      }
    }else{
      msg.send("There is no poll going on currently");
    }
  })
};
//hubot poll there,here 10000