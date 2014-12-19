# Description:
# Hubot gives the current status of a website
#
# Dependencies:
# None
#
# Configuration:
# MASHAPE_API
#
# Commands:
# hubot isitdown <website> -- Lets you know if a website is currently up or down.
#
# Author:
# Jose Lupianez

module.exports = (robot) ->
  #Waits for messages directed to hubot that contains isitdown <website>.
  robot.respond /isitdown (.*)/i, (msg) ->
    mashKey = process.env.MASHAPE_API
    #Sets text to msg and replaces empty spaces from front and end of text.
    website = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if text is now empty.
    if website.length == 0
      #If text is now empty, let the user know that the entered website is invalid.
      msg.send "You need to enter a valid website!"
    else
      #Set entered website to url.
      msg.http("https://isitup.p.mashape.com/#{website}.json")
        .headers("X-Mashape-Key" : "#{mashKey}")
        #Get content
        .get() (err, res, body) ->
          try
            #Set websiteStatus to body
            websiteStatus = JSON.parse(body)
            #Checks website status.
            if websiteStatus.status_code == 3
              #If website entered is invalid, let the user know
              msg.send "You need to enter a valid website!"
            else if websiteStatus.status_code == 2
              #Let the user know the website is down.
              msg.send "The website #{websiteStatus.domain} is currently DOWN for everyone."
            else
              #Let the user know the website is up
              msg.send "The website #{websiteStatus.domain} is currently UP."
          catch error
            #Let the user know there was an error found.
            msg.send "We are having some technical difficulties server side..."
