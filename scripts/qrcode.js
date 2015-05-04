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
		var apiURL = 'http://api.qrserver.com/v1/create-qr-code/?data=' + usersText + '&size=300x300';

		msg.http(apiURL).get()(function(err, res, body){
			var error;
			try{
				return msg.send(body);
			}catch(e){
				e = error;
				return msg.send('There was an error');
			}
		});
	} else if(usersText.length < 1) {
		return msg.send('Please enter something for the qr code generator.');
	};
};


module.exports = function(robot){
	return robot.respond(/qr (.*)/i, function(msg){
		qrCode(msg);
	});
};
