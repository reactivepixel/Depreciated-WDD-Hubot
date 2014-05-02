// Description:
//  Willis Wonka knows the answer to your question... Or atleast he thinks so.
//
// Dependencies:
//  request
//
// Configuration:
//  none
//
// Commands:
//  hubot willis <question> (yes or no questions only)
//
// Author:
//  ndickiso


var request = require('request');

//Instantiate Variables for random vocabulary and counter
var thinking,answer,busy,noInput,counter;

//Counter, Willis can only handle so many questions before he gets irritated
counter = 0;

//Thinking responses is the first response while Willis thinks
thinking = [
	"Ugh.. hold on...",
	"It's smokey in here...",
	"Finally, a good one...",
	"Like my momma always told me...",
	"Hmmmmmm...",
	"Cough.. Cough...",
	"If it were up to me...",
	"I think...",
	"I'd have to say..."
];

//Answer responses for the actual answer
answer = [
	"If you think I can do it, then go for it",
	"You should just start over",
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"My reply is no",
	"Don't count on it",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
];

//Busy responses if there has been too many questions
busy = [
	"Brain FREEEEEEZE!",
	"Why would you ask such a thing?",
	"Best not tell you right now!",
	"What would Miley Cirus do?"
];

//NoInput responses if there are less then 8 characters typed in the question
noInput = [
	"Cole me on the panny sty!",
	"@#$%!",
	"I can't use my magic powers without a question?",
	"Yes, I'd love another beer!",
	"Glad I'm not the only who doesn't read directions!"
];

//Simple random number function to get random index number within an array
function ranNum(arr){
	return Math.floor(Math.random() * ((arr.length - 1) + 1));
};

//Ask function
function ask(msg){
	
	var ranThin,ranAnsw,ranBusy,ranNoIn;
	
	//Setting varibles for random indexs in response arrays.
	ranThin = thinking[ranNum(thinking)];
	ranAnsw = answer[ranNum(answer)];
	ranBusy = busy[ranNum(busy)];
	
	counter ++;
	
	//Total amount of questions before Willis resets counter and responds with a busy response
	if(counter>=5){
		
		//Slight delay to give a little character, sends random busy response
		setTimeout(function(){msg.send(ranBusy)},500);
		counter = 0;
		
	}else{
		
		//Slight delay to give a little character, sends random thinking response
		setTimeout(function(){msg.send(ranThin)},500);
		
		//Slightly longer delay for answer, sends random answer response
		setTimeout(function(){msg.send(ranAnsw)},2500);	
	}
	
};

//Listens for "hubot willis"
module.exports = function(robot) {
  return robot.respond(/willis/i, function(msg) {
	  
	  //Set Varibles
	  var minData;
	  
	  //Finds character length of input following "hubot", trims outer whitespace 
	  minData = msg.match.input.trim().length;
	  
	  //Conditional to respond with a NoInput response if there isn't a couple words being asked (20 characters +)
	  if (minData>=20){
	  
	  	  //Calls the ask function to return the thinking and answer response
	      ask(msg);
	  }else{
	  
	  	  //Sets random index for noInput responses, and sends the error message if there is less then 20 characters typed.
 		  ranNoIn = noInput[ranNum(noInput)];
	  	  msg.send(ranNoIn);
	  }
  });
}
