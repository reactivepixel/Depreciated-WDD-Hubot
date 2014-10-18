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

// reuqire mathjs for calculation of expressions
var math = require('mathjs');

// function to take expression of from user and convert it
function calculator(msg){
	// lets you test a block of code for errors
	try {
		// expression from user
		var expression = msg.match[1],
			regExpressions = math.eval(msg.match[1]); // evaluate expression with mathjs
		// send result
		msg.send(expression+" = "+regExpressions);
	}
	// lets you handle the error
	catch(err){
		msg.send("Please enter a valid expression");
	}
}

//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/math (.*)/i, function(msg) {
 		calculator(msg);
  });
}
