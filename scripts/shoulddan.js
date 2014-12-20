/*
 Description:
 An application for finding your place

 Dependencies:
 None

 Configuration:
 None

 Commands:
 Hubot should Daniel <Any statement at all>

 Contributor:
 Daniel Carroll
 dcarroll@fullsail.edu
 */

//Beginning the script that listens to the user input!
module.exports = function (robot) {
    //This will hear any sentence that starts with <bot> should Daniel <rest of content>
    robot.hear(/(should Daniel) (.*)$/i, function (msg) {
        //If response is met, sent the message below
        msg.send("Mind your own business, Daniel is master of his own life. Asking questions or talking about Daniel is the first way to need a dentist for a tooth replacement.");
    });
};