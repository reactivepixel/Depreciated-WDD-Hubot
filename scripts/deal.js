// Description:
//   Hubot gives you a local deal when you enter your zip code
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot show deal <zipcode> - Enter zipcode, get local deal match
//
// Author:
//  Lyteia Kitchen
//  lytehighfashion@gmail.com

var request = require('request');

function localDeal(msg){
    
  //var for zipcode  
  var zipCode = msg.match[1];
    
	// check if only numbers were entered or zipcode length is less than 5 
	if (isNaN(zipCode) || zipCode.length<5) {
		msg.send("Enter a valid zip code. zip code must be 5 digits only.");    
	} else {
        //variable to hold api address
        apiURL='http://api.8coupons.com/v1/getdeals?key=7831e3775968c4c3066c5164d1264509c9bb82ce0e5c24a6647f9c873cb3f374133c806bd7c76695ba0a1c4d78ffffab&zip='+zipCode+'&mileradius=20&limit=5&orderby=radius';
    
        // Making request to API
		request(apiURL, function (error, response, body) {
            if (!error && response.statusCode < 300){
					// Parse the json
					var json = JSON.parse(body);
                    //check if json had no errors
                    if (json.length==0){ 
                        msg.send("No Deals in your area!!");
                         
                    }else{
                        //if no errors spit out
                        msg.send("Local Deal In Your Area For: " + json[0].dealinfo + 
						"\n From: " + json[0].name + 
						"\n Located at: "+ json[0].address + ", "+json[0].city + ", " +json[0].state+ " " + zipCode); 
                        
                    }   
            }else{
                //sends error if something is down
                msg.send("Sorry, the server must be down");
            }
        });
    }//closes 1st else line 27
}//closes function

// Listens for the exact match of deal and calls localDeal function.
module.exports = function(robot) {
	return robot.respond(/show deal (.*)/i, function(msg) {
		localDeal(msg);
	});
}
