# Description
# Do you believe your own hype?
#
# Author
# Erick Sitter

module.exports = (robot) ->
  	# I want to believe
  	robot.hear /do you believe your own hype?/i, (msg) ->
  		msg.send "I am the HYPE!!"
  	
robot.respond /open the (.*) doors/i, (res) ->
    doorType = res.match[1]
    if doorType is "pod bay"
      res.reply "I'm afraid I can't let you do that."
    else
      res.reply "Opening #{doorType} doors"