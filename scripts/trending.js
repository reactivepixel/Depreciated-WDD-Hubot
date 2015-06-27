// Description:
//   Utility commands surrounding Hubot uptime.
//
// Hubot returns what's trending on twitter
//
// Commands
//   hubot what's trending
//
//  Dependencies
//      none
//
// author: Shye TG
// shye@fuillsail.edu

  robot.http("http://whatstrending.com/categories/trending-now")
    .header('Accept', 'application/json')
    .get() (err, res, body) ->
      // err & response status checking code here

      if response.getHeader('Content-Type') isnt 'application/json'
        res.send "Didn't get back JSON :("
        return

      data = null
      try
        data = JSON.parse body
      catch error
       res.send "Ran into an error parsing JSON :("
       return

      
//module.exports = function(robot) {
//    robot.hear(/trending$/i, function(msg) {
//        return msg.send('https://twitter.com/whatstrending');
//    });
//};

