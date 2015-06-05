// Description:
// Have Hubot talk dirty to you with nerdy humor
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot talk dirty to me
//
// Author:
// Stacy Faude
// istacy@fullsail.edu

// array of pick up lines
var pickUpLines = ["Baby are you a motherboard?, Cause I'd 'RAM' you all night long.","You make me want to calibrate my joystick without the latest drivers","You want to learn about computers huh, you've already passed the first lesson 'Turning Me On'","You defragment my life","Girl, are you Wi-Fi? Cuz im feeling the connection!","Would you like to enjoy my laptop, I promise I don't have any viruses...","Baby, there is no part of my body that is Micro or Soft","I'm definitely in the range of your hotspot. How about you let me connect and get full access.","You're hotter then the bottom of my laptop.","There is no cache, lets go straight to the hard drive.","If I were an assembly language, I'd jump to your address, shift right a bit, push it in, pop it out, load a byte into your accumulator, then jump if you're negative.","You can put a Trojan on my Hard Drive anytime","Baby you must be Google Glasses, because you augment my reality","Can I stick my USB drive in your USB port?","If I were an operating system, your process would be real-time priority.","Nobody turns me on from a cold boot like you.","Baby, you overclock my processor.","Baby, you make my floppy disk turn into a hard drive","You still use Internet Explorer, you must like it nice and slow","You turn my floppy disk in to a hard drive","Do you like the internet? Cause I can put you on there if you come back to my place.","Are you a computer whiz it seems you know how to turn my software to hardware.","Baby you're so cute you made my page 404. ","Don't worry honey, they call it my dual-channel RAM.","If I was an operating system, your process would have top priority.","Hey baby, I'm a power source, and you're the kind of resistor i'd like to deliver my load to.","Baby, let's configure our hard drives in master and slave position.","You had me at 'Hello World.'"];

module.exports = function(robot) {
	return robot.respond(/talk dirty to me/i, function(msg) {
		// hubot chooses a random pick up line
		msg.send(msg.random(pickUpLines));
	});
};
