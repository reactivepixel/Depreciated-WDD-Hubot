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

  var trend = [
    "<a class="twitter-timeline" href="https://twitter.com/hashtag/trending" data-widget-id="614646419614404608">#trending Tweets</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>""
    //"http://twitter.com/hashtag/trending",
    //"http://whatstrending.com/categories/trending-now",
    //"http://www.buzzfeed.com/trending",
    ];
//Starts up the hubot interface
module.exports = function(robot) {
    return robot.respond(/whats trending$/i, function(msg) {
        
        msg.send(msg.random(trend) + " Check it out!");
    });
};


