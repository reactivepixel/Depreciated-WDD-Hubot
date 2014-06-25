// Description:
// Finds and returns state nicknames for state entered.
//
// Dependencies:
// none
//
// Configuration:
// none
//
// Commands:
// hubot statenick <state> - Enter a U.S. state and get all its nicknames.
//
// Author:
// Jairo Jurado


// Array of objects containing the state titles, state official nicknames (not all states have an official nickname), and the state's other known nicknames
var data = [
	{
		title: "Alabama",
		nicknames: [
			"The Heart of Dixie",
			"The Yellowhammer State",
			"The Cotton Plantation State",
			"The Cotton State",
			"The Lizard State",
			"The Pioneer Space Capital of the World"
		]
	},
	{
		title: "Alaska",
		nicknames: [
			"The Last Frontier",
			"The Land of the Midnight Sun",
			"Seward's Folly",
			"Seward's Ice Box"
		]
	},
	{
		title: "Arizona",
		nicknames: [
			"The Grand Canyon State",
			"The Copper State",
			"The Apache State",
			"The Aztec State",
			"The Baby State",
			"The Valentine State",
			"Italy of America",
			"The Sand Hill State",
			"The Sunset State"
		]
	},
	{
		title: "Arkansas",
		officialNickname: "The Natural State",
		nicknames: [
			"The Land of Opportunity",
			"The Razorback State",
			"The Wonder State",
			"The Hot Springs State",
			"The Bowie State",
			"The Toothpick State",
			"The Bear State"
		]
	},
	{
		title: "California",
		officialNickname: "The Golden State",
		nicknames: [
			"The Land of Milk and Honey",
			"The El Dorado State",
			"The Grape State"
		]
	},
	{
		title: "Colorado",
		nicknames: [
			"The Centennial State",
			"The Silver State",
			"The Lead State",
			"The Buffalo Plains State",
			"Switzerland of America",
			"The Highest State"
		]
	},
	{
		title: "Connecticut",
		officialNickname: "The Constitution State",
		nicknames: [
			"The Nutmeg State",
			"The Blue Law State",
			"The Brownstone State",
			"The Freestone State",
			"The Provisions State",
			"Land of Steady Habits"
		]
	},
	{
		title: "Delaware",
		officialNickname: "The First State",
		nicknames: [
			"The Diamond State",
			"The Blue Hen State",
			"The Peach State",
			"New Sweden",
			"Uncle Sam's Pocket Handkerchief",
			"Corporate Capital",
			"Small Wonder"
		]
	},
	{
		title: "Florida",
		nicknames: [
			"The Sunshine State",
			"The Alligator State",
			"The Everglades State",
			"The Orange State",
			"The Flower State",
			"The Peninsula State",
			"The Gulf State"
		]
	},
	{
		title: "Georgia",
		nicknames: [
			"Empire State of the South",
			"The Peach State",
			"The Goober State",
			"The Cracker State",
			"The Buzzard State",
			"Yankee-land of the South"
		]
	},
	{
		title: "Hawaii",
		nicknames: [
			"The Aloha State",
			"The Pineapple State",
			"Paradise of the Pacific",
			"The Youngest State"
		]
	},
	{
		title: "Idaho",
		nicknames: [
			"The Gem State",
			"Gem of the Mountains",
			"Little Ida"
		]
	},
	{
		title: "Illinois",
		nicknames: [
			"The Prairie State",
			"Land of Lincoln",
			"The Corn State",
			"Garden of the West",
			"The Sucker State",
			"Egypt"
		]
	},
	{
		title: "Indiana",
		nicknames: [
			"Crossroads of America",
			"The Hoosier State",
			"Playground of the Middle West"
		]
	},
	{
		title: "Iowa",
		nicknames: [
			"The Hawkeye State"
		]
	},
	{
		title: "Kansas",
		nicknames: [
			"The Sunflower State",
			"The Jayhawk State",
			"The Squatter State",
			"The Cyclone State",
			"Bleeding Kansas"
		]
	},
	{
		title: "Kentucky",
		nicknames: [
			"The Bluegrass State",
			"The Hemp State",
			"The Tobacco State"
		]
	},
	{
		title: "Louisiana",
		nicknames: [
			"The Pelican State",
			"The Bayou State",
			"The Sugar State",
			"The Child of the Mississippi",
			"Fisherman's Paradise"
		]
	},
	{
		title: "Maine",
		nicknames: [
			"The Pine Tree State",
			"The Lumber State",
			"The Border State",
			"The Old Dirigo State"
		]
	},
	{
		title: "Maryland",
		nicknames: [
			"The Old Line State",
			"The Free State"
		]
	},
	{
		title: "Massachusetts",
		nicknames: [
			"The Bay State",
			"The Old Colony State",
			"The Pilgrim State",
			"The Puritan State",
			"The Baked Bean State"
		]
	},
	{
		title: "Michigan",
		nicknames: [
			"The Wolverine State",
			"The Great Lakes State",
			"Lady of the Lake",
			"The Water Wonderland",
			"The Auto State"
		]
	},
	{
		title: "Minnesota",
		nicknames: [
			"The North Star State",
			"The Gopher State",
			"The Bread and Butter State",
			"Land of 10,000 Lakes"
		]
	},
	{
		title: "Mississippi",
		nicknames: [
			"The Magnolia State",
			"The Eagle State",
			"The Border-Eagle State",
			"The Bayou State",
			"The Mud-cat State"
		]
	},
	{
		title: "Missouri",
		nicknames: [
			"The Show Me State",
			"The Bullion State",
			"The Cave State",
			"The Lead State",
			"The Ozark State"
		]
	},
	{
		title: "Montana",
		nicknames: [
			"The Treasure State",
			"Big Sky Country",
			"The Stub Toe State",
			"The Bonanza State"
		]
	},
	{
		title: "Nebraska",
		officialNickname: "The Cornhusker State",
		nicknames: [
			"The Tree Planters State",
			"The Antelope State",
			"The Bug-eating State"
		]
	},
	{
		title: "Nevada",
		nicknames: [
			"The Silver State",
			"The Sagebrush State",
			"The Battle Born State"
		]
	},
	{
		title: "New Hampshire",
		nicknames: [
			"The Granite State",
			"The White Mountain State",
			"Switzerland of America",
			"The Mother of Rivers"
		]
	},
	{
		title: "New Jersey",
		nicknames: [
			"The Garden State",
			"The Clam State",
			"The Camden & Amboy State",
			"The Jersey Blue State"
		]
	},
	{
		title: "New Mexico",
		officialNickname: "Land of Enchantment",
		nicknames: [
			"The Cactus State",
			"The Spanish State"
		]
	},
	{
		title: "New York",
		nicknames: [
			"The Empire State",
			"The Excelsior State",
			"The Knickerbocker State"
		]
	},
	{
		title: "North Carolina",
		nicknames: [
			"The Tar Heel State",
			"The Old North State",
			"The Turpentine State"
		]
	},
	{
		title: "North Dakota",
		officialNickname: "The Peace Garden State",
		nicknames: [
			"The Sioux State",
			"The Flickertail State",
			"Land of the Dakotas",
			"The Roughrider State"
		]
	},
	{
		title: "Ohio",
		officialNickname: "The Buckeye State",
		nicknames: [
			"Mother of Modern Presidents"
		]
	},
	{
		title: "Oklahoma",
		nicknames: [
			"The Sooner State",
			"Boomer's Paradise"
		]
	},
	{
		title: "Oregon",
		nicknames: [
			"The Beaver State",
			"The Web-foot State",
			"The Hard-case State"
		]
	},
	{
		title: "Pennsylvania",
		nicknames: [
			"The Keystone State",
			"The Quaker State"
		]
	},
	{
		title: "Rhode Island",
		officialNickname: "The Ocean State",
		nicknames: [
			"Little Rhody",
			"The Plantation State",
			"The Smallest State",
			"Land of Roger Williams"
		]
	},
	{
		title: "South Carolina",
		nicknames: [
			"The Palmetto State",
			"The Rice State",
			"The Swamp State",
			"Keystone of the South Atlantic Seaboard",
			"The Iodine State"
		]
	},
	{
		title: "South Dakota",
		officialNickname: "The Mount Rushmore State",
		nicknames: [
			"The Coyote State",
			"The Blizzard State",
			"The Artesian State"
		]
	},
	{
		title: "Tennessee",
		nicknames: [
			"Volunteer State",
			"The Big Bend State",
			"Mother of Southwestern Statesmen",
			"The Hog and Hominy State"
		]
	},
	{
		title: "Texas",
		nicknames: [
			"The Lone Star State",
			"The Beef State",
			"The Banner State"
		]
	},
	{
		title: "Utah",
		nicknames: [
			"The Beehive State",
			"The Mormon State",
			"Land of the Saints",
			"The Salt Lake State"
		]
	},
	{
		title: "Vermont",
		nicknames: [
			"The Green Mountain State"
		]
	},
	{
		title: "Virginia",
		nicknames: [
			"Old Dominion",
			"Mother of Presidents",
			"Cavalier State",
			"Mother of States",
			"Mother of Statesmen"
		]
	},
	{
		title: "Washington",
		officialNickname: "The Evergreen State",
		nicknames: [
			"The Chinook State"
		]
	},
	{
		title: "West Virginia",
		nicknames: [
			"The Mountain State",
			"Switzerland of America",
			"The Panhandle State"
		]
	},
	{
		title: "Wisconsin",
		nicknames: [
			"The Badger State",
			"The Copper State"
		]
	},
	{
		title: "Wyoming",
		nicknames: [
			"The Equality State",
			"Big Wyoming",
			"The Cowboy State"
		]
	}
];


