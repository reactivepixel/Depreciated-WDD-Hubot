# Description:
# Hubot gets the information of a book using the provided ISBN.
#
# Dependencies:
# None
#
# Configuration:
# BOOKS_API
#
# Commands:
# hubot isbn <isbn code> -- Will get book information using ISBN code.
#
# Author:
# Jose Lupianez

module.exports = (robot) ->
  #Waits for messages directed to hubot that contain isbn <isbn code>.
  robot.respond /isbn (.*)/i, (msg) ->
    bookKey = process.env.BOOKS_API
    #Sets isbnCode to the submitted ISBN code and removes blank spaces it.
    isbnCode = msg.match[1].replace /^\s+|\s+$/g, ""
    #Checks if isbnCode is now empty.
    if isbnCode.length == 0
      #If empty, lets the user know that the entered ISBN is incorrect.
      msg.send "No ISBN was entered, please enter an ISBN and try again."
    else
      #If not empty, sets url with ISBN.
      msg.http("https://www.googleapis.com/books/v1/volumes?q=isbn:#{isbnCode}&key=#{bookKey}")
        .get() (err, res, body) ->
          try
            #Parse JSON into book variable.
            book = JSON.parse(body)
            #Set book information.
            info = [
              "#{book.items[0].volumeInfo.title}",
              "#{book.items[0].volumeInfo.imageLinks.thumbnail}#.png",
              "#{book.items[0].volumeInfo.description}",
              "Author: #{book.items[0].volumeInfo.authors[0]}",
              "More at: #{book.items[0].volumeInfo.canonicalVolumeLink}"
            ]
            infoArrayIndex = 0
            #While array index is less than the info array.
            while infoArrayIndex < info.length
              ((infoArrayIndex) ->
                setTimeout (->
                  #Send selected info
                  msg.send info[infoArrayIndex]
                  return
                ), 50 * infoArrayIndex
                return
              ) infoArrayIndex
              infoArrayIndex++
          catch error
            #If an error is found, let the user know.
            msg.send "I couldn't find any book with that ISBN. Please check if the ISBN is correct and try again."
