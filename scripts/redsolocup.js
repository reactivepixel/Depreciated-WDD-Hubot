// Description:
//   Hubot can now tell you how many red solo cups are needed to build pyramid
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot <HEIGHT>ft red solo cup pyramid - Enter the height for a red solo cup pyramid - I'll tell how many cups you'll need and more!
//
// Author:
//  Clayton Allen
//
// Email:
//  clayton.allen.us@gmail.com

function startCountingCups(msg){
	// Get the users input
	var thisHeight = msg.match[1];
	// Validate users input
	if(isNaN(thisHeight)){
		msg.send("You need to enter a number value for this to work booger...");
	}else if( thisHeight <= 0 ){
		msg.send("My brain hurts, try putting a number bigger than 1");
	}else{
		// Needed to calculate how many total rows are needed
		var redSoloCupHeight = 0.39;
		// Now divide the height requested by the height of a red solo cup
		var totalRows = Math.floor(thisHeight / redSoloCupHeight);
		// Set the number of rows to zero for the for loop
		var numberOfRows = 0;
		// Now for an empty array of rows so we can add up each cup in each row
		var redSoloCupRowArray = [];
		for(var i = 0; i < totalRows; i++){
			// Add a row in each loop
			numberOfRows++;
			// Create the new row and push it into the array
			redSoloCupRowArray.push(numberOfRows);
		}
		var totalRedSoloCups = redSoloCupRowArray.reduce(function(a,b){
			return a + b;
		});

		msg.send("You will need " + totalRedSoloCups + " red solo cups to complete your pyramid. Which should cost you about $" + (totalRedSoloCups*0.96).toFixed(2));
	}
}

module.exports = function(robot) {
	return robot.respond(/(.*)ft red solo cup pyramid/i, function(msg) {
		startCountingCups(msg);
	});
};
