// Description:
//   Getting game information
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot get game info <name> -  Returns video game information
//
//
//	Notes:
//
// Author:
//  David Gilliam
//	davygxyz@gmail.com
var request = require('request');
module.exports = function(robot) {
	return robot.respond(/get game info (.*)/i, function (msg) {
		
		var answer = msg.match[1];

		apiURL = 'http://www.giantbomb.com/api/search/?api_key=c3913d473d53387b014049deeaabe14abacf3482&format=json&query='+answer+'&resources=game&limit=5';

		// make the request to the api
		request(apiURL, function (error, response, body) {
			if (!error && response.statusCode < 300){
		    	//parse the json
		    	var json = JSON.parse(response.body);
		 		//output to user
		    	for (i = 0; i < json.results.length; i++) { 
				    msg.send("Name of game: "+json.results[i]['name']+" / Release Date: "+json.results[i]['original_release_date']+" / Game Details Url: "+json.results[i]['site_detail_url']);
				}   
		                
		        }else{
	            //sends an error message if something goes wrong
	        	msg.send("We are having some technical difficulties server side...");
		    } 
		});

		
    });

} 