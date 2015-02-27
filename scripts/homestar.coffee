# Description:
#   Discover the time wasting world of Homestar Runner
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Hubot homestar - A cast member of Homestar Runner introduces themself
#
# Notes:
#   No lint found using http://www.coffeelint.org
#
# Author:
#   Lee Chapoton
#	chapoton@gmail.com

# define array of links to each of the character video URLs
char = [
    'http://www.homestarrunner.com/vcr_hs.html',
    'http://www.homestarrunner.com/vcr_cz.html',
    'http://www.homestarrunner.com/vcr_cheat.html',
    'http://www.homestarrunner.com/vcr_sb.html',
    'http://www.homestarrunner.com/vcr_marzy.html',
    'http://www.homestarrunner.com/vcr_pp.html',
    'http://www.homestarrunner.com/vcr_ss.html',
    'http://www.homestarrunner.com/vcr_bubs.html',
    'http://www.homestarrunner.com/vcr_sm.html',
    'http://www.homestarrunner.com/vcr_poop.html',
    'http://www.homestarrunner.com/vcr_kot.html',
    'http://www.homestarrunner.com/vcr_homsar.html',
]

# make script visible to hubot
module.exports = (robot) ->

  # listen event for keyword "homestar"
  robot.respond /homestar/i, (msg) ->

  	# return msg, in this case a randomly picked URL
    msg.send msg.random char