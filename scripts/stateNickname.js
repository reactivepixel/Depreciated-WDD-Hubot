// Description:
// Finds and returns state nickname for state entered
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot state nickname <state>
//
// Author:
// Jairo Jurado


	var data = [
		{
			title : "Alabama",
			nicknames : [
				"The Heart of Dixie",
				"The Yellowhammer State",
				"The Cotton Plantation State",
				"The Cotton State",
				"The Lizard State",
				"The Pioneer Space Capital of the World"
			]
		},{
			title : "North Dakota",
			officialNickname : "The Peace Garden State",
			nicknames : [
				"The Sioux State",
				"The Flickertail State",
				"Land of the Dakotas",
				"The Roughrider State"
			]
		}
	];

// runs function to get the state nickname
function getNickname(msg) {
	 var state = msg.match[1].trim().toLowerCase(); // trims what user entered and turns it into lowercase

	for(var key in data){
		var objState = data[key];
		if(objState.title.toLowerCase() === state){
			if(objState.officialNickname){
				msg.send("Official Nickname: " + objState.officialNickname + ".");
				msg.send("Other Nickname: " + objState.nicknames + ".");
			} else {
				msg.send("Other Nickname: " + objState.nicknames + ".");
			}
		}
	}

return false;
	// conditional to check if what the user entered is a valid state
	if (state == 'alabama') {
		// pushes all alabama unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Heart of Dixie",
											"The Yellowhammer State",
											"The Cotton Plantation State",
											"The Cotton State",
											"The Lizard State",
											"The Pioneer Space Capital of the World");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'alaska') {
		// pushes all alaska unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Last Frontier",
											"The Land of the Midnight Sun",
											"Seward's Folly",
											"Seward's Ice Box");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'arizona') {
		// pushes all arizona unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Grand Canyon State",
											"The Copper State",
											"The Apache State",
											"The Aztec State",
											"The Baby State",
											"The Valentine State",
											"Italy of America",
											"The Sand Hill State",
											"The Sunset State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'arkansas') {
		// pushes all arkansas unofficial nicknames to nicknamesArray
		var officialNickname = "The Natural State";
		var nicknames = nicknamesArray.push("The Land of Opportunity",
											"The Razorback State",
											"The Wonder State",
											"The Hot Springs State",
											"The Bowie State",
											"The Toothpick State",
											"The Bear State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'california') {
		// pushes all california unofficial nicknames to nicknamesArray
		var officialNickname = "The Golden State";
		var nicknames = nicknamesArray.push("The Land of Milk and Honey",
											"The El Dorado State",
											"The Grape State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'colorado') {
		// pushes all colorado unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Centennial State",
											"The Silver State",
											"The Lead State",
											"The Buffalo Plains State",
											"Switzerland of America",
											"The Highest State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'connecticut') {
		// pushes all connecticut unofficial nicknames to nicknamesArray
		var officialNickname = "The Constitution State";
		var nicknames = nicknamesArray.push("The Nutmeg State",
											"The Blue Law State",
											"The Brownstone State",
											"The Freestone State",
											"The Provisions State",
											"Land of Steady Habits");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'delaware') {
		// pushes all delaware unofficial nicknames to nicknamesArray
		var officialNickname = "The First State";
		var nicknames = nicknamesArray.push("The Diamond State",
											"The Blue Hen State",
											"The Peach State",
											"New Sweden",
											"Uncle Sam's Pocket Handkerchief",
											"Corporate Capital",
											"Small Wonder");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'florida') {
		// pushes all florida unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Sunshine State",
											"The Alligator State",
											"The Everglades State",
											"The Orange State",
											"The Flower State",
											"The Peninsula State",
											"The Gulf State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'georgia') {
		// pushes all georgia unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("Empire State of the South",
											"The Peach State",
											"The Goober State",
											"The Cracker State",
											"The Buzzard State",
											"Yankee-land of the South");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'hawaii') {
		// pushes all hawaii unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Aloha State",
											"The Pineapple State",
											"Paradise of the Pacific",
											"The Youngest State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'idaho') {
		// pushes all idaho unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Gem State",
											"Gem of the Mountains",
											"Little Ida");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'illinois') {
		// pushes all illinois unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Prairie State",
											"Land of Lincoln",
											"The Corn State",
											"Garden of the West",
											"The Sucker State",
											"Egypt");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'indiana') {
		// pushes all indiana unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("Crossroads of America",
											"The Hoosier State",
											"Playground of the Middle West");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'iowa') {
		// pushes all iowa unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Hawkeye State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'kansas') {
		// pushes all kansas unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Sunflower State",
											"The Jayhawk State",
											"The Squatter State",
											"The Cyclone State",
											"Bleeding Kansas");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'kentucky') {
		// pushes all kentucky unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Bluegrass State",
											"The Hemp State",
											"The Tobacco State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'louisiana') {
		// pushes all louisiana unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Pelican State",
											"The Bayou State",
											"The Sugar State",
											"The Child of the Mississippi",
											"Fisherman's Paradise");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'maine') {
		// pushes all maine unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Pine Tree State",
											"The Lumber State",
											"The Border State",
											"The Old Dirigo State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'maryland') {
		// pushes all maryland unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Old Line State",
											"The Free State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'massachusetts') {
		// pushes all massachusetts unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Bay State",
											"The Old Colony State",
											"The Pilgrim State",
											"The Puritan State",
											"The Baked Bean State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'michigan') {
		// pushes all michigan unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Wolverine State",
											"The Great Lakes State",
											"Lady of the Lake",
											"The Water Wonderland",
											"The Auto State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'minnesota') {
		// pushes all minnesota unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The North Star State",
											"The Gopher State",
											"The Bread and Butter State",
											"Land of 10,000 Lakes");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'mississippi') {
		// pushes all mississippi unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Magnolia State",
											"The Eagle State",
											"The Border-Eagle State",
											"The Bayou State",
											"The Mud-cat State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'missouri') {
		// pushes all missouri unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Show Me State",
											"The Bullion State",
											"The Cave State",
											"The Lead State",
											"The Ozark State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'montana') {
		// pushes all montana unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Treasure State",
											"Big Sky Country",
											"The Stub Toe State",
											"The Bonanza State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'nebraska') {
		// pushes all nebraska unofficial nicknames to nicknamesArray
		var officialNickname = "The Cornhusker State";
		var nicknames = nicknamesArray.push("The Tree Planters State",
											"The Antelope State",
											"The Bug-eating State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'nevada') {
		// pushes all nevada unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Silver State",
											"The Sagebrush State",
											"The Battle Born State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'new hampshire') {
		// pushes all new hampshire unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Granite State",
											"The White Mountain State",
											"Switzerland of America",
											"The Mother of Rivers");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'new jersey') {
		// pushes all new jersey unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Garden State",
											"The Clam State",
											"The Camden & Amboy State",
											"The Jersey Blue State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'new mexico') {
		// pushes all new mexico unofficial nicknames to nicknamesArray
		var officialNickname = "Land of Enchantment";
		var nicknames = nicknamesArray.push("The Cactus State",
											"The Spanish State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'new york') {
		// pushes all new york unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Empire State",
											"The Excelsior State",
											"The Knickerbocker State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'north carolina') {
		// pushes all north carolina unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Tar Heel State",
											"The Old North State",
											"The Turpentine State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'north dakota') {
		// pushes all north dakota unofficial nicknames to nicknamesArray
		var officialNickname = "The Peace Garden State";
		var nicknames = nicknamesArray.push("The Sioux State",
											"The Flickertail State",
											"Land of the Dakotas",
											"The Roughrider State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'ohio') {
		// pushes all ohio unofficial nicknames to nicknamesArray
		var officialNickname = "The Buckeye State";
		var nicknames = nicknamesArray.push("Mother of Modern Presidents");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'oklahoma') {
		// pushes all oklahoma unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Sooner State",
											"Boomer's Paradise");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'oregon') {
		// pushes all oregon unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Beaver State",
											"The Web-foot State",
											"The Hard-case State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'pennsylvania') {
		// pushes all pennsylvania unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Keystone State",
											"The Quaker State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'rhode island') {
		// pushes all rhode island unofficial nicknames to nicknamesArray
		var officialNickname = "The Ocean State";
		var nicknames = nicknamesArray.push("Little Rhody",
											"The Plantation State",
											"The Smallest State",
											"Land of Roger Williams");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'south carolina') {
		// pushes all south carolina unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Palmetto State",
											"The Rice State",
											"The Swamp State",
											"Keystone of the South Atlantic Seaboard",
											"The Iodine State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'south dakota') {
		// pushes all south dakota unofficial nicknames to nicknamesArray
		var officialNickname = "The Mount Rushmore State";
		var nicknames = nicknamesArray.push("The Coyote State",
											"The Blizzard State",
											"The Artesian State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'tennessee') {
		// pushes all tennessee unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("Volunteer State",
											"The Big Bend State",
											"Mother of Southwestern Statesmen",
											"The Hog and Hominy State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'texas') {
		// pushes all texas unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Lone Star State",
											"The Beef State",
											"The Banner State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'utah') {
		// pushes all utah unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Beehive State",
											"The Mormon State",
											"Land of the Saints",
											"The Salt Lake State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'vermont') {
		// pushes all vermont unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Green Mountain State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'virginia') {
		// pushes all virginia unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("Old Dominion",
											"Mother of Presidents",
											"Cavalier State",
											"Mother of States",
											"Mother of Statesmen");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'washington') {
		// pushes all washington unofficial nicknames to nicknamesArray
		var officialNickname = "The Evergreen State";
		var nicknames = nicknamesArray.push("The Chinook State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'west virginia') {
		// pushes all west virginia unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Mountain State",
											"Switzerland of America",
											"The Panhandle State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'wisconsin') {
		// pushes all wisconsin unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Badger State",
											"The Copper State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else if (state == 'wyoming') {
		// pushes all wyoming unofficial nicknames to nicknamesArray
		var nicknames = nicknamesArray.push("The Equality State",
											"Big Wyoming",
											"The Cowboy State");
		checkOfficialNickname(); // calls checkOfficialNickname function
		showOtherNicknames(); // calls showOtherNicknames function
	} else {
		msg.send('State entered is not valid, make sure state is spelled correctly then run command again.');
	}
	
	
	// runs function to check if state has an official nickname or not
	function checkOfficialNickname() {
		// conditional to check if state has an official nickname
		if (officialNickname == "") {
			// capitalizes first letter of the state and lets user know the state has no official nickname
			msg.send(state.charAt(0).toUpperCase()+state.substring(1) + ' has no official nickname.');
		} else {
			msg.send('Official Nickname: ' + officialNickname + '.');
		}
	}
	
	// runs function to display on the screen all nicknames inside nicknamesArray
	function showOtherNicknames() {
		msg.send('Other Nicknames: ' + nicknamesArray + '.');
	}
}

// Listens for "state nickname <state>" and calls getNickname function.
module.exports = function(robot) {
  return robot.respond(/state nickname (.*)/i, function(msg) {
 		getNickname(msg);
  });
}