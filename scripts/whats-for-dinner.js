// Description:
//   Gives you a dish to eat if ya feel like it
//
// Dependencies:
//   var request = require('request');
//
// Configuration:
//   None
//
// Commands:
//   Hubot whats-for-dinner?
//
// Author:
//   Julian Rodriguez
//

//Dependencie for url load.
var request = require('request');


function food(msg){
  var randomINT = Math.floor((Math.random() * 200000) + 1);
  var apiURL = 'http://api.yummly.com/v1/api/recipes?_app_id=2f555d00&_app_key=3a78da9d272c848b3d6dd9665b9a35f7&q=""&maxResult=1&start=' + randomINT; // API conection
  
  request(apiURL, function (error, response, body){
    if (!error && response.statusCode < 300){
      var food = JSON.parse(body); //JSON parsing for the food object.
      msg.send(food.matches[0].recipeName); //This is the return for the food function.
      
      var readById = "http://api.yummly.com/v1/api/recipe/"+food.matches[0].id+"?_app_id=2f555d00&_app_key=3a78da9d272c848b3d6dd9665b9a35f7"; //API url for additional information.
      
      request(readById, function (error, response, body){
        var recipesID = JSON.parse(body);
        msg.send(recipesID.source.sourceRecipeUrl);
      });

    }else{
      msg.send("API is down");
    }
  });
};


// Listens for the dinner bell (food function)
module.exports = function(robot) {
  return robot.respond(/whats-for-dinner?/i, function (msg) {
    food(msg);
  });
};

