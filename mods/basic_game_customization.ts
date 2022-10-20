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

export const enum Difficulty {
  normal = 1,
  difficult = 2,
  insane = 3,
}

export const enum StartOrQuit {
  start = 1,
  quit = 2,
}
function ChooseStartOrQuit() {
  let res;
  console.log('------Start the game or Quit the game :---------');
  console.log('-------------------- OPTION --------------------');
  console.log('            1. Start      2. Quit              ');
  do {
    res = Number(readline.question('Your choice : '));
  } while (res !== StartOrQuit.start && res !== StartOrQuit.quit);
  if (res === StartOrQuit.start) {
    return StartOrQuit.start;
  }
  if (res === StartOrQuit.quit) {
    return StartOrQuit.quit;
  }
}
// eslint-disable-next-line consistent-return
export function chooseYourDifficulty() {
  console.log('--------- Choose your difficulty :----------------');
  console.log('-------------------- OPTION --------------------');
  console.log('            1. Normal      2. Difficult      3. Insane         ');
  let resDifficulty;
  do {
    resDifficulty = Number(readline.question('Your choice : '));
  // eslint-disable-next-line max-len
  } while (resDifficulty !== Difficulty.normal && resDifficulty !== Difficulty.difficult && resDifficulty !== Difficulty.insane);
  switch (resDifficulty) {
    case Difficulty.normal: return Difficulty.normal;
    case Difficulty.difficult: return Difficulty.difficult;
    case Difficulty.insane: return Difficulty.insane;
    default:
  }
}

// eslint-disable-next-line consistent-return
export function initGameAndDifficulty() {
  const res = ChooseStartOrQuit();
  if (res === StartOrQuit.start) {
    return chooseYourDifficulty();
  }
  if (res === StartOrQuit.quit) {
    console.log('vous avez quitté le jeu');
    sleep(1000);
    return 'quit';
  }
}

export function DisplayBegin(_player: Stats) {
  const OriPlayer = _player;
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
