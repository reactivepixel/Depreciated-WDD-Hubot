// Description:
//   Gives you a dish to eat if ya feel like it
//
// Dependencies:
//   var request = require('request');
//   YUMMLY_API_KEY
//   YUMMLY_APP_ID
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
var API_KEY= process.env.YUMMLY_API_KEY
var APP_ID= process.env.YUMMLY_APP_ID


function food(msg){
  var randomINT = Math.floor((Math.random() * 200000) + 1);//random int for recepie array.
  var apiURL = 'http://api.yummly.com/v1/api/recipes?_app_id='+APP_ID+'&_app_key='+API_KEY+'&q=""&maxResult=1&start=' + randomINT; // API conection
  
  request(apiURL, function (error, response, body){
    if (!error && response.statusCode < 300){
      var food = JSON.parse(body); //JSON parsing for the food object.
      msg.send(food.matches[0].recipeName); //This is the return for the food function.
      
      var readById = 'http://api.yummly.com/v1/api/recipe/'+food.matches[0].id+'?_app_id='+APP_ID+'&_app_key='+API_KEY; //API url for additional information.
      
      request(readById, function (error, response, body){
        var recipesID = JSON.parse(body);// this reads the additionl content for the recepie
        msg.send(recipesID.source.sourceRecipeUrl);// this will give the sours material for the recepie
      });

    }else{
      msg.send("API is down");
    }
  });
};


// Listens for the dinner bell (food function)
module.exports = function(robot) {
  return robot.respond(/whats for dinner$/i, function (msg) {
    food(msg);
  });
};

