// Description:
//   A duel with random results between Hubot and Derpbot
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot duel! - Hubot will challenge Derpbot to a duel!
//
// Author:
//  Jordan Wilson

function duel(msg){

    //Player Damages
    var p1Damage = 25;
    var p2Damage = 25;

    //Players Health
    var p1Health = 100;
    var p2Health = 100;

    var round = 0;

	msg.send("Hubot has challenged Derpbot to a duel!");
	msg.send("Ready???");
    msg.send("Hubot: " + p1Health + "HP ***START*** Derpbot: " + p2Health+"HP");

    for(i = 0; i < 7; i++){
		//Minimum damage.
        var minDamage1 = p1Damage * .6; 
        var minDamage2 = p2Damage * .6;
		//Calculates the damage delt.
        var damage1 = Math.floor(Math.random() * (p1Damage - minDamage1) + minDamage1);
        var damage2 = Math.floor(Math.random() * (p2Damage - minDamage2) + minDamage2);


        //Inflict Damage
        p1Health -= damage1;
        p2Health -= damage2;


        msg.send("Hubot took " + damage1 + " damage! Derpbot took " + damage2 + " damage!");//Shows the results after each round.

        var result = winChecker();

        if(result === "No Winner"){
            round++;
            msg.send("Hubot: " + p1Health + "HP ***Round " + round + " Over*** Derpbot: " + p2Health + "HP\n");//If there is no winner the fight continues.
        }
        else{
            msg.send(result);//If someone has won, display the winner.
            break;
        }
    }

	function winChecker(){//Checks each round to see if there is a winner.

    	var results = "No Winner";

        if(p1Health < 1 && p2Health < 1){
            results = "They both got knocked out!";
        }
        else if(p1Health < 1){
            results = "Knock out! Derpbot WINS!!!";
        }
        else if(p2Health < 1){
            results = "Knock out! Hubot WINS!!!";
        }
        return results;

    }


}

//Listens for the fight! string and executes the function
module.exports = function(robot) {
  return robot.respond(/duel!$/i, function(msg) {
 	 duel(msg);
  });
}