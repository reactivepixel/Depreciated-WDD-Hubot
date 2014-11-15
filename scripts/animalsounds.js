//Description
//
//Animal Sounds
//
//Dependencies
//
//none
//
//Commands
//
//Hubot chicken - reply coo coo
//Hubot dog - reply ruff ruff
// Hubot cat - reply meow meow 

module.exports = function(robot) {
robot.respond(/chicken$/i, function(msg) {
return msg.send("coo coo");
});
robot.respond(/dog$/i, function(msg) {
return msg.send("ruff ruff");
});
robot.respond(/cat$/i, function(msg) {
return msg.send("meow meow");
});
};