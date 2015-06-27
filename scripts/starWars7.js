// Description:
//   Star Wars  7
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//	 Hubot Star Wars 7 - Returns Countdown to the theater release date
//
// Author: 
//	 Bryan Cash
//
// Contributor:
//	 None



    module.exports = function(robot) {
        return robot.respond(/Star Wars 7/i, function(msg) {
            //set the release date for Star Wars The Force Awakens
            now = new Date();
            eventDate = new Date("December 17, 2001");
            msEachDay = 24 * 60 * 60 * 1000;
            console.log (msEachDay);

            function daysUntilEvent() {
                // Step 1:
                daysRemaining = (eventDate.getTime() - now.getTime()) /
                    msEachDay;
                    console.log(daysRemaining);
                // Step 2:
                daysRemaining = Math.round(daysRemaining);
                // Step 3:
                msg.send("There is approximately " +
                    daysRemaining + " days until Star Wars The Force Awaknes arrives in theaters!");
            }
        });
    };

 
  
  

