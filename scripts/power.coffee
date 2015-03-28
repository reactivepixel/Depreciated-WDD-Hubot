# Description:
#   Checking where the power levels are
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Hubot scanner - classic DBZ joke
#
#
# Author:
#   Douglas "DJay" Sweeting  e-mail at bidgsweetz@gmail.com
#
# Different links to video/gifs doing the over 9000 from dbz
char = [
    'https://youtu.be/RRiRr9z-dU4',
    'http://ohioriders.net/uploads/gallery/album_360/med_gallery_3268_360_1369457283_8241.jpg',
    'http://fc06.deviantart.net/fs71/f/2011/191/9/1/it__s_over_9000_by_dementedproductions-d3lkk4m.png',
    'http://www.dsogaming.com/wp-content/uploads/2013/07/Vegeta-9000.jpg',
    'https://youtu.be/SiMHTK15Pik',
    'http://fc02.deviantart.net/fs70/i/2013/270/b/5/fairy_tail_cana___it_s_over_9000__by_yuna_deathberry-d6o4sd5.jpg',
    'http://fc00.deviantart.net/fs70/f/2010/278/4/5/its_over_9000__by_detectiveconanfan-d305e8q.jpg',
    'http://static.comicvine.com/uploads/original/3/38919/1618975-kitten_power_level.jpg',
    'https://youtu.be/QsDDXSmGJZA',

]

# make script visible to hubot
module.exports = (robot) ->
  robot.hear /scanner/i, (msg) ->
    msg.send msg.random char

  