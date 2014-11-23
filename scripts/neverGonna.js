/**
 * Description
 *
 * Hubot is never gonna ...
 *
 * Dependencies
 *
 * None
 *
 * Commands
 *
 * Hubot never gonna - reply Like Rick Astley, Hubot is never gonna:
 *                     reply 1. Give you up.
 *                     reply 2. Let you down.
 *                     reply 3. Run around and desert you.
 *                     reply 4. Make you cry.
 *                     reply 5. Say goodbye.
 *                     reply 6. Tell a lie and hurt you.
 *
 * Author
 *
 * Jeramie Brehm
 */

//define song lyrics variable
var neverGonna = [
	"Like Rick Astley, Hubot is never gonna:",
	"1. Give you up.",
	"2. Let you down.",
	"3. Run around and desert you.",
	"4. Make you cry.",
	"5. Say goodbye.",
	"6. Tell a lie and hurt you."
];

module.exports = function (robot) {
	robot.respond(/never gonna$/i, function (msg) {
		return msg.send(neverGonna.join("\n"));
	});
};