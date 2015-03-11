// Description:
// Random wiki article
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot wiki - Returns a random wiki article
//
// Author:
// Andrew Kroft

var request = require('request');

// Function to find and return a random wiki article
function getWiki(msg) {

    request('http://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json', function (error, response){
        var json = JSON.parse(response.body);
        var wikiTitle = json.query.random[0].title;
        var wikiURL = wikiTitle.replace(/ /g, "_");
        wikiURL = "https://en.wikipedia.org/wiki/" + wikiURL;
        msg.send("Wiki Title: " + wikiTitle);
        msg.send("Wiki URL: " + wikiURL);
    });

} // End of "getMeme" function.

module.exports = function(robot) {
	return robot.respond(/wiki(.*)/i, function(msg) {
		getWiki(msg);
	});
}