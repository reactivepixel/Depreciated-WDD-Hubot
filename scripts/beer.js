// Description:
//   Hubot will tell you the beer of the day! What luck!
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot malt me - It will tell you the beer of the day
//
// Author:
//  Jordan Wilson

var request = require('request');
var key = process.env.BREWERYDB_KEY;
function beerRun(msg){

    // a variable to hold the api url
    var apiURL = 'http://api.brewerydb.com/v2/beer/random?key=' + key;
    // API request
    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode < 300){
                //parse the json
                var json = JSON.parse(response.body);
                // finds a random beer from the api and brings back the name, style and description 
                var beer = "Beer Name: "+json.data.name +"\n\n"+"Style: "+json.data.style.category.name+"\n\n"+"Description: "+json.data.style.description;
                
                msg.send(beer);//displays the random beer 
                
        }else{
            //sends an error message if something goes wrong
            msg.send("We are having some technical difficulties server side...");
        } 
    });

}

//Listens for the movies string and executes the function
module.exports = function(robot) {
  return robot.respond(/malt me$/i, function(msg) {
 	 beerRun(msg);
  });
}