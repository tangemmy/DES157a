(function(){
    'use script';
    console.log("reading js");

    const player1 = document.querySelector('#resident');
    const player2 = document.querySelector('#tom');
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#start');
    const attack1 = document.querySelector('#attack1');
    const attack2 = document.querySelector('#attack2');

    const voice1 = new Audio('sounds/Voice1.mp3');
    const voice2 = new Audio('sounds/Voice0.mp3');
    const music = new Audio('sounds/niceSurprise.mp3');
    music.loop= true;

    let attacker;
    let defender;
    let defenderIndex;
      
    const gameData = {
		monsters: ['resident', 'tom'],
		health: [100, 100],
		attack: [5, 30, 40, 50, 60],
        attackMessage: [
            "I'm just getting started![-5 health]",
            "This island aint big enough for the both of us[-30 health]",
            "Start pickin' weeds, you'll need to craft more medicine![-40 health]",
            "Looks like theres a new scorpion in town[-50 health]",
            "One of us aint making it out of this island alive [-60 health]"
        ],
		defendMessage: [
            'YOUCH! I miss my mommy...[full hit]', 
            "HA you're gonna have to do better than that you dingbat! [partial hit]", 
            "That was as good as a screen door on a submarine! [no hit!]"
        ],
		index: 0
	};

    startBtn.addEventListener('click', function(){
        music.play();
        
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `<p>Get ready! <strong>${gameData.monsters[gameData.index]}</strong> was randomly selected to attack first. Click the attack button to see what happens.</p>`;
        startBtn.className="hidden";
        if(gameData.index==0){
        attack1.className = 'showing';}
        else{
        attack2.className = 'showing';}
    });

    attack1.addEventListener('click', monsterAttack );
    attack2.addEventListener('click', monsterAttack );

    function monsterAttack(){
        
        /* If gameData.index is 1, the statement is true and it must
        be ployer 2's turn. Set the attacker to player 2 and the defender to player 1.
        Set the defenderIndex to zero. If this statement is false, do the opposite. */
        if(gameData.index){
            attacker = gameData.monsters[1];
            defender = gameData.monsters[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.monsters[0];
            defender = gameData.monsters[1];
            defenderIndex = 1;
        }

        //these generate the random attack of 0-4 and the random defense of 0-2
        const thisAttack = Math.floor(Math.random() * 5);
        const thisdDefense = Math.floor(Math.random() * 3);

        // hide the attack button again, until the next turn.
        attack1.className = 'hidden';
        attack2.className = 'hidden';

        //put the correct attack class on the attacking monster
        document.querySelector(`#${attacker}`).className = `attack${thisAttack}`;
        // put the correct message in the message window
        messages.innerHTML = `<p><strong>${attacker}</strong>: ${gameData.attackMessage[thisAttack]}</p>`;
        if(gameData.index == 0) {
            voice1.play();
        } else {
            voice2.play();
        }
        /* wait 2.5 seconds so the CSS attacking animation can finish and the user can
        read the attack message*/
        setTimeout(function(){
            // update the messages div with a defense message.
            messages.innerHTML = `<p><strong>${defender}</strong>: ${gameData.defendMessage[thisdDefense]}</p>`;
            // put the correct defense animation on the defending monster
            document.querySelector(`#${defender}`).className = `defend${thisdDefense}`;

            /* If there is no defense, update the healthbar of the defending monster by subtracting
            total attack from it's current health. If there was partial defense subtract half the
            health. If a 2 was rolled, nothing happens to the healthbar, because it was total defense. */
            if( thisdDefense == 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if( thisdDefense == 1 ){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack]/2;
            }

            // this variable is used to ensure that the data is convered to a number and is rounded down.
            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            /* you can't have less than zero health. That would screw up the health bar, so if the
            health is less than zero, set it to zero. */
            if(health < 0) {health = 0;}
            // Set the width of the healthbar to reflect the correct percentage.
            document.querySelector(`#healthbar${defenderIndex} div`).style.width = `${health}%`;
            // set the number next to the health bar to reflect the correct percentage.
            document.querySelector(`#playerhealth${defenderIndex}`).innerHTML = `${health}%`;

            /* check to see if the attacking monster has won, passing in the index of the dending
            monster, so you can check it's health and the name of the attacking monster, so you can
            use it in the message. */
            checkWinningCondition(defenderIndex, attacker);
           
        }, 2500);
        function checkWinningCondition(enemy, attackingMonster){
            //Wait three seconds, so users can read the screen and the animation can finish.
            setTimeout(function(){
                //Remove the animation classes from the monsters...
                player1.removeAttribute('class');
                player2.removeAttribute('class');
                /* As before, we need to make sure the health of the defending
                monster is converted into a number and rounded down. */
                const health = Math.floor(parseFloat(gameData.health[enemy]));
                // If the health is less than 1, the winning condition has been met for the attacking monster
                if( health < 1 ){
                    /* Set the message about winning */
                    messages.innerHTML = `<p><strong>${attackingMonster}</strong> has won the battle! start another battle</p>`;
                    /* create a button for a new battle */
                    messages.innerHTML += '<button id="reset">Battle Again</button>';
                    /* refresh the page, so everything starts over fresh */
                    document.querySelector('#reset').addEventListener('click', function(){
                        location.reload();
                    });
                } else {
                    /* The winning condition has not been met, so switch the player's turn. */
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    // Set the message to reflect that it is the other player's turn
                    messages.innerHTML = `<p>It's now <strong>${gameData.monsters[gameData.index]}'s</strong> turn!</p>`;
                    //turn on the attack button again, so the other player can attack.
                     console.log(gameData.index);
                 if(gameData.index==0){
                    attack1.className = 'showing';}
                 else{
                 attack2.className = 'showing';}
                }
                
            }, 3000);
        }
    }
  
})();