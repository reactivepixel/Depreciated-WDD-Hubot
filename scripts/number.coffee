# Description:
# Hubot provides facts about numbers and years
#
# Dependencies:
# None
#
# Configuration:
# MASHAPE_API
#
# Commands:
# hubot number <number> -- Gives you a fact about the number you entered
# hubot number random -- Gives you a fact about a random number
# hubot year <year> -- Gives you a fact about the year you entered
# hubot year random -- Gives you a fact about a random year
#
# Author:
# Jose Lupianez

module.exports = (robot) ->
  #Number facts
  #Waits for messages directed to hubot that contains number <number>.
  robot.respond /number (.*)/i, (msg) ->
    mashKey = process.env.MASHAPE_API
    #Sets text to msg and replaces empty spaces from front and end of text.
    number = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if text is now empty.
    if number.length == 0
      #If text is now empty, let the user know that the entered number is invalid.
      msg.send "You need to enter a valid number!"
    else
      #Check if user entered random for number.
      if number == "random"
        #If equal to random then set url to random number
        url = "https://numbersapi.p.mashape.com/random/math?fragment=true&json=true&max=20"
      else
        #If not equal to random then set url to contain entered number
        url = "https://numbersapi.p.mashape.com/#{number}/math?fragment=true&json=true"
      #Changes headers to contain API key.
      msg.http(url)
        .headers("X-Mashape-Key" : "#{mashKey}")
        #Get content
        .get() (err, res, body) ->
          try
            #Set numberFact to body
            numberFact = JSON.parse(body)
            #Display number fact.
            if numberFact.found == false
              #If no fact is found, let the user know
              msg.send "I don't know any fact for the number #{numberFact.number} yet."
            else
              #Display the number's fact
              msg.send "#{numberFact.number} is #{numberFact.text}."
          catch error
            #Let the user know there was an error found.
            msg.send "That is not a valid number, please enter a valid number."

  #Year Facts
  #Waits for messages directed to hubot that contains year <year>.
  robot.respond /year (.*)/i, (msg) ->
    mashKey = process.env.MASHAPE_API
    #Sets text to msg and replaces empty spaces from front and end of text.
    year = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if text is now empty.
    if year.length == 0
      #If text is now empty, let the user know that the entered number is invalid.
      msg.send "You need to enter a valid year!"
    else
      #Check if user entered random for year
      if year == "random"
        #If equal to random then set url to random year
        url = "https://numbersapi.p.mashape.com/random/year?fragment=true&json=true"
      else
        #If not equal to random then set url to contain entered year
        url = "https://numbersapi.p.mashape.com/#{year}/year?fragment=true&json=true"
      #If not empty, sets url with text.
      msg.http(url)
        #Changes headers to contain API key.
        .headers("X-Mashape-Key" : "#{mashKey}")
        #Get content
        .get() (err, res, body) ->
          try
            #Set yearFact to body
            yearFact = JSON.parse(body)
            #Display year fact.
            if yearFact.found == false
              #If no fact found then let the user know we have no fact
              msg.send "I don't know any fact for the year #{numberFact.number} yet."
            else
              #Display a fact of that year
              msg.send "On year #{yearFact.number} #{yearFact.text}."
          catch error
            #Let the user know there was an error found.
            msg.send "That is not a valid year (maybe when we run out of numbers), please enter a valid year."
