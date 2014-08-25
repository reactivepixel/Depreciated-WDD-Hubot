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
// hubot bmi <height>/<weight> - ie.(hubot bmi 70/200 - returns string of "BMI of 28.69 suggest, overweight")
//
// Author:
// Anthony Kluba


// Function to calculate user's BMI.
function getBMI(msg) {
	// Variable to hold user's input.
	var measurements = msg.match[1].trim();
	// Separates user's height from weight
	var separate = measurements.split("/"); 
	
	// Check for correct format of user inputs
	if(separate.length <= 1 || separate.length > 2){ // if users input is missing or has more than required values, inform the user to use correct format
		msg.send("Issue with format, please format as such (ie. 70/200)");
	}else if((isNaN(separate[0]) || separate[0].match(/[.+-]/i)) && (isNaN(separate[1]) || separate[1].match(/[.+-]/i))){ // if user height and weight input is not a number, inform the user only to use numbers
		msg.send("Issue with height and weight, please only use whole numbers. (ie. 70/200)");
	}else if(isNaN(separate[0]) || separate[0].match(/[.+-]/i)){ // if user height input is not a number, inform the user only to use numbers
		msg.send("Issue with height, please only use whole numbers. (ie. 70/200)");
	}else if(isNaN(separate[1]) || separate[1].match(/[.+-]/i)){ // if user weight input is not a number, inform the user only to use numbers 
		msg.send("Issue with weight, please only use whole numbers. (ie. 70/200)");
	}else{
		
		// user's height and weight values
		var height = parseInt(separate[0],10); // convert string to int
		var weight = parseInt(separate[1],10); // convert string to int
		
		// Check for unlikely measurements
		if(weight <= height){ // if user's weight is less than or equal to height, notify them they have major problems or entered values incorrect
			msg.send("Issue with height/weight ratio, please format as such (ie. 70/200)");
		}else if(height < 48 || height > 84){ // if user's height is out of adult BMI height range, inform user to check value entered
			msg.send("Issue with height value, please use height in inches. (ie. 70/200)");
		}else if(weight < 80 || weight > 300){ // if user's weight is out of adult BMI weight range, inform user to check value entered
			msg.send("Issue with weight value, please use weight in pounds. (ie. 70/200)");
		}else{ // if user has used correct format, run calculations
		
			// CALCULATING BMI
			var heightSquared = height * height; // Height(inches) squared
			var divided = weight / heightSquared // divide weight by height(squared)
			var bmi = (divided * 703).toFixed(2) // result of weight divided by height squared multiplied by converion factor of 703 and round 2 decimal places
			
			// JUDGING personal BMI
			if(bmi <= 18){ // outputs user is underweight
				msg.send("BMI of " + bmi + " suggest, underweight");
			}else if(bmi <= 18.5){ // outputs user is thin for height
				msg.send("BMI of " + bmi + " suggest, thin for height");
			}else if(bmi >= 18.6 && bmi <= 24.9){ // outputs user is healthy weight
				msg.send("BMI of " + bmi + " suggest, healthy weight");
			}else if(bmi >= 25 && bmi <= 29.9){ // outputs user is overweight
				msg.send("BMI of " + bmi + " suggest, overweight");
			}else{ // outputs user is obese
				msg.send("BMI of " + bmi + " suggest, obesity");
			} // End of JUDGING "else".
		} // End of Calculating "else".
	} // End of "else".
} // End of "bmi" function.
	
	
//Listens for the exact match of "bmi"" and calls getBMI function.
module.exports = function(robot) {
	return robot.respond(/bmi (.*)/i, function(msg) {
		getBMI(msg);
	});
}