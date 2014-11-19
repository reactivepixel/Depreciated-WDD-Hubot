//Description
//
//Cow Picture
//
//Dependencies
//
//none
//
//Commands
//
//Hubot cow - display image
//
//Author
//Mathew Beyer
//matthew@beyerbuilds.com

module.exports = function(robot) {
robot.hear(/cow\??/i, function(msg) {
  return msg.send("http://imgur.com/gallery/G2YpErL");
});
};

