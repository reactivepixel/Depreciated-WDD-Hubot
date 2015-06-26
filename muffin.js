# Description:
#   Hubot muffin_button
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   None. Robot listens to other chat messages.
#
# Author:
#   Erick Sitter


muffins = (msg) ->
  keyword = msg
  msg.send "Did somebody say...Muffin Button?!" + "https://www.youtube.com/watch?v=xpIeqU0OiAU"  if keyword

# now where is that button that makes blueberry muffins? 
module.exports = (robot) ->
  # listen for keyword
  robot.hear /\b(muffin_button)\b/i, (msg) ->
    # if exists, call function
    muffins msg
