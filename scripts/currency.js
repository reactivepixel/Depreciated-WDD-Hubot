

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
//   Hubot currency <currency> - Only (aud, cad, chf, dkk, eur, gbp, hkd, jpy, mxn, nzd, php, sek, sgd, thb, zar)
//
// Author:
//   Arturo Alquicira

var request = require('request');


// Function to find the value of a currency.
function currencyVal(msg){

  var code = msg.match[1]; //grab de code
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
          var json = JSON.parse(body);
          var amount = json.amount;

          // conditional to check asign the value a name
          if(code==="mxn"){
            msg.send("$1 dollar worth $" + amount + " Mexican Pesos");
          }else if(code==="aud"){
            msg.send("$1 dollar worth $" + amount + " Australian Dollar");
          }else if(code==="cad"){
              msg.send("$1 dollar worth $" + amount + " Canadian Dollar");
          }else if(code==="chf"){
            msg.send("$1 dollar worth $" + amount + " Swiss Franc");
          }else if(code==="dkk"){
            msg.send("$1 dollar worth $" + amount + " Danish Krone Dollar");
          }else if(code==="eur"){
            msg.send("$1 dollar worth $" + amount + " Euro");
          }else if(code==="gbp"){
            msg.send("$1 dollar worth $" + amount + " Pound Sterling ");
          }else if(code==="hkd"){
            msg.send("$1 dollar worth $" + amount + " Hong Kong Dollar");
          }else if(code==="jpy"){
            msg.send("$1 dollar worth $" + amount + " Japanese Yen");
          }else if(code==="nzd"){
            msg.send("$1 dollar worth $" + amount + " New Zealand Dollar");
          }else if(code==="php"){
            msg.send("$1 dollar worth $" + amount + " Philippine Dollar");
          }else if(code==="sek"){
            msg.send("$1 dollar worth $" + amount + " Swedish Krona");
          }else if(code==="sgd"){
            msg.send("$1 dollar worth $" + amount + " Singapore Dollar");
          }else if(code==="thb"){
            msg.send("$1 dollar worth $" + amount + " Thailand Baht");
          }else if(code==="zar"){
            msg.send("$1 dollar worth $" + amount + " South Africa Rand");
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
