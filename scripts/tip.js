// Description:
// Enter dollar amount and get how much for tip.
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot tip <amount> - Enter dollar amount, get how much is its tip.
//
// Author:
// Jairo Jurado


// Function to calculate the tip amount.
function getTip(msg) {
	// Variable to hold user's input.
	var amount = msg.match[1].trim();
	// Converts amount variable to a decimal and holds it in a new variable.
	var amountDecimal = parseFloat(amount);
	
	// Checks whether the amountDecimal variable is a number or not.
	if(isNaN(amountDecimal)) {
		// If the user's input is not a number, the user is informed to only enter numbers.
		msg.send("There are letters in your input. Please enter only numbers.");
	} else { // If the user's input is a number, calculations will run.
		// Calculates the 15% tip.
		var tip = .15 * amountDecimal;
		// Adds up the tip with the original amount to get the total amount.
		var total = tip + amountDecimal;
		
		// Sends the calculated tip and total to the user.
		msg.send("The 15% tip amount for "+ amountDecimal.toFixed(2) +" is $"+ tip.toFixed(2) +". Your total will be "+ total.toFixed(2) +".");
	}
}

//Listens for the exact match of tip and calls getTip function.
module.exports = function(robot) {
	return robot.respond(/tip (.*)/i, function(msg) {
		getTip(msg);
	});
}