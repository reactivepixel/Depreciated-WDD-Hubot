// Description:
//   Hubot tells you how much worth $1 USD Dollar vs differents currencies.
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

var request = require('request');


// Function to find the value of a currency.
function currencyVal(msg){

  var input = msg.match[1];
  var code = input.toLowerCase(); //grab de code
  var currency = msg.match[1].trim(); //trim the code to get the length
  var url = 'http://currency-api.appspot.com/api/usd/'+code+'.json?key=6aab585c1cf938938e7388b31db56a9b0fadf00e' // concatinate the code into the API url

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
              resStart = "$1 dollar worth $" + amount; // Holly Springsteen - use variable for beginning of response

          // conditional to check asign the value a name
          if(code==="mxn"){
            msg.send(resStart + " Mexican Pesos");
          }else if(code==="aud"){
            msg.send(resStart + " Australian Dollar");
          }else if(code==="cad"){
              msg.send(resStart + " Canadian Dollar");
          }else if(code==="chf"){
            msg.send(resStart + " Swiss Franc");
          }else if(code==="dkk"){
            msg.send(resStart + " Danish Krone Dollar");
          }else if(code==="eur"){
            msg.send(resStart + " Euro");
          }else if(code==="gbp"){
            msg.send(resStart + " Pound Sterling ");
          }else if(code==="hkd"){
            msg.send(resStart + " Hong Kong Dollar");
          }else if(code==="jpy"){
            msg.send(resStart + " Japanese Yen");
          }else if(code==="nzd"){
            msg.send(resStart + " New Zealand Dollar");
          }else if(code==="php"){
            msg.send(resStart + " Philippine Dollar");
          }else if(code==="sek"){
            msg.send(resStart + " Swedish Krona");
          }else if(code==="sgd"){
            msg.send(resStart + " Singapore Dollar");
          }else if(code==="thb"){
            msg.send(resStart + " Thailand Baht");
          }else if(code==="zar"){
            msg.send(resStart + " South Africa Rand");
          }else{ // Currency was not found.
            msg.send("Sorry, this currency has not been found.");
          }

        }else{ // Currency was not found.
            msg.send("Sorry, this currency has not been found.");
          }
        }

  )};
}

// Listens for the exact match of "areacode" and calls areaCode function.
module.exports = function(robot) {
  return robot.respond(/currency (.*)/i, function(msg) {
    currencyVal(msg);
  });
}
