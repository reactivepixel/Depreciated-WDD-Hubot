// Description:
//   This will look up info based on input of a zip code.
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot Zipcode Search - Searches and returns value based on zip code
//
// Author:
//  John Pace IV

//Dependencies assignment
var request = require('request');

function getZipCode(msg){
    //Gets the input value and assigns from variable
    var zipInput = msg.match[1];
    //Checks that the input value is an integer and is the correct length
    if (isNaN(zipInput) || zipInput.length != 5) {
        //Error message in case of error
        msg.send("The zipcode you entered is invalid. Please try again.");
    }else {
        //Assigns API URL from Ziptastic
        var apiURL = "http://ZiptasticAPI.com/" + zipInput;
        //Request API
        request(apiURL, function (error, response, body) {
            //Conditional to check for errors
            if (!error && response.statusCode < 300){
                // Parse JSON response to be utilized in the echo message.
                var json = JSON.parse(response.body);
                var city = json.city;
                //Checks for any errors
                if(!error){
                    //Gives the user the requested information.
                    msg.send("The information for zipcode " + zipInput + " is the city of " + city + " in the state of " + json.state + " in the " + json.country + ".");
                    //Error response to show what went wrong.
                }else{
                    var errorMsg = json.response.error.description;
                    //Sends error details to the user
                    msg.send(errorMsg);
                }
            }else{
                //If the API is idle or has no response
                msg.send("There was an error access the API. Please try again in a bit...");
            }
        });
    }
}
// Hubot interaction
module.exports = function(robot) {
    //uses the find zip command to retrieve information from the API
    return robot.respond(/find zip (.*)/i, function(msg) {
        //Calls to Zip Code Function
        getZipCode(msg);
    });
};
