// Description:
//   Gets the top three news stories from the New York Times
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot whats happening? - Gets the top three news stories from the New York Times.
//
// Author:
//  Todd Stark II (tstark2)

//set up a variable to hold request
var request = require('request');

module.exports = function (robot) {
    
    //the URL to the New York Time's top stories API and an API Key
    var API_URL = 'http://api.nytimes.com/svc/topstories/v1/home.json?api-key=73a924b7fa0e7e557d69ba0956ed8537:17:72160806';
    
    //Hubot will respond to 'hubot whats happening?
    robot.respond(/whats happening?/i, function (msg) {
        
        //Make hubot respond as soon as the command is issued, so the user knows he is doing something
        msg.send("Hold on, let me find the newspaper...");
        
        //make the AJAX request
        request(API_URL, function (error, response, body) {
            
            //If there are no errors and the server responds with a code less than 300
            if (!error && response.statusCode < 300) {
                
                //assign the results to the stories array
                var stories = JSON.parse(response.body);
                
                //get the first three stories and display them
                for (i = 0; i < 3; i++) {
                    var link = stories.results[i].url;
                    var title = stories.results[i].title;
                    msg.send(title + ' -- ' + link);
                }
                
                //if we encounter an error
            } else {
                msg.send("I couldn't find the paper");
            }
        });
                

    });
}