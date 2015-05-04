// Description:
//   Generates a QR code from users inputed text.
//
// Dependencies:
//   API via api.qrserver.com
//
// Commands:
//   hubot qr your text here 
//
// Author:
//   William Norton - wnorton2013 @ github

function qrCode(msg) {
	var usersText = msg.match[1];

	if (usersText.length >= 1) {
		var apiURL = 'http://api.qrserver.com/v1/create-qr-code/?data=' + encodeURI(usersText) + '&size=300x300';
		return msg.send(apiURL);		
	} else if(usersText.length < 1) {
		return msg.send('Please enter something for the qr code generator.');
	};
};


module.exports = function(robot){
	return robot.respond(/qr (.*)/i, function(msg){
		qrCode(msg);
	});
};
