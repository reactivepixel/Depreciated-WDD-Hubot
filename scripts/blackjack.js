// Description:
//   Play a game of blackjack against Hubot
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot play blackjack
//
// Author:
//   Bogoroh

// Variable to create entity
var ent = require('ent');

// Function to deal a card and remove it from the card array
var dealCard = function(deck){
	var target = Math.floor(Math.random()*deck.length),
	aryReturn = deck.splice(target,1);

	return aryReturn[0];
}

var cardGen = function(num, suit){
	// Switch statement for Ace, Jack,Queen, King to display as text
	var disp = num;
	switch (num) {
		case 1:
			disp = "Ace";
			num = 11;
			break;
		case 11:
			disp = "Jack";
			num = 10;
			break;
		case 12:
			disp = "Queen";
			num = 10;
			break;
		case 13:
			disp = "King";
			num = 10;
			break;
	}
	return {
		display: disp,
		suit: suit,
		value: num
	}
}

// Function to calculate the score of the 2 cards
var calcScore = function(ary){
	var scoreKeeper = 0;

	for(var i = 0; i < ary.length; i++){
		scoreKeeper += ary[i].value;
	}

	return scoreKeeper;
}

<<<<<<< HEAD
	// decode an ascii symbol
	var symHearts = ent.decode("&#9829;");
	var symClubs = ent.decode("&#9827;");
	var symSpades = ent.decode("&#9824;");
	var symDiamonds = ent.decode("&#9830;");
	
	// If statement for card 1 suit
	if (card1suitshort == "D") {
		card1suit = symDiamonds;
	} else if (card1suitshort == "H") {
		card1suit = symHearts;
	} else if (card1suitshort == "C") {
		card1suit = symClubs;
	} else if (card1suitshort == "S") {
		card1suit = symSpades;
	};

	// If statement for card 2 suit
	if (card2suitshort == "D") {
		card2suit = symDiamonds;
	} else if (card2suitshort == "H") {
		card2suit = symHearts;
	} else if (card2suitshort == "C") {
		card2suit = symClubs;
	} else if (card2suitshort == "S") {
		card2suit = symSpades;
	}

	// If statement for card 3 suit
	if (card3suitshort == "D") {
		card3suit = symDiamonds;
	} else if (card3suitshort == "H") {
		card3suit = symHearts;
	} else if (card3suitshort == "C") {
		card3suit = symClubs;
	} else if (card3suitshort == "S") {
		card3suit = symSpades;
	} 

	// If statement for card 4 suit
	if (card4suitshort == "D") {
		card4suit = symDiamonds;
	} else if (card4suitshort == "H") {
		card4suit = symHearts;
	} else if (card4suitshort == "C") {
		card4suit = symClubs;
	} else if (card4suitshort == "S") {
		card4suit = symSpades;
	} 
=======
// Function to display your hand
var dispHand = function(ary){
	var aryHand = [];

	for(var HandIndex = 0; HandIndex < ary.length; HandIndex++){
		aryHand.push(ary[HandIndex].display + " " + ent.decode(ary[HandIndex].suit));
	}

	return aryHand.join(" , ");
}
>>>>>>> deckBuilder


// Function to play blackjack
function playJack(msg){
	// Initialize "deck","delt" array
	var arySuits = ["&hearts;" , "&clubs;", "&spades;", "&diams;"],
		deck = [],
		delt = [];
		
	var cnt = 0;

	// For loop for the 4 suits
	for(var i=0; i<4; i++){
		// For loop for the 13 values
	    for(var cardValue=1; cardValue<=13; cardValue++){
	        // Push the card to the deck array
	       deck.push(cardGen(cardValue,arySuits[i]));
	    }
	}

	// Deal 2 cards per user
	var handSize = 2;

	// Loop to deal a card and push it to the delt array
	for(var dealIndex=0; dealIndex<handSize; dealIndex++){

		// Checks if the player's "delt" array has cards inside
		if(!delt["You"]){
			delt["You"] = [];	
		}

		// Checks if the dealer's "delt" array has cards inside
		if(!delt["Dealer"]){
			delt["Dealer"] = [];	
		}
			
		// Push to the delt array the cards the player and dealer has been delt
		delt["You"].push(dealCard(deck));
		delt["Dealer"].push(dealCard(deck));
	}

<<<<<<< HEAD
	// Array to make the msg.send syncronize
=======
	// Variables to calculate score for Dealer and Player
	var scoreYou = calcScore(delt["You"]),
		scoreDealer = calcScore(delt["Dealer"]);

	// Array to make the msg.send synchronize
>>>>>>> deckBuilder
	var messageArray = [];

	// Display the scores for player and dealer
	messageArray.push("Your Score: " + scoreYou + " (" + dispHand(delt["You"]) + " )" );
	messageArray.push("Dealer Score: " + scoreDealer + " (" + dispHand(delt["Dealer"]) + " )" );

	// Checks to see who won
	if (scoreYou > scoreDealer){
		messageArray.push("You Win!");
	} else {
		messageArray.push("You Lose.");
	}

	// Interval to syncronize msg.send
	setTimeout(function (){
		// Output the strings in syncronize back
		for(var z=0;z<messageArray.length;z++){
			msg.send(messageArray[z]);
			
		}
	}, 500);
}


//Listens for the exact match of "blackjack" and calls playJack function.
module.exports = function(robot) {
	return robot.respond(/blackjack/i, function(msg) {
		playJack(msg);
	});
}
