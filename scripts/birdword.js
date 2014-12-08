/**
 * Description
 *
 * Bird is the Word
 *
 * Dependencies
 *
 * None
 *
 * Commands
 *
 * Hubot word - reply you haven't heard?
 *
 * Hubot word yes - reply good I was worried.
 *
 * Hubot word no - reply song portion array
 *
 * Author
 *
 * Jeramie Brehm
 */

//define song lyrics variable
var birdWord = [
	"A-well-a, everybody's heard about the bird.",
	"Bird, bird, bird, b-bird's the word.",
	"A-well-a, bird, bird, bird, the bird is the word",
	"A-well-a, don't you know about the bird.",
	"Well, everybody knows that the bird is the word."
];

module.exports = function (robot) {
	robot.respond(/word$/i, function (msg) {
		return msg.send("You haven't heard?");
	});
	robot.respond(/word yes$/i, function (msg) {
		return msg.send("Good, I was worried.");
	});
	robot.respond(/word no$/i, function (msg) {
		return msg.send(birdWord.join("\n"));
	});
};