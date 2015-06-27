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
        return robot.respond(/star wars the
    force awakens/i, function(msg) {
    		//set the release date for Star Wars The Force Awakens
            var end = new Date('12/18/2015 12:00
    AM');
            //set variables to calculate days, hours, seconds, and minutes
            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            //set varaible for countdown timer
            var timer;

            //create countdown timer
            function showRemaining() {
            	//set the variable for todays date
                var now = new Date();
                //calculate the distance between now and the release date
                var distance = end - now;
                //if the distance is less than 0 clear the timer
                if (distance < 0) {
                    clearInterval(timer);
                    //hubot responds with The Force Awakens is out now
                    msg.send(
                        'Star Wars The Force Awakens is out now!'
                    );
                    return;
                }
                //calculate the days, hours, minutes and seconds until the release
                var days = Math.floor(distance / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) /
                    _minute);
                var seconds = Math.floor((distance % _minute) /
                    _second);
            }
            //run the countdown function timer shows the days, hours, minutes, seconds remaining
            timer = setInterval(showRemaining, 1000);
            //hubot responds with the countdown information
            msg.send('There is
    approximately ' + days + ' days ' +
                hours + ' hours ' + minutes + ' minutes ' + seconds +
                '
    seconds until Star Wars The Force Awakens arrives in theaters!'
            );
        });
    }; 
