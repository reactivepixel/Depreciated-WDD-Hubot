module.exports = function (robot) {
   return robot.respond(/play pokemon$/i, function (msg) { //Activate by saying hubot play pokemon
        var  charHp = 100,//set init HP
            urHP = 100,//set init HP
            //Pikachus attack assoc array
            myAT = {
                'Thunder' : 20,
                'Tackle' : 6,
                'Bolt' : 10,
                'Cut': 2
            },
            //Charizard attack assoc array
            charAT = {
                'Flamethrower' : 10,
                'Headbut' : 15,
                'Fireblast' : 20,
                'Tailwhip': 0
            };
        function question() { //function for user questions
            if (charHp <= 1 || urHP <= 1) { //cancel function if pokemon are dead
                msg.send('Game Over'); 
                return true;
            }
           msg.send("\n" + 'What will do? ' + "\n" +
                     ' Attack ' + "\n" +
                     ' Run ' + "\n" +
                     ' Pokeball '
                    );
        }
       msg.send('http://oi57.tinypic.com/zvug5v.jpg');//hubot returns the image/image link
        msg.send('A Wild Charizard Apeared!!!!!' + "\n" +  //init message upon function start
                 'I Choose you Pikachu!' ); //init message upon function start
        question(); //init question function
        robot.hear(/attack/i, function (msg) { //hubot listens for attack command
            if (charHp <= 1 || urHP <= 1) { //cancel if pokemon are dead
                return true;
            }
            msg.send("\n" + 'What atack will you use?' + "\n" +
                     'Bolt | Thunder' + '\n' +
                      'Tackle | Cut'); //ask what move to use
        });
        function winnerCheck() { //Variable that checks winnder
            var result = "";
            if (charHp < 1 && urHP < 1) { //if there is a tie say this message
                result = "Both pokemon are too tiered to continue!";
            } else if (charHp < 1) { //if pikachu wins say this message
                result =  msg.send("The Wild Charizard Fainted!");
            } else if (urHP < 1) { //if char wins say this message
                result = msg.send('Pikachu fainted he is being rushed to the Pokecenter!');
            }
            return result;
        }
        function random() { //variable to ensure charizard picks a random move every time
            var ix = Math.floor(Math.random() * Object.keys(charAT).length), //random raviable
                chRand = Object.keys(charAT)[ix], //random raviable
                chDmg = charAT[chRand]; //random raviable
            urHP -= chDmg; //Has to be placed here to ensure hp lines up with this specific random move
            var message = 'Charizard used ' + chRand + ' which did ' + chDmg + ' damage! You now have ' + urHP + ' hp left!'; //message for char attack
            return [message, chDmg]; //returning variables
        }
        function fight(attack, dmg) { //function for fighting passing in pikachus selected move
            if (charHp <= 1 || urHP <= 1) { //cancle if both pokemon are dead
                return true;
            }
            charHp -= dmg; //negates char hp based off move used
            //string for pikachus attack + charizard attacks from random function
            msg.send('Pikachu used ' + attack + ' which did ' + dmg + ' damage! Charizard now has ' +  charHp + ' health!' + "\n" + random()[0] ); 
            winnerCheck(); //checks winner
            question(); //asks question
        }
        robot.hear(/thunder/i, function () { //listen for thunder move then runs fight passing in the heard move
            fight(Object.keys(myAT)[0], myAT[Object.keys(myAT)[0]]);
            return true;
        });
        robot.hear(/cut/i, function () { //listen for cut move then runs fight passing in the heard move
            fight(Object.keys(myAT)[3], myAT[Object.keys(myAT)[3]]);
            return true;
        });	
            
        robot.hear(/bolt/i, function () { //listen for bolt move then runs fight passing in the heard move
             fight(Object.keys(myAT)[2], myAT[Object.keys(myAT)[2]]);
             return true;
        });
       
       robot.hear(/tackle/i, function () { //listen for tackle move then runs fight passing in the heard move
            fight(Object.keys(myAT)[1], myAT[Object.keys(myAT)[1]]);
            return true;
        });
       
       robot.hear(/run/i, function (msg) { //listen for run then displays message
            if(charHp <= 1 || urHP <= 1){ //cancel if pokemon are dead
            return true;
            }
            msg.send('You cant escape!');
            question(); //runs question function
        });
        robot.hear(/pokeball/i, function (msg) { //listens for poeball then displays message
           if(charHp <= 1 || urHP <= 1){ //checks if pokemon are dead
                return true;
           }else{
               msg.send(' Darn the Charizard broke free!');
               question(); //runs question function
            }
        });
   });
};



 