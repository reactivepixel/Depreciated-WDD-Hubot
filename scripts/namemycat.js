//Description:
// Ask hubot to give your cat a new name.
//
//Dependencies:
// Request
//
//Commands:
// Hubot name my cat - Returns a randomly generated name for your cat!
//
//Author
// Richard Mipana

var request = require('request');

function getName(msg){
    //This variable holds the api URL
    api = 'http://api.uinames.com/?country=united%20states';
     //Request to API
    request(api, function (error, response, body) {
        if (!error && response.statusCode < 300){
      		//Parse the JSON data
            var json = JSON.parse(response.body);
            //Store the name from the returned JSON in a variable
            var result = json.name;
            //Output message by hubot
            msg.send("From here on out, your cat's name is " + result);
 
        }else{
        	//error if something is went wrong
            msg.send("I'm having a brain fart, ask me again later.");
        } 
    });
}
//Hubot listens for "name my cat"
module.exports = function(robot) {
  return robot.respond(/.*(name my cat).*/i, function(msg) {
 	 getName(msg);
  });
}