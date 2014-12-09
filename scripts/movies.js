// Description:
//   This will look up three upcoming movies
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot movies - It will look up three movies
//
// Author:
//  Jordan Wilson

var request = require('request');
var key = process.env.NYTMOVIE_APIKEY;
function getMovies(msg){

    // a variable to hold the api url
    apiURL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=' + key;
    // API request
    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode < 300){
                //parse the json
                var json = JSON.parse(response.body);
                
                for(i=0; i < 3; i++){
                	var movies = "Title: "+ json.results[i].display_title +", Rating: "+ json.results[i].mpaa_rating +", Critic Pick: "+json.results[i].critics_pick+", Opening Date: "+ json.results[i].opening_date +"\nMore Info: "+ json.results[i].link.url+"\n\n";
                	msg.send(movies);
                }
                
        }else{
            //sends an error message if something goes wrong
            msg.send("We are having some technical difficulties server side...");
        } 
    });

}

//Listens for the movies string and executes the function
module.exports = function(robot) {
  return robot.respond(/movies$/i, function(msg) {
 	 getMovies(msg);
  });
}