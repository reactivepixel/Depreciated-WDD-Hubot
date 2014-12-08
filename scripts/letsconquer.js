// Description:
// Have hubot pick your conqueror name
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot lets conquer - hubot will pick your random conqueror name.
//
// Author:
// Seth Healy.
// shealy@fullsail.edu.

// First name for conquerors.
var firstname = ["Ivan","Bodark","Genghis","Alexander","Hitler","Attila","Napoleon","Tamerlane",
"Nikki","Fluffy","Sparkles","Jordan the wizard", "Gmd"];

// Adjective that descibes the conqueror.
var adjective = ["the terrible", "the destroyer", "the sweet", "the fury", "the furry", "the fabulous",
"the glamorous"]

// Where they conquered.
var place = ["of the world", "of mars", "of your mom", "of uranus", "of Egypt","of America","of the Antartic"]


module.exports = function(robot) {
    return robot.respond(/lets conquer/i, function(msg) {

        //The message that hubot will deliver.

        msg.send(msg.random(firstname)+" "+msg.random(adjective)+" the conqueror "+msg.random(place));
    });
};
