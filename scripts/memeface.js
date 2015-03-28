/*# Description:
#   This will add meme faces to quotes
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Hubot scouter - plan on linking to meme faces for different emoticons.
#
# Author:
#   Douglas "DJay" Sweeting  e-mail at bidgsweetz@gmail.com
#
# Different meme faces for emoticons... */



// make script visible to hubot
// Listens for the word 'hype' 
module.exports = function (robot) {
  "use strict";
  // Anytime the word 'hype' is used by a user
  return robot.hear(/sadface/i, function (msg) {
    // picture of a sad face
    msg.send("sad picture goes here");
  });
}

//want to add sad faces or meme faces to this.