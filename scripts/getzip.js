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

var request = require('request');

function getZipDetails(){
    var inputValue = msg.match[1]; // Gets input value
    //Checks that the input value is an integer and is the correct length
    if(isInt(inputValue) && inputValue.length == 4){
        //Assigns API URL from Ziptastic
        var api = "http://ZiptasticAPI.com/" + inputValue;
        //Request API
        request(api, function (error, response, body) {

                // This checks to ensure the JSON response is not an error
                if (!error && response.statusCode < 300) {

                    // Parse the JSON
                    var result = JSON.parse(response.body);

                    //Output of the ZipCode Details through JSON
                    if (!json.response.error) {
                        msg.send("The information for " + inputValue + " is in the " + result.country + "in the city of " + json.city + " in the state of " + json.state + ".")
                    }//In case of error, please run this script
                    else{
                        //Assigns the JSON response error to a variable to be output
                        var responseError = json.response.error.description;
                        //Returns the error to the user
                        msg.send(responseError);
                    }
                }else{
                    //If the API is idle or has no response
                    msg.send("There was an error in your request. Please check that all the information is correct and/or try again.");
                }
            }
        )
    }else{
        msg.send("The data you entered doesn't match the criteria for a zip code. Please check and try again.")
    }
}
//Hubot interface
module.exports = function(robot) {
    return robot.respond(/find zip (.*)/i, function(msg) {
        //Calls to getZipDetails
        getZipDetails(msg);
    });
};
