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
//   Hubot gas station <name>
//
// Author:
//   Arturo Alquicira

var request = require('request');


function gasStations(msg){
  var inputName = msg.match[1]; // grab the value
  var url = 'http://devapi.mygasfeed.com/stations/brands/rfej9napna.json?'; // url that connects the list of gas station
  // msg.send(inputName);

// function to find the list of gas stations
  request(url, function (error, response, body) {

  // Parse the json
  var json = JSON.parse(body);
  var stations = json.stations;
  var totalErrors = 0;
      // loop through the list of gas stations
      for(var i=0, arr=stations.length; i<arr; i++){
        var station_name = stations[i].name; // grab the name
        var station_id = stations[i].id; // grab the id



        // conditional to match the Gas Station Name that the user typed with the gas station list
        if(station_name.toLowerCase()===inputName.toLowerCase()){
          // msg.send('ok!');
          var url2 = "http://devapi.mygasfeed.com/stations/details/"+station_id+"/rfej9napna.json?" // if it matches then concatinate with the API url for the details of the gas station
          // msg.send(url2);

          // function to find the details and prices of the gas station selected
          request(url2, function (error, response, body) {
            // Parse the json
            var json2 = JSON.parse(body);
            var details = json2.details;

            var regular = details.reg_price;
            var mid = details.mid_price;
            var premium = details.pre_price;


            msg.send(inputName+" prices: "+"Regular: $"+regular+", "+"Medium: $"+mid+", "+"Premium: $"+premium);
          });

        }else{
          //  msg.send("No gas station found!");
          totalErrors++;
        }


      }//for loop closing


      if(totalErrors >= stations.length){
        msg.send("No gas station found!");
      }

  });


};//function close

module.exports = function(robot) {
  return robot.respond(/gas station (.*)/i, function(msg) {
    gasStations(msg);
  });
}
