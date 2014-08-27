// Description:
// Calls an api to get a random mug shot from a random county.
//
// Dependencies:
// request, cheerio, async
//
// Configuration:
// N/A
//
// Commands:
// Hubot mug me - Gives you a random mug shot.
//
// Author:
// Austin Mayer
// austinemayer@gmail.com

//Dependencies required.
var request = require('request'),
	cheerio = require('cheerio'),
	async = require('async');

function getMugShot(msg){

	//Async allows the county list to populate before getting info from the api
	async.waterfall([
	    function(callback){

	    		//Makes a request to get the list if county id's from the table.
				request('http://www.jailbase.com/api/#recent', function (error, response){

						//Catches an error or if the api does not come back with anything.
						if(!error && response.statusCode < 300){

							//Cheerio gets the html from the requested page.
							$ = cheerio.load(response.body);

							//Selects the table, creates an empty array, and grabs the length of the table.
							var countyTable = $('table'),
								countyList = [],
								countyTableLength = countyTable.find('tr').length;

							//loops through each table row, gets the county id, and pushes it to the array.
							for(var i = 2; i < countyTableLength; i ++){
								countyList.push(countyTable.find('tr:nth-child('+i+')').find('td:first-of-type').text());
							}

							//selects a random county and passes it to the next function
							var randomCounty = countyList[Math.floor(Math.random()*countyList.length)];
							callback(null, randomCounty);
						}
						else{
							//Message if there is an error and breaks out of the function.
							msg.send("Sorry I couldn't find any new mug shots.");
							return false;
						}
					});
		    }
	    ],function(err, result){

	        //Makes a request to get a random mug shot from the api.
			request('http://www.jailbase.com/api/1/recent/?source_id='+result, function (error, response){

				//Catches an error or if the api does not come back with anything.
				if(!error && response.statusCode < 300){

					//Parses the Json and just grabs the first record to send back to the user.
					var mugShotJSON = JSON.parse(response.body),
						recentArrest = mugShotJSON.records[0]
						arresteeInfo = [];

					//Outputs the name, charges, and mugshot of the arrestee if availble.
					if (recentArrest.name.length > 0){
						arresteeInfo.push(recentArrest.name);
					}else{
						arresteeInfo.push('Name not stated.');
					}
					if (recentArrest.charges.length > 0){
						for(i = 0; i < recentArrest.charges.length; i++){
							arresteeInfo.push(recentArrest.charges[i]);
					    };
					}else{
						arresteeInfo.push('Charges not stated.');
					}
					if (recentArrest.mugshot.length > 0){
						arresteeInfo.push(recentArrest.mugshot);
					}else{
						arresteeInfo.push('No Picture not availble.');
					}
					

					for(i = 0; i < arresteeInfo.length; i++){
				    (function(i){
				        setTimeout(function(){
							msg.send(arresteeInfo[i]);
				        }, 500 * i);
				    }(i))};
					
				}
				else{

					//Message if there is an error.
					msg.send("Sorry I couldn't find any new mug shots.");
				}
			});
	    });
}

module.exports = function(robot){

	//Receives the command.
	return robot.respond(/mug me/i, function(msg){	

		//Calls the function to get the random joke.
		getMugShot(msg);
	});
}