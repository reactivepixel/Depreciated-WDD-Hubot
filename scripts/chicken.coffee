#Why did the chicken cross the road
module.exports = (robot) ->

robot.respond /chicken$/i, (msg) ->
msg.send "Why did the chicken cross the road? To get to the other side hahaha"

robot.respond /dog$/i, (msg) ->
msg.send "ruff ruff"

robot.respond /cat$/i, (msg) ->
msg.send "meow meow"
