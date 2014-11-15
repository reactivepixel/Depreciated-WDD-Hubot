//This is going to be animalsounds.js

module.exports = function(robot) {
robot.respond(/chicken$/i, function(msg) {
return msg.send("coo coo");
});
};