// Runs function to get the state nickname
function getNickname(msg) {
	var state = msg.match[1].trim().toLowerCase(); // Trims what the user has entered and turns it into lowercase
	
	// Boolean to check if the state entered was found
	var stateFound = false;
	// Loops through array of objects "data"
	for(var key in data) {
		var objState = data[key];
		
		// Conditional to check if what the user entered is a valid state
		if (objState.title.toLowerCase() === state) {
			// Conditional to check if state has an official nickname
			stateFound = true;
			if (objState.officialNickname) {
				msg.send("Official Nickname: " + objState.officialNickname + ".");
				
				// Displays array of other nicknames, in a string, with a ", " in between each element
				msg.send("Other Nicknames: " + objState.nicknames.join(", ") + ".");
				break; // breaks the loop once it finds the nicknames
			} else {
				msg.send(objState.title + " has no official nickname.");
				
				// Displays array of other nicknames, in a string, with a ", " in between each element
				msg.send("Other Nicknames: " + objState.nicknames.join(", ") + "."); 
				break; // Breaks the loop once it finds the nicknames
			}
		}
	};
	
	// Conditional to send a "state not found" message if the state wasn't found in the data array
	if(stateFound === false) {
		msg.send("State entered is not valid, make sure state is spelled correctly then run command again.");
	}
}

// Listens for "statenick <state>" and calls getNickname function.
module.exports = function(robot) {
	return robot.respond(/statenick (.*)/i, function(msg) {
		getNickname(msg);
	});
}