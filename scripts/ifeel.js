// Description:
//   Gives you stuff or places to go to depending on whether your hungry or bored.
//   (Note these are only intendend for the Full Sail area.)
//
// Dependencies:
//   request
//   GOOGLE_API_KEY
//
// Configuration:
//   None
//
// Commands:
//   Hubot I feel <hungry> - Enter hungry to get restaurants.
//   Hubot I feel <bored> -  Enter bored to find places of entertainment.
//
// Author:
//   Julian Rodriguez
//

//Dependencies for url load.
var request = require('request');
var API_KEY= process.env.GOOGLE_API_KEY;

var lon = '-81.3055'; // longitude // These are currently
var lat = '28.6079'; // latitude  //  for the Orlando area speciflicly Full Sail Area.


function ifeel(msg){
  var keyWord = msg.match[1];
  
  if (keyWord == 'hungry' || keyWord == 'bored'){

        if (keyWord === 'hungry'){          
          var newKeyWord = 'restaurant';    /// This will filter proper commands
        }else if(keyWord === 'bored'){      /// to be passed into the new key word variable.
          var newKeyWord = 'entertainment'; 
        };

        var apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lon+'&radius=17000&keyword='+newKeyWord+'&key='+API_KEY; // This is the api url that will be loaded to get places to go to.
        
        request(apiURL, function (error, response, body){
          
          if (!error && response.statusCode < 300){
            var json = JSON.parse(body)
            var matches = json.results; // This will hold the entire JSON object to be drilled into later.
            var number = matches.length;// This will count its length for the random number generator
            
            if (number > 0){
              var randomINT = Math.floor(Math.random() * (number - 0 + 1)) + 0;//random int for matches array.        
              msg.send(matches[randomINT].name);    // This will give the name of the location.
              msg.send(matches[randomINT].vicinity);// This will give the address of the given location           
            
            }else{
              msg.send("Got Nothing..."); //This will let the user know if the Google Places API came back with nothing.
            }; 
          
          }else{
            msg.send("API is down. API is:"); //This will let the user know if the API down and let them know where the call is coming from.
            msg.send("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lon+'&radius=17000&keyword='+newKeyWord+'&key='+API_KEY");
          };
        
        });
      
  }else{
    msg.send('Say Wha? Are you feeling hungry or bored?'); // This will let users know if anything is wrong 
  }

};


// Listens for the dinner bell (food function)
module.exports = function(robot) {
  return robot.respond(/I feel (.*)/i, function (msg) {
    ifeel(msg);
  });
};

