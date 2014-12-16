# Description:
# Hubot gets the information of a book using the ISBN
#
# Dependencies:
# None
#
# Configuration:
# None
#
# Commands:
# hubot isbn <isbn code> -- Will get book information using ISBN code.
#
# Author:
# Jose Lupianez

module.exports = (robot) ->
  #Waits for messages directed to hubot that contain isbn <isbn code>.
  robot.respond /isbn (.*)/i, (msg) ->
    #Sets isbnCode to the submitted ISBN code and removes blank spaces it.
    isbnCode = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if isbnCode is now empty.
    if isbnCode.length == 0
      #If empty, lets the user know that the entered ISBN is incorrect.
      msg.send "No ISBN was entered, please enter an ISBN and try again."
    else
      #If not empty, sets url with ISBN.
      msg.http("https://www.googleapis.com/books/v1/volumes?q=isbn:#{isbnCode}")
        .get() (err, res, body) ->
          try
            #Parse JSON into book variable.
            book = JSON.parse(body)
            #Send book information.
            msg.send "#{book.items[0].volumeInfo.title}"
            msg.send "#{book.items[0].volumeInfo.imageLinks.thumbnail}#.png"
            msg.send "#{book.items[0].volumeInfo.description}"
            msg.send "Author: #{book.items[0].volumeInfo.authors[0]}"
            msg.send "More at: #{book.items[0].volumeInfo.canonicalVolumeLink}"
          catch error
            #If an error is found, let the user know.
            msg.send "I couldn't find any book with that ISBN. Please check if the ISBN is correct and try again."
