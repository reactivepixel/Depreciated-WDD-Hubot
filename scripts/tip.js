// Description:
// Enter dollar amount and get how much for tip.
//
// Dependencies:
// numeral
//
// Configuration:
// none
//
// Commands:
// hubot tip <amount> - Enter dollar amount, get how much is its tip.
//
// Author:
// Jairo Jurado

// Dependency for dollar amounts with commas.
var numeral = require('numeral');

// Function to calculate the tip amount.
function getTip(msg) {
	// Variable to hold user's input.
	var amount = msg.match[1].trim();
	// Converts amount variable to a decimal and holds it in a new variable.
	var amountDecimal = parseFloat(amount);
	
	// Checks whether the amountDecimal variable is a number or not.
	if(isNaN(amountDecimal)) {
		// If the user's input is not a number, the user is informed to only enter numbers.
		msg.send("There are letters and/or punctuation marks in your input. Please only enter numbers.");
	} else { // If the user's input is a number, calculations will run.
		
		// Calculates the tips.
		var tip10 = .10 * amountDecimal;
		var tip15 = .15 * amountDecimal;
		var tip20 = .20 * amountDecimal;
		
		// Adds tip with original amount to get total.
		var total10 = tip10 + amountDecimal;
		var total15 = tip15 + amountDecimal;
		var total20 = tip20 + amountDecimal;
		
		// Sends the calculated tip and total to the user.
		msg.send("10% tip is "+ numeral(tip10).format('$0,0.00') +". Total is "+ numeral(total10).format('$0,0.00') +".");
		msg.send("15% tip is "+ numeral(tip15).format('$0,0.00') +". Total is "+ numeral(total15).format('$0,0.00') +".");
		msg.send("20% tip is "+ numeral(tip20).format('$0,0.00') +". Total is "+ numeral(total20).format('$0,0.00') +".");
	}
}

//Listens for the exact match of tip and calls getTip function.
module.exports = function(robot) {
	return robot.respond(/tip (.*)/i, function(msg) {
		getTip(msg);
	});
}