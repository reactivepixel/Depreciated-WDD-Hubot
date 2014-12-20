/*
Description:
   Simple Decision making responsibility offloader

Dependencies:
   None

Configuration:
   None

Commands:
   Hubot should I <Any question no matter how illogical>

Contributor:
   Daniel Carroll
   dcarroll@fullsail.edu
*/

//Beginning the script that listens to the user input.
module.exports = function (robot) {
    //This will hear any sentance that starts with <bot> should I <rest of content>
    robot.respond(/should I (.*)$/i, function (msg) {
        //If response is met, sent the message below
        msg.send("Is your name Daniel?");
        //Counter that prevents multiple responses
        var responseNumber = 0;
            //Listener for second response
            robot.hear(/yes$/i, function (msg) {
                //Conditional to ensure this is the first time this response has been received.
                if (responseNumber === 0) {
                    msg.send("Then you already know what to do.");
                    //This incriments the counter up to prevent duplicates.
                    responseNumber = responseNumber + 1;
                }
            });
        //Alternate second response
            robot.hear(/no$/i, function (msg) {
                if (responseNumber === 0) {
                    msg.send("You should ask Daniel.");
                    responseNumber = responseNumber + 1;
                }
            });

    });
};