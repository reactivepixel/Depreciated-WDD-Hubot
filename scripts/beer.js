// Description:
//   This will look up the beer of the day
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot beer - It will look the beer of the day
//
// Author:
//  Jordan Wilson

var request = require('request');
//var key = process.env.NYTMOVIE_APIKEY;
function getMovies(msg){

    // a variable to hold the api url
    apiURL = 'http://api.brewerydb.com/v2/beer/random?key=b41432eb842b38fa923f79f588a2c74c';
    // API request
    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode < 300){
                //parse the json
                var json = JSON.parse(response.body);
                
                var beer = "Beer Name: "+json.data.name +"\n\n"+"Style: "+json.data.style.category.name+"\n\n"+"Description: "+json.data.style.description;
                
                msg.send(beer);
                
        }else{
            //sends an error message if something goes wrong
            msg.send("We are having some technical difficulties server side...");
        } 
    });

}

//Listens for the movies string and executes the function
module.exports = function(robot) {
  return robot.respond(/beer$/i, function(msg) {
 	 getMovies(msg);
  });
}