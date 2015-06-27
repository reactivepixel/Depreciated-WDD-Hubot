# Description
# Do you believe your own hype?
#
# Author
# Erick Sitter

module.exports = (robot) ->
  	# I want to believe
  	robot.hear /do you believe your own hype?/i, (msg) ->
  		msg.send "I am the HYPE!!"
  	
  	robot.hear /(.*) am the hype!/i, (res) ->
    doorType = res.match[1]
    if doorType is "I"
      res.reply "I am the hype!!"
    else
      res.reply "somebody, somewhere is the hype!!"