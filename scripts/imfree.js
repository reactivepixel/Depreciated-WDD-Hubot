// Description:
//   Help student know you are available while you are offline.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot imfree for <hours> (decimals are excepted i.e. 0.5 = 30 mins)
//   hubot whos free - to see who is available
//   hubot g2g - to say that you are no longer free
//
// Author:
//   Russell Schlup

module.exports = function(robot) {
  
// --------------- Redis Brain --------------- //
  robot.brain.on('loaded', function() {
    // set the redis variables
    robot.brain.peopleFree = {};
  
  });


// --------------- I'm free response --------------- //
// the function is located at the bottom
  // regex \. = (allows "."), \d = (digit), * = 0+, {0,1} = 0 or 1
  robot.respond(/i'm free for (\d{0,2}\.{0,1}\d*)?/i, function(msg){imfreeResponse(robot,msg)});
  robot.respond(/im free for (\d{0,2}\.{0,1}\d*)?/i, function(msg){imfreeResponse(robot,msg)});
  robot.respond(/imfree for (\d{0,2}\.{0,1}\d*)?/i, function(msg){imfreeResponse(robot,msg)});


// --------------- Who's free response --------------- //
  robot.respond(/whosfree/i, function(msg){whosFreeResponse(robot,msg)});
  robot.respond(/whos free/i, function(msg){whosFreeResponse(robot,msg)});
  robot.respond(/who's free/i, function(msg){whosFreeResponse(robot,msg)});


// --------------- I have to go response --------------- //
  robot.respond(/g2g/i, function(msg){
    var user;

    // this is the user that sent the message
    user = msg.message.user;

    // Checks if a name is there
    if(msg.message.user.name){
      user = msg.message.user.name;
    };
    
    // pull down who is already free
    peopleFree = robot.brain.peopleFree;

    if(user in peopleFree){

      // removes the property
      delete peopleFree[user];

      // sets redis variable with the new user added
      robot.brain.peopleFree = peopleFree;

      // feedback
      msg.send("Later "+user+", You are no longer seen as available");

    } else {

      msg.send("You weren't seen as free");

    };

  });
};

// --------------- Who's free response function --------------- //
function whosFreeResponse(robot,msg){

  var peopleFree, user, key, person, counter;

  // pull down who is already free
  peopleFree = robot.brain.peopleFree;

  counter = 0;

  // check
  for(i in peopleFree){
    counter++;
    break;
  }

  if (counter !== 0) {
    for(user in peopleFree){
      
      whosFree(msg,user,peopleFree[user].end);

    };
  }else{
    msg.send("No one");
  };
}


// --------------- Who's free function --------------- //
// send each user in redis to the screen
function whosFree(msg,user,end){
  
  // sets the units default to hours
  unit = 'hours';

  // subtract the time now from when it ends
  end = end - (new Date).getTime();

  // turns time into a hour measurement
  end = end / 3600000;

  if(end < 1){
    // if it's less than an hour convert to mins
    end = end * 60;

    //set the unit to mins
    unit = "mins";
  };

  end = Math.round(end);

  msg.send(user + ": " + end + " " + unit);

};

// --------------- I'm free response function --------------- //
function imfreeResponse(robot,msg) {
  var user, time, end, peopleFree, send;

  // this is the user that sent the message
  user = msg.message.user;

  // Checks if a name is there
  if(msg.message.user.name){
    user = msg.message.user.name;
  };

  // there are 3600000ms in an hour
  time = msg.match[1].trim()*3600000;

  // using epoch time detirmine when it ends
  end = (new Date).getTime()+time;

  // pull down who is already free
  peopleFree = robot.brain.peopleFree;

  // if(myProp in myObj){
  if(user in peopleFree){

    // feedback if your already in redis
    msg.send("Your already seen as available");

  } else {

    // this is the combination putting a name to a number
    peopleFree[user] = {"end":end};

    // sets redis variable with the new user added
    robot.brain.peopleFree = peopleFree;

    setTimeout(function(){
      
      // pull down who is already free
      peopleFree = robot.brain.peopleFree;

      if(user in peopleFree){

        // removes the property
        delete peopleFree[user];

        // sets redis variable with the new user added
        robot.brain.peopleFree = peopleFree;

      };
    }, time);

    send = "You are now seen as available";

    msg.send(send);

  };

};