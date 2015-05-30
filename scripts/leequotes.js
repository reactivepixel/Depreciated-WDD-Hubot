//Description:
//Returns a random Bruce Lee quote
//
//Dependencies:
//none
//
//Commands:
//Hubot drop some Bruce Lee knowledge - Returns a random Bruce Lee quote
//
//Author
//Richard Mipana


//Array of quotes

var quotes;

quotes = [
  "I fear not the man who has practiced 10 000 kicks once, but I fear the man who has practiced one kick 10 000 times.", 
  "A goal is not always meant to be reached, it often serves simply as something to aim at.", 
  "Knowing is not enough; We must apply. Willing is not enough; We must do.", 
  "Mistakes are always forgivable, if one has the courage to admit them.", 
  "Defeat is a state of mind; No one is ever defeated until defeat has been accepted as a reality.", 
  "Those who are unaware they are walking in darkness will never seek the light.", 
  "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.", 
  "To hell with circumstances; I create opportunities.", 
  "Absorb what is useful, discard what is not, add what is uniquely your own.", 
  "Learning is never cumulative, it is a movement of knowing which has no beginning and no end.", 
  "Do not pray for an easy life, pray for the strength to endure a difficult one.", 
  "Empty your mind. Be formless. Shapeless. Like water. You put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put water into a teapot, it becomes the teapot. Water can flow or it can crash. Be water, my friend.",
  "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
  "If you spend too much time thinking about a thing, you'll never get it done. Make at least one definite move daily toward your goal.",
  "The key to immortality is first living a life worth remembering",
  "Use only that which works, and take it from any place",
  "Life is wide, limitless. There is no border, no frontier.",
  "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
  "Be self aware, rather than a repetitious robot.",
  "Art calls for complete mastery of techniques, developed by reflection within the soul.",
  "If you love life, don't waste time, for time is what life is made up of.",
  "Success means doing something sincerely and wholeheartedly.",
  "Remember, success is a journey, not a destination. Have faith in your ability. You will do just fine.",
  "What you habitually think largely determines what you will ultimately become.",
  "Every man today is the result of his thoughts of yesterday.",
  "When I have listened to my mistakes, I have grown.",
  "Be proficient in your field as well as in harmony among fellow men."
  ];

//Simple script that listens for "drop some Bruce Lee knowledge", and returns a random quote from above.
module.exports = function(robot) {
  return robot.hear(/.*(drop some Bruce Lee knowledge).*/i, function (msg) {
    return msg.send(msg.random(quotes) + " ~ Bruce Lee");
  });
};
