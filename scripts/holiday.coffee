# Description:
#   Holiday detector script!
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot is it weekend ?  - returns whether is it weekend or not
#   hubot is it holiday ?  - returns whether is it holiday or not
#
# Author
#   James Lavender

module.exports = (robot) ->
  robot.respond /is it (weekend|holiday)\s?\?/i, (msg) ->
    today = new Date
    msg.reply if today.getDay() == 0 or today.getDay() == 6 then 'Yes it is! :D' else 'No it is not... :('
    return
  return
