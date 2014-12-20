module.exports = function (robot) {
   return robot.respond(/play pokemon$/i, function (msg) {
        var  charHp = 100,
            urHP = 100,
            myAT = {
                'Thunder' : 20,
                'Tackle' : 6,
                'Bolt' : 10,
                'Cut': 2
            },
            charAT = {
                'Flamethrower' : 10,
                'Headbut' : 15,
                'Fireblast' : 20,
                'Tailwhip': 0
            };
        function question() {
            if (charHp <= 1 || urHP <= 1) {
                msg.send('Game Over');
                return true;
            }
            msg.send("\n" + 'What will do? ' + "\n" +
                     ' Attack ' + "\n" +
                     ' Run ' + "\n" +
                     ' Pokeball '
                    );
                   
          
        }
        //hubot returns the image/image link
        msg.send('http://oi57.tinypic.com/zvug5v.jpg');
        msg.send('A Wild Charizard Apeared!!!!!');
        msg.send('I Choose you Pikachu!');
        question();
        robot.hear(/attack/i, function (msg) {
            if (charHp <= 1 || urHP <= 1) {
                return true;
            }
            msg.send('What atack will you use?');
            msg.send('Bolt | Thunder');
            msg.send('Tackle | Cut');
        });
        function winnerCheck() {
            var result = "";
            if (charHp < 1 && urHP < 1) {
                result = "Both pokemon are too tiered to continue!";
            } else if (charHp < 1) {
                result =  msg.send("The Wild Charizard Fainted!");
            } else if (urHP < 1) {
                result = msg.send('Pikachu fainted he is being rushed to the Pokecenter!');
            }
            return result;
        }
        function random() {
            var ix = Math.floor(Math.random() * Object.keys(charAT).length),
                chRand = Object.keys(charAT)[ix],
                chDmg = charAT[chRand];
            urHP -= chDmg;
            var message = 'Charizard used ' + chRand + ' which did ' + chDmg + ' damage! You now have ' + urHP + ' hp left!';
            return [message, chDmg];
        }
        function fight(attack, dmg) {
            if (charHp <= 1 || urHP <= 1) {
                return true;
            }
            charHp -= dmg;
            msg.send('Pikachu used ' + attack + ' which did ' + dmg + ' damage! Charizard now has ' +  charHp + ' health!' + "\n" + random()[0] );
            winnerCheck();
            question();
        }
        robot.hear(/thunder/i, function () {
            fight(Object.keys(myAT)[0], myAT[Object.keys(myAT)[0]]);
            return true;
        });
        robot.hear(/cut/i, function () {
            fight(Object.keys(myAT)[3], myAT[Object.keys(myAT)[3]]);
            return true;
        });	
            
        robot.hear(/bolt/i, function () {
             fight(Object.keys(myAT)[2], myAT[Object.keys(myAT)[2]]);
             return true;
        });
       
       robot.hear(/tackle/i, function () {
            fight(Object.keys(myAT)[1], myAT[Object.keys(myAT)[1]]);
            return true;
        });
       
       robot.hear(/run/i, function (msg) {
            if(charHp <= 1 || urHP <= 1){
            return true;
            }
            msg.send('You cant escape!');
            question();
        });
        robot.hear(/pokeball/i, function (msg) {
           if(charHp <= 1 || urHP <= 1){
                return true;
           }else{
               msg.send(' Darn the Charizard broke free!');
               question();
            }
        });
   });
};



 