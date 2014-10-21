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
		if(expression == "0/0" || expression == "0 / 0" || expression == "help"){
			msg.send("Please enter a valid expression");
		}else{
			// send result
			msg.send(expression+" = "+regExpressions);
		}
	}
	// lets you handle the error
	catch(err){
		msg.send("Please enter a valid expression");
	}
}

// Runs the function for the calculator
// + - * / sin(30 deg) cos(30 deg) tan(30 deg) "5 cm to inches"
module.exports = function(robot) {
  return robot.respond(/math (.*)/i, function(msg) {
 		calculator(msg);
  });
}
