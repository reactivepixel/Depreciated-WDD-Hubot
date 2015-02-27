// Description:
//   Hubot gives you a motivational/cheerful gif
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot cheer me up - Hubot displays a random gif
//
// Author:
//   Harmony Betancourt

// Gif Variables
var happyGifs = [
  'http://i.giphy.com/2GnS81AihShS8.gif',
  'http://38.media.tumblr.com/7fd4e0491f22d6d1ca790adca00911e6/tumblr_ni36nraKea1sifsvko2_250.gif',
  'http://media.tumblr.com/eb36d9eac1b1775ae4a6a382a5404700/tumblr_inline_nc81kx8qG11r6ug5a.gif',
  'http://media.giphy.com/media/Wz0M2HHF7EKwU/giphy.gif',
  'http://25.media.tumblr.com/tumblr_m8x2bl4OzI1rbybp4o1_500.gif',
  'http://38.media.tumblr.com/tumblr_me8ahlT1Ni1qc4uvwo1_400.gif'];

//Listens for someone to need cheering up string and replies with a random gif
module.exports = function (robot) {
  "use strict";
  return robot.respond(/cheer me up$/i, function (msg) {
     // Pick a Random Gif
     var randomPick = happyGifs[Math.floor(Math.random() * (6))];  
     msg.reply(randomPick);
  });
};