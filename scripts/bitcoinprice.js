// Description:
// This script will query the Coin Desk API to retrieve the latest bitcoin rate and present it to the user based on an input for the desired currency type.
//
// Dependencies:
// Request
//
// Configuration:
// None
//
// Commands:
// Hubot show bitcoin in <currencyType> - This command will show the users the currenct going rate for a bitcoin. The user specifies which currency they want the rate to appear in.
//
// Author:
// Antonio J. Figueroa

// Initialize a variable for the Request object.
var request = require( 'request' );

// Function to get the latest bitcoin rate.
function bci( msg ) {

  // Read the user input.
  var userInput = msg.match[ 1 ];
  var currencyType = userInput.toLowerCase();

  // Verify if submission is a string.
  if ( typeof currencyType === "string" ) {
    // *** Submission IS a string ***

    // Setup the url for the Coin Desk API.
    url = "http://api.coindesk.com/v1/bpi/currentprice.json";

    // Initiate the request
    request( url, function ( error, response, body ) {

      // Verify if there's a succesfull conection.
      if ( !error && response.statusCode < 300 ) {
        // *** Connection Successful ***

        // Parse the incoming json.
        var json = JSON.parse( response.body );

        // Prepare the message that will be sent to the user.
        var firstStr = "The current rate for a bitcoin, in ";
        var secondStr = ", is ";
        var thirdStr = "per bitcoin.";

        var updateMsg = "This data was last updated on " + json.time.updateduk + ".";
        var apiErrorMsg = "The api that powers this script is currently down. Please verify http://www.coindesk.com for more information.";

        var desc;
        var rate;
        var message;
        switch(currencyType){

          case "usd":

            // If US Dollar...
            desc = json.bpi.USD.description;
            rate = json.bpi.USD.rate;
            currencyType = "US Dollar";
            message = firstStr + desc + secondStr + rate + " " + currencyType +" " + thirdStr;
            break;

          case "gbp":

            // If English Pound...
            desc = json.bpi.GBP.description;
            rate = json.bpi.GBP.rate;
            currencyType = "British Pound Sterling";
            message = firstStr + desc + secondStr + rate + " " + currencyType +" " + thirdStr;
            break;

          case "eur":

            // If Euro...
            desc = json.bpi.EUR.description;
            rate = json.bpi.EUR.rate;
            currencyType = "euros";
            message = firstStr + desc + secondStr + rate + " " + currencyType +" " + thirdStr;
            break;

          default:
            // *** Incorrect User Input ***

            // The string did not match any currency types.
            var message = 'I did not understand. Please try again. Please ask for USD, GBP or EUR. For example: "hubot show bitcoin in USD".';
            break; // If incorrect submission, terminate the process.

        }// ...Succesfully printed the message in the correct currency format.

        msg.send( message );
        msg.send( updateMsg );

      } else {
        // *** The api is not responding ***

        // Failed to load the Coin Desk API.
        msg.send( apiErrorMsg );

      }

    } ); // ...End of HTTP request method

  } else {
    // *** Submission IS NOT a string ***

    // Incorrect input type.
    msg.send( 'I did not understand. Please try again.' );
    msg.send( 'Please ask for USD, GBP or EUR. For example: "hubot show bitcoin in USD".' );
  }

}//...end of function.

// Listen to the "show bitcoin in" command and be prepared to receive a user input.
module.exports = function( robot ) {
  return robot.respond( /show bitcoin in (.*)/i, function( msg ) {

    // Run...
    bci(msg);

  } );
}
