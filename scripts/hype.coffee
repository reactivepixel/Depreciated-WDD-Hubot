# Description
# Do you believe your own hype?
#
# Author
# Erick Sitter

module.exports = (robot) ->
  	# I want to believe
  	robot.respond /do you believe your own hype?/i, (msg) ->
  		msg.send "I am the HYPE!!"
  	robot.hear /(.*) am the hype/i, (msg) ->
  		hype = msg.match[1]
  		if hype is "I"
  		  msg.reply "I am the HYPE!!"
  		else 
  			msg.reply "Somebody, somewhere is the HYPE!!"