// Description:
//   Hubot listens eagerly for the word 'hype' to be used, so he can play your hype man
//
// Dependencies:
//   Hear
//
// Configuration:
//   None
//
// Commands:
//   Hubot hears 'hype'
//
// Author:
//  Harmony Betancourt

// Listens for the word 'hype' 
module.exports = function (robot) {
  "use strict";
  // Anytime the word 'hype' is used by a user
  return robot.hear(/hype/i, function (msg) {
    // Hubot responds as any good hype man would
    msg.send("WHAT!!!! OKAY!!! YEAH BOI!!!");
  });
}
