/*
 DONE - The game starts on a title screen with the options
 “New Game” that starts a new game and “Quit” that exits the program
- When starting a new game, the player can set the difficulty to “Normal”, “Difficult” or “Insane”
-- In “Difficult” mode, every enemy statistics is multiplied by 1.5
-- In “Insane” mode, every enemy statistics is multiplied by 2
Then, the player can set the number of fights to:
 10, 20, 50 or 100. Every 10 fights, the player encounters a boss.
 ---------------------------------------------------------------------
The player starts with 12 coins. He gains 1 coin after every victory.
 */
import { Stats } from './interface_game/i_game';

export const readline = require('readline-sync');

export function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function DisplayBegin(_player: Stats) {
  let res;
  const OriPlayer = _player;
  console.log('------Start the game or Quit the game :---------');
  console.log('-------------------- OPTION --------------------');
  console.log('            1. Start      2. Quit              ');
  do {
    res = Number(readline.question('Your choice : '));
  } while (res !== 1 && res !== 2);
  if (res === 1) {
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
    console.log('========================================');
    console.log('Your stats : ');
    console.log(`HP : ${_player.hp} / ${OriPlayer.hp}`);
    console.log(`STR : ${_player.str}`);
    console.log('========================================');
    readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
  }
  if (res === 2) {
    console.log('vous avez quitté le jeu');
    sleep(1000);
    return true;
  }
}
