# Description:
#   Displays a GIF of Game of Thrones from Giphy
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot gameofthrones - Responds with a GoT animate gif when the command executes.
#
# Author:
#   James Lavender

# Here is my Game of Thrones animated gifs array where it will pull them.
got = [
  "http://media.giphy.com/media/92Rpqh9uInaQU/giphy.gif",
  "http://media.giphy.com/media/BqMiA8wmhdlMA/giphy.gif",
  "http://media.giphy.com/media/12BF3a1O9T6BhK/giphy.gif",
  "http://media.giphy.com/media/ESTkKpEPVG4aA/giphy.gif",
  "http://media.giphy.com/media/112YlbxHDV9PDq/giphy.gif",
  "http://media.giphy.com/media/R086e9cznXaBG/giphy.gif",
  "http://media.giphy.com/media/UVulik2q9PUg8/giphy.gif",
  "http://media.giphy.com/media/vsfA2ZTLWIMDK/giphy.gif",
  "http://media.giphy.com/media/6UWZ61yysjnjy/giphy.gif",
  "http://media0.giphy.com/media/FxgWqClxCPj3i/giphy.gif",
  "http://media1.giphy.com/media/12Lh7AgILubooE/giphy.gif",
  "http://media.giphy.com/media/aElaSYWFFm5vG/giphy.gif",
  "http://media.giphy.com/media/c1YmiTMqEtVhC/giphy.gif",
  "http://media.giphy.com/media/zkD5vR7koCCCA/giphy.gif",
  "http://media.giphy.com/media/JIVEA84meYiyY/giphy.gif",
  "http://media.giphy.com/media/jER5YdPXRltoQ/giphy.gif",
  "http://media.giphy.com/media/dfnh4VFjc2O4M/giphy.gif",
  "http://media.giphy.com/media/qCFydvSJGWHpm/giphy.gif",
  "http://media.giphy.com/media/uiIgyJD78OduU/giphy.gif",
  "http://media.giphy.com/media/gXYrhJswusIZa/giphy.gif",
  "http://media.giphy.com/media/me6J07vP9rEs0/giphy.gif",
  "http://media.giphy.com/media/ua7dKwkIEyqaY/giphy.gif",
  "http://media.giphy.com/media/OWGAu4pSii6fS/giphy.gif",
  "http://media.giphy.com/media/taHRHjZYZx2ko/giphy.gif"]

module.exports = (robot)->
  # robot.hear looks for "gameofthrones" to post a gif from the array above.
  robot.hear /gameofthrones/i, (message)->
    message.send message.random got
