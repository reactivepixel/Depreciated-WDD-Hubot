// Description:
// Rolls dice based on the dice used in DnD
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot roll a <d#> - Rolls a die with number of sides. Only d4, d6, d8, d10, d12, and d20 dice can be rolled.
// Hubot roll a d20 - Rolls a d20 (twenty sided die).
// Hubot roll <#> <d#> - Rolls a number of dice with the number of sides. You can only roll between 1-5 dice at a time.
// Hubot roll 2 d20 - Rolls 2 d20 dice (two, twenty sided dice).
//
// Author:
// Bryan Erickson
// GitHub - bkerickson


//Function that gets a random number (or set of random numbers) based on the sides of a selected dice type
function rollDice(msg){
	var numberDice = msg.match[1].trim(),
		diceSides = parseInt(msg.match[2].substring(1), 10),
		diceArray = [],
		newRoll;

	// if only one die is rolled, get a random number for the number of sides of the die
	// else get random numbers for the number of dice rolled storing them to an array for output
	if (numberDice.toLowerCase() === 'a' || numberDice === 1){
		newRoll = getDiceRoll(diceSides);
		if (newRoll == diceSides){
			msg.send("You rolled a " + newRoll + " : Critical hit!");
		}else if (newRoll == 1){
			msg.send("You rolled a " + newRoll + " : Critical miss!");
		}else{
			msg.send("You rolled a " + newRoll);
		}
	}else{
		diceArray[0] = "You rolled: ";
		// loop for each of the number of dice to be rolled
		for (numRolls = 0; numRolls < numberDice; numRolls++){
			newRoll = getDiceRoll(diceSides);
			if (newRoll === diceSides){
				diceArray.push("\t\t" + newRoll + " : Critical hit!");
			}else if (newRoll === 1){
				diceArray.push("\t\t" + newRoll + " : Critical miss!");
			}else{
				diceArray.push("\t\t" + newRoll);
			}
		};
		// loop through the array of dice roll message array
		for(arrIndex = 0; arrIndex < diceArray.length; arrIndex++){
			(function(arrIndex){
				setTimeout(function(){
					msg.send(diceArray[arrIndex]);
				}, 30 * arrIndex);
			}(arrIndex))
		}
	}
	return false;
}; // end of rollDice function

// function that gets the number for the 'roll of the dice'
function getDiceRoll(numSides){
	return Math.ceil(Math.random() * numSides);
}; // end of getDiceRoll function

//Listens for the key-phrase "roll a d<##>" or "roll <#> d<##>" such as "roll a d20"
module.exports = function(robot) {
	return robot.respond(/roll (.+) (d[0-9]+)/i, function(msg) {
		// regex tests for the entered roll so only certain sets of dice can be rolled
		var diceTest = new RegExp("(^d4$|^d6$|^d8$|^d10$|^d12$|^d20$|^D4$|^D6$|^D8$|^D10$|^D12$|^D20$)"),
			numberDiceTest = new RegExp("(^a$|^A$|^1$|^2$|^3$|^4$|^5$)");

		// if the tests fail, the entered roll is not good, give an error message with info on how to roll dice
		// else, call the rollDice function
		if(!numberDiceTest.test(msg.match[1].trim()) || !diceTest.test(msg.match[2].trim())){
			msg.send("Please try to roll again. Reminder: You can only roll 1-5 dice at a time, and only 4, 6, 8, 10, 12, or 20 sides. IE: `hubot roll a d20` or `hubot roll 2 d20`");
		}else{
			rollDice(msg);
		}
	});
}
