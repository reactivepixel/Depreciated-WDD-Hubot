//Description
//
//Pooh gif
//
//Dependencies
//
//none
//
//Commands
//
//Hubot pooh - displays an image of winnie the pooh
//
//Author
//Pamela Holmes

module.exports = function (robot) {
    return robot.respond(/pooh$/i, function (msg) {
        //hubot returns this link to pooh image
        msg.send('http://www.picgifs.com/disney-gifs/disney-gifs/winnie-the-pooh/disney-graphics-winnie-the-pooh-390230.gif');
    });
};
