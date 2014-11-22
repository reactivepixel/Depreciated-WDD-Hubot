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
//   Hubot <HEIGHT>ft red solo cup pyramid - Enter the height for a red solo cup pyramid, I'll tell how many cups you'll need and more!
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

		// So if the user decided to use a form of text for the height parameter - Throw an error/help message
		msg.send("You need to enter a number value for this to work, booger...");

	// Now we need to check if its a number that is less than 0 (like -9)
	}else if( thisHeight <= 0 ){

		// If they use a negative value, hubot will let them know they are hurting his brain
		msg.send("My brain hurts, try putting a number bigger than 1");

	// Otherwise, its time get their requested height and do some nerd maths!
	}else{

		// Yes that's right I actually measured a red solo cup in my hotel room
		// Then converted it's height to a decimal number
		var redSoloCupHeight = 0.39;

		// Now divide the user's height requested by the height of a red solo cup
		var totalRows = Math.floor(thisHeight / redSoloCupHeight);

		// Assuming that we have not started to build a pyramid yet, we'll set the number of rows to zero
		var numberOfRows = 0;

		// Okay so now we need an empty array which will store each red solo cup for each row in the pyramid
		// Think of it as way to count how many cups will be needed for each row in our pyramid
		var redSoloCupRowArray = [];

		// Now for some clever nerd maths
		// This for loop will go through each row in our pyramid and "stack" cups and "build" new levels in our pyramid
		for(var i = 0; i < totalRows; i++){

			// Add a row each time we loop through the total rows needed
			numberOfRows++;

			// Create the new row - stack all the cups - then push the total count to our array
			redSoloCupRowArray.push(numberOfRows);

		}

		// So now to get an answer, we add all of our cups in each row and return the amount cups needed
		var totalRedSoloCups = redSoloCupRowArray.reduce(function(a,b){
			return a + b;
		});

		// Here is a message which states how many cups are needed and towards the end will give the a cost to build!
		msg.send("You will need " + totalRedSoloCups + " red solo cups to complete your pyramid. Which should cost you about $" + (totalRedSoloCups*0.96).toFixed(2));
	}
}

module.exports = function(robot) {

	// Listen for a height to build a pyramid!
	return robot.respond(/(.*)ft red solo cup pyramid/i, function(msg) {
		// Call the red solo cup pyramid builder!
		startCountingCups(msg);
	});
};
