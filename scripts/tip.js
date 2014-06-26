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


//function to calculate the tip amount
function getTip(msg) {
	var amount = msg.match[1].trim();
	var amountDecimal = parseFloat(amount);
	
	if(isNaN(amountDecimal)) {
		msg.send("There are letters in your input. Please enter only numbers.");
	} else {
		var tip = .15 * amountDecimal;
		var total = tip + amountDecimal;
		
		msg.send("The 15% tip amount for "+ amountDecimal.toFixed(2) +" is $"+ tip.toFixed(2) +". Your total will be "+ total.toFixed(2) +".");
	}
}

//Listens for the exact match of tip and calls getTip function.
module.exports = function(robot) {
	return robot.respond(/tip (.*)/i, function(msg) {
		getTip(msg);
	});
}