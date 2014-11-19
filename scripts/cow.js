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
return msg.send("http://i.imgur.com/G2YpErL.jpg"); // Holly Springsteen - use .jpg extension instead of page address
});
};

