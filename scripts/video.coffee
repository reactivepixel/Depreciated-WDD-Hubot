# Description:
#   Hubot comments on various chat posts
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
# Notes:
#   No lint found using http://www.coffeelint.org
#
# Author:
#   Lee Chapoton
#	chapoton@gmail.com


newVid = (msg) ->
  keyword = msg
  msg.send "Did somebody say video? I can't wait to watch it!"  if keyword

# make accessable to robot
module.exports = (robot) ->
  # listen for keyword
  robot.hear /\b(video|youtube)\b/i, (msg) ->
    # if exists, call function
    newVid msg

