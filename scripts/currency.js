// Description:
//   Converts $1 USD to various currencies.
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot currency <currency> -  Converts $1 USD to various currencies (aud, cad, chf, dkk, eur, gbp, hkd, jpy, mxn, nzd, php, sek, sgd, thb, zar)
//
// Author:
//   Arturo Alquicira
//
// Contributor:
//  Holly Springsteen
//  hhspringsteen@gmail.com

var request = require('request');


// Function to find the value of a currency.
function currencyVal(msg){

  var input = msg.match[1],
      code = input.toLowerCase(), //grab the code
      currency = msg.match[1].trim(), //trim the match
      url = 'http://currency-api.appspot.com/api/usd/'+code+'.json?key=6aab585c1cf938938e7388b31db56a9b0fadf00e'; // concatenate the code into the API url

// conditional to check the user only type three letters
  if(!isNaN(currency)){ // if it's not a number
    msg.send('Please only enter letters!');
  }else if(currency.match(/\d/)){ // if it's only letters
    msg.send('Please only enter letters!');
  }else if(currency.length !==3){ // if it's only three characters
    msg.send('Maximum 3 characters!');
  }else{
    request(url, function (error, response, body) {
        // Conditional to make sure the connection went successfully through.
        if (!error && response.statusCode < 300){
          // Parse the json
          var json = JSON.parse(body),
              amount = json.amount,
              resStart = "$1 dollar worth $" + amount; // Holly Springsteen - variable cleanup and use variable for repetitive msg

          //Switch statement to check assign the value a name

          switch (code) {
              case "mxn":
                msg.send(resStart + " Mexican Pesos");
                break;

              case "aud":
                msg.send(resStart + " Australian Dollar");
                break;

              case "cad":
                msg.send(resStart + " Canadian Dollar");
                break;

              case "chf":
                msg.send(resStart + " Swiss Franc");
                break;

              case "dkk":
                msg.send(resStart + " Danish Krone Dollar");
                break;

              case "eur":
                msg.send(resStart + " Euro");
                break;

              case "gbp":
                msg.send(resStart + " Pound Sterling ");
                break;

              case "hkd":
                msg.send(resStart + " Hong Kong Dollar");
                break;

              case "jpy":
                msg.send(resStart + " Japanese Yen");
                break;

              case "nzd":
                msg.send(resStart + " New Zealand Dollar");
                break;

              case "php":
                msg.send(resStart + " Philippine Dollar");
                break;

              case "sek":
                msg.send(resStart + " Swedish Krona");
                break;

              case "sgd":
                msg.send(resStart + " Singapore Dollar");
                break;

              case "thb":
                msg.send(resStart + " Thailand Baht");
                break;

              case "zar":
                msg.send(resStart + " South Africa Rand");
                break;

              default:
                msg.send("Sorry, this currency has not been found.");

              };



        }else{ // Currency was not found.
            msg.send("Sorry, this currency has not been found.");
          };
        }

  )};
};

// Listens for value entered and calls currencyVal function.
module.exports = function(robot) {
  return robot.respond(/currency (.*)/i, function(msg) {
    currencyVal(msg);
  });
};
