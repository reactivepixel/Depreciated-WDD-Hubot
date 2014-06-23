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

msg.send(card1);
msg.send(card2);
msg.send(card3);
msg.send(card4);


}


//Listens for the exact match of random fact and calls random fact function.
module.exports = function(robot) {
  return robot.respond(/play blackjack/i, function(msg) {
 		playJack(msg);
  });
}
