// Description:
//   Hubot gives you a quote from iheartquotes its set to random so a different quote from each category each time
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot quote - gives you a quote
//
// Author:
//  Lyteia Kitchen
//  lytehighfashion@gmail.com

var request = require('request');

function getQuote(msg){
    //variable to hold api address
    apiURL = 'http://www.iheartquotes.com/api/v1/random.json';
     // Making request to API
    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode < 300){
                //parse json
                var json = JSON.parse(response.body);
                var result = json.quote;
                //return the quote
                msg.send(result);
 
        }else{
            //sends error if something is down
                msg.send("Sorry, the server must be down");
        } 
    });

}//closes function

//Listens for the exact match of quote and calls getQuote function.
module.exports = function(robot) {
  return robot.respond(/quote/i, function(msg) {
 	 getQuote(msg);
  });
}