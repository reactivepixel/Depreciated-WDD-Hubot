# Description:
#   Hubot sends a random Chuck Norris fact
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot Chuck me -- random Chuck Norris awesomeness
#   hubot Chuck me <user> -- let's see how <user> would do as Chuck Norris
#
# Author:
#   Seth Healy


module.exports = (robot) ->



  robot.respond /(Chuck me)( me )?(.*)/i, (msg)->
    user = msg.match[3]
    if user.length == 0
      askChuck msg, "http://api.icndb.com/jokes/random"
    else
      askChuck msg, "http://api.icndb.com/jokes/random?firstName="+user

  askChuck = (msg, url) ->
    msg.http(url)
      .get() (err, res, body) ->
        if err
          msg.send "Chuck Norris says: #{err}"
        else
          message_from_chuck = JSON.parse(body)
          if message_from_chuck.length == 0
            msg.send "Achievement unlocked: Chuck Norris is quiet!"
          else
            msg.send message_from_chuck.value.joke.replace /&quot;/g, " "
