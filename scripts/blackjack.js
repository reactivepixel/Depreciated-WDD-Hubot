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


//Requests random fact from mentalfloss.com api
function playJack(msg){

var suits = new Array("H", "C", "S", "D");
var cards = new Array();
// changed 3 to 4 to display all four suits
var cnt = 0;
for(i=0; i<4; i++)
    for(j=1; j<=13; j++)
        cards[cnt++] = suits[i] + j;


for(x=0;x<cards.length;x++){
	msg.send(cards[x]);
}


}


//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/play blackjack/i, function(msg) {
 		playJack(msg);
  });
}
