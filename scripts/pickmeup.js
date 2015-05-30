// Description:
// Hubot can inspire you
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot inspire me - give a random quote for hubot to inspire with
//
// Author:
// John Pace IV

// A list of links to inspirational quotes
var quotes = [
    "http://www.brainyquote.com/quotes/quotes/f/francisofa121023.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/h/helenkelle101301.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/h/henrydavid379353.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/j/jimmydean131287.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/v/vincelomba385070.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/m/miltonberl105306.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/a/audreyhepb413479.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/w/williamsha164317.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/o/octaviaeb646129.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/s/swamisivan390760.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/m/mayaangelo578763.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/n/normanvinc130593.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/t/theodorero380703.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/a/aristotleo119068.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/v/vincelomba382625.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/r/ronaldreag120491.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/b/buddha140966.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/e/edithwhart100511.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/a/annefrank145726.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/r/robertloui101230.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/w/wilmarudol387101.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/h/hoseaballo149578.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/n/napoleonhi152866.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/j/jeandelabr380158.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/l/laotzu133381.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/s/stevejobs416894.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/t/theodorero125564.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/d/democritus154879.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/d/desiderius148991.html?src=t_inspirational",
    "http://www.brainyquote.com/quotes/quotes/a/ameliabarr202840.html?src=t_inspirational"
];
//Starts up the hubot interface
module.exports = function(robot) {
    return robot.respond(/inspire me$/i, function(msg) {
        //Picks up a random quote from the list above and sends it as a message with atttribution.
        msg.send(msg.random(quotes) + " from BrainyQuote.com");
    });
};
