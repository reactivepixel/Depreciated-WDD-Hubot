// Description:
// Get directions between two locations
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// Hubot get directions "<origin>" "<destination>" - Shows directions from the first to the second
//
// Author:
// Holly Springsteen
// hhspringsteen@gmail.com

var parse_directions = function(body) {
	// variable for use throughout the application
	var directions, final_directions, first_route, leg, _fn, i, len, ref;
	// parse the directions
	directions = JSON.parse(body);
	first_route = directions.routes[0];
	// if there is no route then tell the user
	if (!first_route) {
		return "Sorry your directions could not be found. Please try again.";
	}
	// array for the directions, step by step
	final_directions = [];
	ref = first_route.legs;
	_fn = function(leg) {
		var step, j, len1, ref1, results;
		// Where did you start
		final_directions.push("From: " + leg.start_address);
		// Where did you end
		final_directions.push("To:   " + leg.end_address);
		ref1 = leg.steps;
		results = [];
		for (j = 0, len1 = ref1.length; j < len1; j++) {
			step = ref1[j];
			// push the directions, step by step we will get there
			results.push((function(step) {
				var instructions;
				instructions = step.htmlinstructions.replace(/<[^>]+>/g, '');
				return final_directions.push(instructions + (" (" + step.distance.text + ")"));
			})(step));
		}
	return results;
	};
	for (i = 0, len = ref.length; i < len; i++) {
		leg = ref[i];
		_fn(leg);
	}
	// give back the directions
	return final_directions.join("\n");
};

module.exports = function(robot) {
	return robot.respond(/(get )?directions "((?:[^\\"]+|\\.)*)" "((?:[^\\"]+|\\.)*)"$/i, function(msg) {
		var destination, origin, ref;
		ref = msg.match.slice(2, 4), origin = ref[0], destination = ref[1];
		// use google to get directions
		return msg.http("http://maps.googleapis.com/maps/api/directions/json").query({
			// where are you coming from
			origin: origin,
			// where are you going
			destination: destination,
			sensor: false
		}).get()(function(err, res, body) {
			return msg.send(parse_directions(body));
		});
	});
};
