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
//   bogoroh

var ent = require('ent');

var dealCard = function(deck){
		var target = Math.floor(Math.random()*deck.length),
		aryReturn = deck.splice(target,1);
		return aryReturn[0];
	}

var cardGen = function(num, suit){
	return {
		suit: suit,
		value: num
	}
}

var calcScore = function(ary){
		var scoreKeeper = 0;
		for(var i = 0; i < ary.length; i++){
			scoreKeeper += ary[i].value;
		}
		return scoreKeeper;
	}

function playJack(msg){
	var arySuits = ["H", "C", "S", "D"],
		deck = [],
		delt = [];
		
	
	// changed 3 to 4 to display all four suits
	var cnt = 0;
	for(var i=0; i<4; i++){
	    for(var cardValue=1; cardValue<=13; cardValue++){
	        //deck[cnt++] = suits[i] + cardValue;
	       deck.push(cardGen(cardValue,arySuits[i]));
	    }
	}

	// Deal 4 cards and save to delt arry
	var handSize = 2;

	for(var dealIndex=0; dealIndex<handSize; dealIndex++){
		
			if(!delt["You"]){
				delt["You"] = [];	
			}

			if(!delt["Dealer"]){
				delt["Dealer"] = [];	
			}
			

		delt["You"].push(dealCard(deck));
		delt["Dealer"].push(dealCard(deck));
	}
	
	
	var dispHand = function(ary){
		var aryHand = [];
	
		for(var HandIndex = 0; HandIndex < ary.length; HandIndex++){
			aryHand.push(ary[HandIndex].value + ary[HandIndex].suit);
		}
		return aryHand.join(", ");
	}
	
		var scoreYou = calcScore(delt["You"]),
			scoreDealer = calcScore(delt["Dealer"]);
	

	// decode an ascii symbol
	//var sym = ent.decode("&#9825;");
	
	// Array to make the msg.send syncronize
	var messageArray = [];


	messageArray.push("Your Score: " + scoreDealer + " (" + dispHand(delt["You"]) + ")" );
	messageArray.push("Your Score: " + scoreYou + " (" + dispHand(delt["Dealer"]) + ")" );
	if (scoreYou > scoreDealer){
		messageArray.push("You Win!");
	} else {
		messageArray.push("You Lose");
	}


	// Output the strings in syncronize back
	for(var z=0;z<messageArray.length;z++){
		msg.send(messageArray[z]);
	}
}


//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/play blackjack/i, function(msg) {
 		playJack(msg);
  });
}
