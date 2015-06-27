# Description
# Do you believe your own hype?
#
# Author
# Erick Sitter

module.exports = (robot) ->
  	robot.hear /do you believe your own hype?/i, (msg) ->
      msg.send "I am the hype!!"

    robot.respond /open the pod bay doors/i, (res) ->
    # your code here