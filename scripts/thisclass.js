# Description:
#   Explaining the class, program, and school.
#
# Commands:
#   hubot dwpclass - Explaining the class, program, and school.

module.exports = (robot) ->
  robot.respond /dwpclass/i, (msg) ->
    msg.send "This is the Deployment of Web Applications for the Web Design and Development program at Full Sail University."