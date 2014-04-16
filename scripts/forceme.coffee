#Description:
#  Helps you make desicions

# Dependencies:
#   None

# Configuration:
#   None

# Commands:
#   hubot force me thin1,thin2,thing3 - Receive an answer
module.exports = (robot) ->
  robot.respond /force me (.*)/i, (msg) ->
    data = msg.match[1].trim()
    arr = data.split(",")
    i = 0

    while i < arr.length
      arr.splice i, 1  unless arr[i]
      i++
    num = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0
    str = arr[num]
    if !!str and str isnt "" and typeof str is "string"
      msg.send str
    else
      msg.send "Something doesn't seem right."