module.exports = function(robot) {};

robot.respond(/chicken$/i, function(msg) {});

msg.send("coo coo");

robot.respond(/dog$/i, function(msg) {});

msg.send("ruff ruff");

robot.respond(/cat$/i, function(msg) {});

msg.send("meow meow");
