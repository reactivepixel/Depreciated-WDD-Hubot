// Description:
// Enter Height/Weight and BMI is returned
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot bmi <height>/<weight> - ie.(Derpbot bmi 70/200 - returns string of "BMI of 28.69 suggest, overweight")
//
// Author:
// Anthony Kluba


// Function to calculate user's BMI.
function getBMI(msg) {
	// Variable to hold user's input.
	var measurements = msg.match[1].trim();
	// Separates user's height from weight
	var arrMeasurements = measurements.split("/"); 
	
	// Check for correct format of user inputs
	if( (arrMeasurements.length <= 1 || arrMeasurements.length > 2) || (isNaN(arrMeasurements[0]) || arrMeasurements[0].match(/[.+-]/i)) || (isNaN(arrMeasurements[1]) || arrMeasurements[1].match(/[.+-]/i))){
		msg.send("Issue with format, please format as such (ie. 70/200)");
	}else{ // if user has used correct format, run calculations
		
		// user's height and weight values
		var height = parseInt(arrMeasurements[0],10); // convert string to int
		var weight = parseInt(arrMeasurements[1],10); // convert string to int
		
		// CALCULATING BMI
		var heightSquared = height * height; // Height(inches) squared
		var divided = weight / heightSquared // divide weight by height(squared)
		var bmi = (divided * 703).toFixed(2) // result of weight divided by height squared multiplied by converion factor of 703 and round 2 decimal places
		
		var strJudgment = '';
		// JUDGING personal BMI
		if(bmi <= 18){ // outputs user is underweight
			strJudgment = " suggest, underweight";
		}else if(bmi <= 18.5){ // outputs user is thin for height
			strJudgment = " suggest, thin for height";
		}else if(bmi >= 18.6 && bmi <= 24.9){ // outputs user is healthy weight
			strJudgment = " suggest, healthy weight";
		}else if(bmi >= 25 && bmi <= 29.9){ // outputs user is overweight
			strJudgment = " suggest, overweight";
		}else{ // outputs user is obese
			strJudgment = " suggest, obesity";
		} // End of JUDGING "else".
		
		// successful output
		msg.send("BMI of " + bmi + strJudgment);
		
	} // End of format "else".
} // End of "bmi" function.
	
	
//Listens for the exact match of "bmi"" and calls getBMI function.
module.exports = function(robot) {
	return robot.respond(/bmi (.*)/i, function(msg) {
		getBMI(msg);
	});
}