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
//   Hubot red solo cup pyramid <height> feet in height - Enter height, get red solo cup count
//
// Author:
//  Clayton Allen
//  clayton.allen.us@gmail.com

function startCountingCups(msg){
	// Get the users input
	var thisHeight = msg.match[1];
	// Validate users input
	if(isNaN(thisHeight)){
		msg.send("You need to enter a number value for this work booger...");
	}else if( thisHeight <= 0 ){
		msg.send("My brain hurts, try putting a number bigger than 1");
	}else{
		// Needed to calculate how many total rows are needed
		var redSoloCupHeight = 0.39;
		// Now divide the height requested by the height of a red solo cup
		var totalRows = Math.floor(theHeight / redSoloCupHeight);
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

		msg.send("You will need " + totalRedSoloCups + " to complete your pyramid.");
	}
}

module.exports = function(robot) {
	return robot.respond(/red solo cup pyramid (.*) feet in height/i, function(msg) {
		return msg.send(startCountingCups());
	});
};
