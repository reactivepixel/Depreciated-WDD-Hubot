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

function getMovies(msg){

    // a variable to hold the api url
    apiURL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=a74f69a81b55279da5f5ce3ec2f8db04:2:70285909';
    // API request
    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode < 300){
                //parse the json
                var json = JSON.parse(response.body);
                var movie1 = "Title: "+ json.results[0].display_title +", Rating: "+ json.results[0].mpaa_rating +", Critic Pick: "+json.results[0].critics_pick+", Opening Date: "+ json.results[0].opening_date +"\nMore Info: "+ json.results[0].link.url+"\n\n";
                var movie2 = "Title: "+ json.results[1].display_title +", Rating: "+ json.results[1].mpaa_rating +", Critic Pick: "+json.results[1].critics_pick+", Opening Date: "+ json.results[1].opening_date +"\nMore Info: "+ json.results[1].link.url+"\n\n";
                var movie3 = "Title: "+ json.results[2].display_title +", Rating: "+ json.results[2].mpaa_rating +", Critic Pick: "+json.results[2].critics_pick+", Opening Date: "+ json.results[2].opening_date +"\nMore Info: "+ json.results[2].link.url;
                //return the three movies
                
                msg.send(movie1 + movie2 + movie3);
 
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