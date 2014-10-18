// Description:
// Calculator
//
// Dependencies:
// mathjs
//
// Configuration:
// none
//
// Commands:
// hubot math <expression> - enter a regular expression (no complex math ... yet)
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

var math = require('mathjs');

//Requests random fact from mentalfloss.com api
function calculator(msg){
	var expression = msg.match[1],
		regExpressions = math.eval(msg.match[1]);
	msg.send(expression+" = "+regExpressions);
}

//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/math (.*)/i, function(msg) {
 		calculator(msg);
  });
}
