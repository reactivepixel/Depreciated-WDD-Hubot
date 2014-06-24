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

function playJack(msg){
	var suits = new Array("H", "C", "S", "D");
	var cards = new Array();
	// changed 3 to 4 to display all four suits
	var cnt = 0;
	for(i=0; i<4; i++){
	    for(j=1; j<=13; j++){
	        cards[cnt++] = suits[i] + j;
	    }
	}
	var random1 = Math.floor(Math.random()*cards.length)
	var card1 = cards[random1];
	cards.splice(random1,1);

	var random2 = Math.floor(Math.random()*cards.length)
	var card2 = cards[random2];
	cards.splice(random2,1);

	var random3 = Math.floor(Math.random()*cards.length)
	var card3 = cards[random3];
	cards.splice(random3,1);

	var random4 = Math.floor(Math.random()*cards.length)
	var card4 = cards[random4];
	cards.splice(random4,1);

	// Variable to check if What suit it is
	var card1suitshort = card1.charAt(0);
	var card2suitshort = card2.charAt(0);
	var card3suitshort = card3.charAt(0);
	var card4suitshort = card4.charAt(0);

	// Initialize Full suits variable
	var card1suit = "";
	var card2suit = "";
	var card3suit = "";
	var card4suit = "";

	// If statement for card 1 suit
	if (card1suitshort == "D") {
		card1suit = "Diamond";
	} else if (card1suitshort == "H") {
		card1suit = "Heart";
	} else if (card1suitshort == "C") {
		card1suit = "Clubs";
	} else if (card1suitshort == "S") {
		card1suit = "Spades";
	} 

	// If statement for card 2 suit
	if (card2suitshort == "D") {
		card2suit = "Diamond";
	} else if (card2suitshort == "H") {
		card2suit = "Heart";
	} else if (card2suitshort == "C") {
		card2suit = "Clubs";
	} else if (card2suitshort == "S") {
		card2suit = "Spades";
	} 

	// If statement for card 3 suit
	if (card3suitshort == "D") {
		card3suit = "Diamond";
	} else if (card3suitshort == "H") {
		card3suit = "Heart";
	} else if (card3suitshort == "C") {
		card3suit = "Clubs";
	} else if (card3suitshort == "S") {
		card3suit = "Spades";
	} 

	// If statement for card 4 suit
	if (card4suitshort == "D") {
		card4suit = "Diamond";
	} else if (card4suitshort == "H") {
		card4suit = "Heart";
	} else if (card4suitshort == "C") {
		card4suit = "Clubs";
	} else if (card4suitshort == "S") {
		card4suit = "Spades";
	} 

	// Initialize value variables
	var value1 = 0;
	var value2 = 0;
	var value3 = 0;
	var value4 = 0;

	// Check the value of card 1
	if (card1 == "D1" || card1 == "C1" || card1 == "S1" || card1 == "H1") {
		value1 = 11;
	} else if (card1 == "D2" || card1 == "C2" || card1 == "S2" || card1 == "H2") {
		value1 = 2;
	} else if (card1 == "D3" || card1 == "C3" || card1 == "S3" || card1 == "H3") {
		value1 = 3;
	} else if (card1 == "D4" || card1 == "C4" || card1 == "S4" || card1 == "H4") {
		value1 = 4;
	} else if (card1 == "D5" || card1 == "C5" || card1 == "S5" || card1 == "H5") {
		value1 = 5;
	} else if (card1 == "D6" || card1 == "C6" || card1 == "S6" || card1 == "H6") {
		value1 = 6;
	} else if (card1 == "D7" || card1 == "C7" || card1 == "S7" || card1 == "H7") {
		value1 = 7;
	} else if (card1 == "D8" || card1 == "C8" || card1 == "S8" || card1 == "H8") {
		value1 = 8;
	} else if (card1 == "D9" || card1 == "C9" || card1 == "S9" || card1 == "H9") {
		value1 = 9;
	} else if (card1 == "D10" || card1 == "C10" || card1 == "S10" || card1 == "H10" || card1 == "D11" || card1 == "C11" || card1 == "S11" || card1 == "H11" || card1 == "D12" || card1 == "C12" || card1 == "S12" || card1 == "H12" || card1 == "D13" || card1 == "C13" || card1 == "S13" || card1 == "H13") {
		value1 = 10;
	}

	// Check the value of card 2
	if (card2 == "D1" || card2 == "C1" || card2 == "S1" || card2 == "H1") {
		value2 = 11;
	} else if (card2 == "D2" || card2 == "C2" || card2 == "S2" || card2 == "H2") {
		value2 = 2;
	} else if (card2 == "D3" || card2 == "C3" || card2 == "S3" || card2 == "H3") {
		value2 = 3;
	} else if (card2 == "D4" || card2 == "C4" || card2 == "S4" || card2 == "H4") {
		value2 = 4;
	} else if (card2 == "D5" || card2 == "C5" || card2 == "S5" || card2 == "H5") {
		value2 = 5;
	} else if (card2 == "D6" || card2 == "C6" || card2 == "S6" || card2 == "H6") {
		value2 = 6;
	} else if (card2 == "D7" || card2 == "C7" || card2 == "S7" || card2 == "H7") {
		value2 = 7;
	} else if (card2 == "D8" || card2 == "C8" || card2 == "S8" || card2 == "H8") {
		value2 = 8;
	} else if (card2 == "D9" || card2 == "C9" || card2 == "S9" || card2 == "H9") {
		value2 = 9;
	} else if (card2 == "D10" || card2 == "C10" || card2 == "S10" || card2 == "H10" || card2 == "D11" || card2 == "C11" || card2 == "S11" || card2 == "H11" || card2 == "D12" || card2 == "C12" || card2 == "S12" || card2 == "H12" || card2 == "D13" || card2 == "C13" || card2 == "S13" || card2 == "H13") {
		value2 = 10;
	}

	// Check the value of card 3
	if (card3 == "D1" || card3 == "C1" || card3 == "S1" || card3 == "H1") {
		value3 = 11;
	} else if (card3 == "D2" || card3 == "C2" || card3 == "S2" || card3 == "H2") {
		value3 = 2;
	} else if (card3 == "D3" || card3 == "C3" || card3 == "S3" || card3 == "H3") {
		value3 = 3;
	} else if (card3 == "D4" || card3 == "C4" || card3 == "S4" || card3 == "H4") {
		value3 = 4;
	} else if (card3 == "D5" || card3 == "C5" || card3 == "S5" || card3 == "H5") {
		value3 = 5;
	} else if (card3 == "D6" || card3 == "C6" || card3 == "S6" || card3 == "H6") {
		value3 = 6;
	} else if (card3 == "D7" || card3 == "C7" || card3 == "S7" || card3 == "H7") {
		value3 = 7;
	} else if (card3 == "D8" || card3 == "C8" || card3 == "S8" || card3 == "H8") {
		value3 = 8;
	} else if (card3 == "D9" || card3 == "C9" || card3 == "S9" || card3 == "H9") {
		value3 = 9;
	} else if (card3 == "D10" || card3 == "C10" || card3 == "S10" || card3 == "H10" || card3 == "D11" || card3 == "C11" || card3 == "S11" || card3 == "H11" || card3 == "D12" || card3 == "C12" || card3 == "S12" || card3 == "H12" || card3 == "D13" || card3 == "C13" || card3 == "S13" || card3 == "H13") {
		value3 = 10;
	}

	// Check the value of card 4
	if (card4 == "D1" || card4 == "C1" || card4 == "S1" || card4 == "H1") {
		value4 = 11;
	} else if (card4 == "D2" || card4 == "C2" || card4 == "S2" || card4 == "H2") {
		value4 = 2;
	} else if (card4 == "D3" || card4 == "C3" || card4 == "S3" || card4 == "H3") {
		value4 = 3;
	} else if (card4 == "D4" || card4 == "C4" || card4 == "S4" || card4 == "H4") {
		value4 = 4;
	} else if (card4 == "D5" || card4 == "C5" || card4 == "S5" || card4 == "H5") {
		value4 = 5;
	} else if (card4 == "D6" || card4 == "C6" || card4 == "S6" || card4 == "H6") {
		value4 = 6;
	} else if (card4 == "D7" || card4 == "C7" || card4 == "S7" || card4 == "H7") {
		value4 = 7;
	} else if (card4 == "D8" || card4 == "C8" || card4 == "S8" || card4 == "H8") {
		value4 = 8;
	} else if (card4 == "D9" || card4 == "C9" || card4 == "S9" || card4 == "H9") {
		value4 = 9;
	} else if (card4 == "D10" || card4 == "C10" || card4 == "S10" || card4 == "H10" || card4 == "D11" || card4 == "C11" || card4 == "S11" || card4 == "H11" || card4 == "D12" || card4 == "C12" || card4 == "S12" || card4 == "H12" || card4 == "D13" || card4 == "C13" || card4 == "S13" || card4 == "H13") {
		value4 = 10;
	}

	msg.send("You got:");
	msg.send(value1.toString() + " Of " + card1suit.toString());
	msg.send(value2.toString() + " Of " + card2suit.toString());
	msg.send("This converts to: " + (value1 + value2));

	msg.send("Dealer got:");
	msg.send(value3.toString() + " Of " + card3suit.toString());
	msg.send(value4.toString() + " Of " + card4suit.toString());
	msg.send("This converts to: " + (value3 + value4));

	// Check who is closest to 21
	// initialize total value variable
	var dealerscore = value3 + value4; // 11
	var playerscore = value1 + value2; // 13

	// If dealerscore is higher than playerscore and dealerscore is less then 21
	if (dealerscore >= playerscore && dealerscore < 21){
		msg.send("Dealer wins");
	// If dealerscore is 21, Dealer automatically wins with a blackjack
	} else if (dealerscore == 21){
	 	msg.send("Dealer wins with a blackjack");
	// If the playerscore is higher than dealerscore and playerscore is not equal to 21
	} else if (dealerscore < playerscore && playerscore <21){
	 	msg.send("Player wins");
	// If the playerscore is 21 and the dealer doesn't have blackjack
	} else if (playerscore == 21 && dealerscore !== 21) {
		msg.send("Player wins with a blackjack");
	}
}


//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/play blackjack/i, function(msg) {
 		playJack(msg);
  });
}
