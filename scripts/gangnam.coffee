# Description:
#   Causes Psy to dance
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot gangnam - Delivers random gif of Psy dancing
#
# Author:
#   Seth Healy

gifs = [
  "http://www.refinedguy.com/wp-content/uploads/2012/10/gangnam-style-horse-stable-gif.gif","http://media.tumblr.com/e5ae57178254de59bf642b9bbcf1ba44/tumblr_inline_mfbel0ynkj1rn1lln.gif","http://www.businessinsider.com/~~/f?id=506b5a87eab8ea0e16000017","http://gifrific.com/wp-content/uploads/2012/09/PSY-Gangnam-Style-Elevator-Dance.gif","http://www.refinedguy.com/wp-content/uploads/2012/10/gangnam-style-little-boy.gif","http://s258.photobucket.com/user/jimifunguzz/media/gangnam%20style/gangnam-style-psy-cartoon.gif.html","http://shikagoland.files.wordpress.com/2013/04/psy-gangnam-style-gif.gif?w=812"]

module.exports = (robot)->
  robot.hear /gangnam/i, (message)->
    message.send message.random gifs
