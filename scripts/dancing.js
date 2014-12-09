module.exports = function(robot) {
    return robot.hear(/hi/i, function(msg) {

        //The message that hubot will deliver.

        msg.send(alert "http://images4.fanpop.com/image/photos/17800000/Dance-dance-harry-potter-vs-twilight-17808134-312-236.gif#.png");
    });
};
