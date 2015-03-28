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
  // Anytime the word 'sadface' is used by a user
  robot.hear(/sadface$/i, function (msg) {
    // picture of a sad face
    return msg.send("http://media2.giphy.com/media/NTY1kHmcLsCsg/giphy.gif");
  });
    // Anytime the word 'smileyface' is used by a user
  robot.hear(/smileyface$/i, function (msg) {
    // picture of a happy dance
    return msg.send("http://slashfiction.org/wp-content/uploads/2013/10/gif-happy-dance.gif");
  });
    // Anytime the word 'bye' is used by a user
  robot.hear(/bye$/i, function (msg) {
    // picture of a person waving bye
    return msg.send("http://media.tumblr.com/85058c1b93d5989b569a1392a0de2099/tumblr_inline_n79lgacDSc1qbygev.gif");
  });
    // Anytime the word 'ikr' is used by a user
  robot.hear(/ikr$/i, function (msg) {
    // picture of a someone going I know right?
    return msg.send("http://i.imgur.com/SbRfG0y.gif");
  });
    // Anytime the word 'dtm' is used by a user
  robot.hear(/dtm$/i, function (msg) {
    // picture of a mic dropping
    return msg.send("http://0.media.collegehumor.cvcdn.com/82/61/f5657ea6e8a5225a9c0c692817d5bf5c-micdrop07.gif");
  });
}

//want to add sad faces or meme faces to this.