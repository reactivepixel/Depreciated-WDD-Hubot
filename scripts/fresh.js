//type in fresh prince and Hubot will play the them song for you

module.exports = function(robot) {

  robot.respond(/FRESH$/i, function(msg) {
    return msg.send("https://www.youtube.com/watch?v=hBe0VCso0qs");
  });

    return robot.hear(/^DANCE$/i, function(msg) {
    return msg.send("http://img.pandawhale.com/43655-carlton-dancing-gif-8Bku.gif");
  });

    return robot.hear(/^REALLY$/i, function(msg) {
    return msg.send("http://i1242.photobucket.com/albums/gg534/AlwayzNToSumthin/Just%20Some%20Excess/tumblr_m70vbsTdrB1rropv0.gif?t=1342664144");
  });	    


};