// Description:
//   Gives you stuff or places to go to.
//
// Dependencies:
//   var request = require('request');
//   
//   
//
// Configuration:
//   None
//
// Commands:
//   Hubot I feel <hungry>
//   Hubot I feel <bored>
// Author:
//   Julian Rodriguez
//

//Dependencie for url load.
var request = require('request');
var API_KEY= process.env.GOOGLE_API_KEY;
var lon = '-81.3055';
var lat = '28.6079';


function place(msg){
  // var randomINT = Math.floor((Math.random() * 200000) + 1);//random int for recepie array.
  // var geoLocation = 'http://www.telize.com/geoip?callback'; // GEOLOCATE must be changed to accept user input.
  var keyWord = msg.match[1];
  
  if (keyWord == 'hungry' || 'bored'){

    // request(geoLocation, function (error, response, body){ //
    //   if (!error && response.statusCode < 300){ //

        if (keyWord === 'hungry'){
          var newKeyWord = 'restaurant';
        }else if(keyWord === 'bored'){
          var newKeyWord = 'entertainment';
        };
        
        // var place = JSON.parse(body); //JSON parsing for the lon lat object.
        // var lon = place.longitude; //
        // var lat = place.latitude; //

        var apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lon+'&radius=17000&keyword='+newKeyWord+'&key='+API_KEY;
        
        msg.send(newKeyWord);
        request(apiURL, function (error, response, body){
          if (!error && response.statusCode < 300){
            json = JSON.parse(body)
            var matches = json.results;
            var number = matches.length;
            if (number > 0){
              var randomINT = Math.floor(Math.random() * (number - 0 + 1)) + 0;//random int for recepie array.        
              msg.send(matches[randomINT].name);
              msg.send(matches[randomINT].vicinity);
            }else{
              msg.send("Got Nothing...");
            }; 
          }else{
            msg.send("API is down. API is:");
            msg.send("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.6079,-81.3055&radius=17000&keyword='+newKeyWord+'&key='");
          };
        });
      
    //   }else{ //
    //     msg.send('API IS DOWN'); 
    //   };
    // }); //

  }else{
    msg.send('Say Wha?'); 
  }
};


// Listens for the dinner bell (food function)
module.exports = function(robot) {
  return robot.respond(/I feel (.*)/i, function (msg) {
    place(msg);
  });
};

