// Description:
//   Signs off from a specific city
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot sign off <city name> - Tells the city listed to stay classy. Try it with San Diego.
//
// Author:
//  Todd Stark II

//set up the robot
module.exports = function (robot) {
    
    //Make hubot respond to "sign off <word>"
    return robot.respond(/sign off (.*)/i, function (msg) {
        
        //get the word being passed to Hubot
        var city = msg.match[1];
        
        //if the word is "san diego", then display this gif
        if (city.toLowerCase() == "san diego") {
            msg.send('http://gifrific.com/wp-content/uploads/2013/04/You-Stay-Classy-San-Diego-Anchorman.gif');
        } else {
            
            //if the word isn't san diego, respond with "You Stay Classy <word>"
            msg.send("You Stay Classy, " + city + "!");
        }
    });
}
