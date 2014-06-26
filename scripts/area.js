// Description:
//   Hubot gives you a state back when you give him the areacode
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Hubot areacode <areacode> - Get state of the areacode
//
// Author:
//   Bogoroh

var data = [
	{
		number: [205,251,256,334],
		state:"Alabama"
	},
	{
		number: [907],
		state:"Alaska"
	},
	{
		number: [480,520,602,623,928],
		state:"Arizona"
	},
	{
		number: [501,870],
		state:"Arkansas"
	},
	{
		number: [209,213,310,323,408,415,510,530,559,562,619,626,650,661,707,714,760,805,831,858,909,916,925,949],
		state:"California"
	},
	{
		number: [303,719,720,970],
		state:"Colorado"
	},
	{
		number: [203,860],
		state:"Connecticut"
	},
	{
		number: [302],
		state:"Delaware"
	},
	{
		number: [305,321,352,386,407,561,727,754,772,786,813,850,863,904,941,954],
		state:"Florida"
	},
	{
		number: [229,404,478,678,706,770,912],
		state:"Georgia"
	},
	{
		number: [808],
		state:"Hawaii"
	},
	{
		number: [208],
		state:"Idaho"
	},
	{
		number: [217,309,312,618,630,708,773,815,847],
		state:"Illinois"
	},
	{
		number: [219,260,317,574,765,812],
		state:"Indiana"
	},
	{
		number: [319,515,563,641,712],
		state:"Iowa"
	},
	{
		number: [316,620,785,913],
		state:"Kansas"
	},
	{
		number: [270,502,606,859],
		state:"Kentucky"
	},
	{
		number: [225,318,337,504,985],
		state:"Louisiana"
	},
	{
		number: [207],
		state:"Maine"
	},
	{
		number: [240,301,410,443],
		state:"Maryland"
	},
	{
		number: [339,351,413,508,617,774,781,857,978],
		state:"Massachusetts"
	},
	{
		number: [231,248,269,313,517,586,616,734,810,906,989],
		state:"Michigan"
	},
	{
		number: [218,320,507,612,651,763,952],
		state:"Minnesota"
	},
	{
		number: [228,601,662],
		state:"Mississippi"
	},
	{
		number: [314,417,573,636,660,816],
		state:"Missouri"
	},
	{
		number: [406],
		state:"Montana"
	},
	{
		number: [308,402],
		state:"Nebraska"
	},
	{
		number: [702,775],
		state:"Nevada"
	},
	{
		number: [603],
		state:"New Hampshire"
	},
	{
		number: [201,609,732,856,908,973],
		state:"New Jersey"
	},
	{
		number: [505],
		state:"New Mexico"
	},
	{
		number: [212,315,347,516,518,607,631,646,716,718,845,914,917],
		state:"New York"
	},
	{
		number: [252,336,704,828,910,919,980],
		state:"North Carolina"
	},
	{
		number: [701],
		state:"North Dakota"
	},
	{
		number: [216,234,330,419,440,513,614,740,937],
		state:"Ohio"
	},
	{
		number: [405,580,918],
		state:"Oklahoma"
	},
	{
		number: [503,541,971],
		state:"Oregon"
	},
	{
		number: [215,267,412,484,570,610,717,724,814,878],
		state:"Pennsylvania"
	},
	{
		number: [401],
		state:"Rhode Island"
	},
	{
		number: [803,843,864],
		state:"South Carolina"
	},
	{
		number: [605],
		state:"South Dakota"
	},
	{
		number: [423,615,731,865,901,931],
		state:"Tennessee"
	},
	{
		number: [210,214,254,281,361,409,469,512,682,713,806,817,830,832,903,915,936,940,956,972,979],
		state:"Texas"
	},
	{
		number: [435,801],
		state:"Utah"
	},
	{
		number: [802],
		state:"Vermont"
	},
	{
		number: [278,434,540,571,703,757,804],
		state:"Virginia"
	},
	{
		number: [206,253,360,425,509],
		state:"Washington"
	},
	{
		number: [304],
		state:"West Virginia"
	},
	{
		number: [262,414,608,715,920],
		state:"Wisconsin"
	},
	{
		number: [307],
		state:"Wyoming"
	},
]


// Function to find the area of an areacode
function areaCode(msg){
	// Convert the string to an Int
	var codeString = msg.match[1].trim();
	var code = parseInt(codeString);
	var areaFound = false;
	// If statement to make sure user typed just numbers
	if (isNaN(code)) {
		msg.send("Area code contains letters, Please retype with just numbers.");
	// check to make sure the length is equal to 3 numbers
	} else if (codeString.length !== 3){
		msg.send("Area code has more then 3 numbers. Make sure it's only 3.");
	} else {
		// Loop through the data array
		for(var i in data){
			// Loop through the state's numbers
			for (var obj in data[i].number){
				// Check if the user's number is equal to the state's number
				if (code === data[i].number[obj]) {
					msg.send(code.toString() + " is the Area Code of " + data[i].state)
					areaFound = true;
				} 
			}
		}
		// The number the user has typed has not been found
		if (areaFound === false){
			msg.send("Sorry, This area code has not been found. Please try another code.")
		}
	}
}


//Listens for the exact match of "blackjack" and calls playJack function.
module.exports = function(robot) {
	return robot.respond(/areacode (.*)/i, function(msg) {
		areaCode(msg);
	});
}