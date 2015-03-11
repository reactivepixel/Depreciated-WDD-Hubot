// Description:
// Enter dollar amount and get a tip amount back
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

// Dependency to show dollar amounts with dollar sign and commas.
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
		msg.send("Please only enter whole numbers/decimals.");
	} else if(amountDecimal <= 0) { // If the user's input is less than or equal to 0, the user is informed to enter a positive number.
		msg.send("Please enter a positive whole number/decimal.");
	} else { // If the user's input is a number, calculations will run.
		// Calculates the tips.
		var tip10 = .10 * amountDecimal;
		var tip15 = .15 * amountDecimal;
		var tip20 = .20 * amountDecimal;
		
		// Adds tip with original amounts to get totals.
		var total10 = tip10 + amountDecimal;
		var total15 = tip15 + amountDecimal;
		var total20 = tip20 + amountDecimal;
		
		// Array to hold all the messages that will be sent.
		var messageArray = [];
		
		// Pushes each string to messageArray.
		messageArray.push("Amount entered: "+ numeral(amountDecimal).format('$0,0.00') +".");
		messageArray.push("10a% tip is "+ numeral(tip10).format("$0,0.00") +". Total is "+ numeral(total10).format("$0,0.00") +".");
		messageArray.push("15a% tip is "+ numeral(tip15).format("$0,0.00") +". Total is "+ numeral(total15).format("$0,0.00") +".");
		messageArray.push("20a% tip is "+ numeral(tip20).format("$0,0.00") +". Total is "+ numeral(total20).format("$0,0.00") +".");
		
		// Outputs the strings back.
		for(z = 0; z <= messageArray.length; z++) {
			(function(z) {
				setTimeout(function(){
					msg.send(messageArray[z])
				}, 300 * z);
			}(z));
		} // End of for loop.
	} // End of "else".
} // End of "getTip" function.

//Listens for the exact match of "tip"" and calls getTip function.
module.exports = function(robot) {
	return robot.respond(/tip (.*)/i, function(msg) {
		getTip(msg);
	});
}