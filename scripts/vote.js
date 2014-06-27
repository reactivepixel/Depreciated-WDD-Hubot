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
//   hubot voter create <thing1>,<thing2>,<thing3>,etc <time alive in hours>
//   hubot vote <ballot>
//   hubot voter list - gives back stats on the current poll
//   hubot voter clear - remove the poll and says who ended it
//
// Author:
//   Russell Schlup

module.exports = function(robot) {

// --------------- Redis Brain --------------- //
  // this will set a redis variable once loaded
  robot.brain.on('loaded', function() {
    robot.brain.votes = false;
  });



// --------------- Start the poll --------------- //
  // match[x] x is what regex section is located
  // i.e.        [0]   [1]   [2]
  robot.respond(/voter create (.*)? (\d*\.{0,1}\d*)?/i, function(msg) {

    // robot.brain.votes are false by default above
    // if it is false then you can make a poll
    if (!robot.brain.votes) {
      var data, ballots, time, objs;

      //trims the ballots of white space
      data = msg.match[1].trim();

      // splits the string into an array by its commas
      dataSplit = data.split(",");

      // filtered ballots
      ballots = [];

      // appends items to ballots
      for (var b in dataSplit) {

        // this filters the ballots
        if (!!dataSplit[b] && dataSplit[b] !== "" && typeof dataSplit[b] === "string") {
          
          // if they pass the filter push it to ballots
          ballots.push(dataSplit[b].trim());

        };
      };

      //turns the small digit to hours
      time = msg.match[2].trim()*3600000;

      // objs Stores the ballots from the for loop below
      objs = {};

      // for every ballot, it will create an object
      for (var i in ballots) {
        // voteName = {votes:0}
        objs[ballots[i]] = {votes:0};
      
      };

      // if there is nothing in there, don't do anything
      if (ballots.length > 0) {

        // stores objs in redis by the name of votes
        robot.brain.votes = objs;

        msg.send("Poll has begun.");

        // Timer for the votes
        // setTimeout(function(){}, runTime)
        setTimeout(function(){

          // current will show the current poll going on
          current(msg,robot.brain.votes);

          // This sets the ballots to false
          // so people can make a new poll
          robot.brain.votes = false;

        }, time);

      } else {
        msg.send("Something doesn't look right.");

      };

    } else {

      // If ballots is not set to false
      msg.send("A vote is currently going on.");
    };
  });

  robot.respond(/voter list/i, function(msg){

    // if votes are blank, don't run
    if (robot.brain.votes) {

      // current will show the current poll going on
      current(msg,robot.brain.votes);

    } else {
      msg.send("There is no poll going on.");
    
    };
  });

  robot.respond(/voter clear/i, function(msg){
    var user;

    // if votes are blank, don't run
    if (robot.brain.votes) {

      // this is the user that sent the message
      user = msg.message.user;

      // Checks if a name is there
      if (msg.message.user.name) {
        user = msg.message.user.name;
      };

      msg.send("The Poll was cleared by "+user);

      // current will show the current poll going on
      current(msg,robot.brain.votes);

      // This sets the ballots to false
      // so people can make a new poll
      robot.brain.votes = false;

    } else {

      msg.send("There is no poll going on.");
    };
  });



// --------------- Voting system--------------- //
  // This respond is another call for voting
  robot.respond(/vote (.*)/i, function(msg) {

    // if there are ballots and they are not blank
    if (!!robot.brain.votes) {
      var vote, ballots;

      // what the user voted for
      vote = msg.match[1].trim();

      // pulls the ballots back down from redis
      ballots = robot.brain.votes;

      // if the vote exists
      if (ballots[vote]) {

        // vote what you voted for
        // robot.brain.votes.ballotVoted.votes += 1
        robot.brain.votes[vote].votes++;

        // feedback on what you voted for
        msg.send("You voted for "+vote);

      } else {
        // if the check fails it is not a real ballot
        msg.send("That is not a ballot.");

      };

    } else {

      // feedback for if you try and vote but there is
      // nothing to vote for.
      msg.send("There is no poll going on currently.");

    };
  });
};

// --------------- Currently voted for
function current(msg,poll){
  // The release message
  msg.send("# ----- The Ballots are");

  // votes function requires msg
  setTimeout(votes(msg, poll), 500);

};



// --------------- Sends the Votes to the screen --------------- //
function votes(msg,votes){

  // for every vote
  for (var key in votes) {
  
    // send its name with its message
    msg.send(key+': '+votes[key].votes);
  
  };

};