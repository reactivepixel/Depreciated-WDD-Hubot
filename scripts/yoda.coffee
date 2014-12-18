# Description:
# Hubot translates a sentence to how Yoda would say it
#
# Dependencies:
# None
#
# Configuration:
# MASHAPE_API
#
# Commands:
# hubot yoda <sentence> -- translates what is typed to how Yoda would say it
#
# Author:
# Jose Lupianez

module.exports = (robot) ->
#Waits for messages directed to hubot that contain yoda <text>.
  robot.respond /yoda (.*)/i, (msg) ->
    mashKey = process.env.MASHAPE_API
    #Sets text to msg and replaces empty spaces from front and end of text.
    text = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if text is now empty.
    if text.length == 0
      #If text is now empty, let the user know that the entered text is invalid.
      msg.send "If sentence you enter not, I, translate it,  cannot!"
    else
      #If not empty, sets url with text.
      msg.http("https://yoda.p.mashape.com/yoda?sentence=#{text}")
        #Changes headers to contain API key and accept JSON.
        .headers("X-Mashape-Key" : "#{mashKey}", Accept: 'application/json')
        #Get content
        .get() (err, res, body) ->
          try
            #Set data to body
            data = body
            #Display translated text.
            msg.send data
          catch error
            #Let the user know there was an error found.
            msg.send "An error, there was."
