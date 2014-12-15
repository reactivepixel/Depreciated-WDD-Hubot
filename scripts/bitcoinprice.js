// Description:
// This script will query the Coin Desk API to retrieve the latest bitcoin rate and present it to the user based on a input for the desired currency type.
//
// Dependencies:
// Request
//
// Configuration:
// None
//
// Commands:
// Hubot show bitcoin in <currencyType> - Runs the script based on a currency type. Use "USD", "GBP" or "EUR".
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


        // Verify if the user selected a correct currency
        if( currencyType == "usd"){

          // If US Dollar...
          msg.send( "The current rate for a bitcoin, in " + json.bpi.USD.description + ", is " + json.bpi.USD.rate + " dollars per bitcoin.");

        }else if(currencyType == "gbp"){

          // If English Pound...
          msg.send( "The current rate for a bitcoin, in " + json.bpi.GBP.description + ", is " + json.bpi.GBP.rate + " pounds per bitcoin.");

        }else if(currencyType == "eur"){

          // If Euro Dollar...
          msg.send( "The current rate for a bitcoin, in " + json.bpi.EUR.description + ", is " + json.bpi.EUR.rate + " euros per bitcoin.");

        }else{
          // *** Incorrect User Input ***

          // The string did not match any currency types.
          msg.send( 'I did not understand. Please try again.' );
          msg.send( 'Please ask for USD, GBP or EUR. For example: "hubot show bitcoin in USD"' );
          return; // If incorrect submission, terminate the process.

        }// ...Succesfully printed the message in the correct currency format...

        // Finally... Send a message to the user of when the data was updated.
        msg.send( "This data was last updated on "+json.time.updateduk );

      } else {
        // *** The api is not responding ***

        // Failed to load the Coin Desk API.
        msg.send( "The api that powers this script is currently down. Please verify http://www.coindesk.com for more information." );

      }

    } ); // ...End of HTTP request method

  } else {
    // *** Submission IS NOT a string ***

    // Incorrect input type.
    msg.send( 'I did not understand. Please ask for USD, GBP or EUR. For example: "hubot show bitcoin in USD"' );

  }

}//...end of function.

// Listen to the "show bitcoin in" command and be prepared to receive a user input.
module.exports = function( robot ) {
  return robot.respond( /show bitcoin in (.*)/i, function( msg ) {

    // Run...
    bci(msg);

  } );
}
