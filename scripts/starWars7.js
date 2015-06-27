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
            currentDate = new Date();
            //set the release date for Star Wars The Force Awakens
            releaseDate = new Date(2015,11,18);
            //calculate the milliseconds for each day
            msEachDay = 24 * 60 * 60 * 1000;
            
            //calculate the days remaining until the release date
            daysRemaining = (releaseDate - currentDate)/msEachDay;
                    
            //round the number of days remaining
            daysRemaining = Math.round(daysRemaining);

            //if the calculation result is less than 0 it has passed the release date
            if(daysRemaining<0){
            	//hubot respods with the movie is out now
            	msg.send("Star Wars The Force Awakens is out now!")
            }else{
            	//if the calculation result is greater than zero
            	//hubot respods with the number of days until the release
            	msg.send("There is approximately " +
                    daysRemaining + " days until Star Wars The Force Awaknes arrives in theaters!");
            }
        });
    };

 
  
  

