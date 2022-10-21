/* eslint-disable global-require */
/* eslint-disable max-len */
/*
 DONE - The game starts on a title screen with the options
 “New Game” that starts a new game and “Quit” that exits the program
DONE- When starting a new game, the player can set the difficulty to “Normal”, “Difficult” or “Insane”
DONE-- In “Difficult” mode, every enemy statistics is multiplied by 1.5
DONE-- In “Insane” mode, every enemy statistics is multiplied by 2
Then, the player can set the number of fights to:
 10, 20, 50 or 100. Every 10 fights, the player encounters a boss.
 ---------------------------------------------------------------------
DONE The player starts with 12 coins. He gains 1 coin after every victory.
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

function ChooseStartOrQuit() {
  let res: number;
  console.log('------Start the game or Quit the game :---------');
  console.log('-------------------- OPTION --------------------');
  console.log('            1. Start      0. Quit              ');
  do {
    res = Number(readline.question('Your choice : '));
  } while (res !== 1 && res !== 0);
  if (res === 1) {
    return 1;
  }
  if (res === 0) {
    return 0;
  }
}
// eslint-disable-next-line consistent-return
export function chooseYourDifficulty() {
  console.log('--------- Choose your difficulty :----------------');
  console.log('-------------------- OPTION ----------------------');
  console.log('            1. Normal      2. Difficult      3. Insane         ');
  let resDifficulty: number;
  do {
    resDifficulty = Number(readline.question('Your choice : '));
    // eslint-disable-next-line max-len
  } while (resDifficulty !== 1 && resDifficulty !== 2 && resDifficulty !== 3);
  switch (resDifficulty) {
    case 1: return 1;
    case 2: return 2;
    case 3: return 3;
    default:
  }
}

// eslint-disable-next-line consistent-return
export function initGameAndDifficulty() {
  const res = ChooseStartOrQuit();
  if (res === 1) {
    return chooseYourDifficulty();
  }
  if (res === 0) {
    console.log('vous avez quitté le jeu');
    return 0;
  }
}

export function Generate12Coins() {
  const coins: number = 12;
  return coins;
}

export function AddCoins(coins: number) {
  coins += 1;
  console.log('\x1b[36m%s\x1b[0m', 'You have gained 1 coin !');
  return coins;
}

export function DisplayBegin(_player: Stats, Coins: number) {
  const OriPlayer = _player;
  console.log('========================================');
  console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
  console.log('========================================');
  console.log('Your stats : ');
  console.log(`HP : ${_player.hp} / ${OriPlayer.hp}`);
  console.log(`STR : ${_player.str}`);
  console.log(`Your receive ${Coins} coins`);
  console.log('========================================');
  readline.keyIn('Press Any Key to Start the game : ');
  console.log('\n');
}

export function ChangeStatByDifficulty(difficulty: any, _ennemy: Stats) {
  console.log(`$test 1 voir obj enemy ${JSON.stringify(_ennemy)}`);
  let coefMultiOfStat: number = 0;
  switch (difficulty) {
    case 1:
      coefMultiOfStat = 1;
      break;
    case 2:
      coefMultiOfStat = 3 / 2;
      break;
    case 3:
      coefMultiOfStat = 2;
      break;
    default:
  }
  _ennemy.hp *= coefMultiOfStat;
  _ennemy.str *= coefMultiOfStat;

  // eslint-disable-next-line consistent-return
  return _ennemy;
}

export function PlayerChoiceNbFight() {
  console.log('--------- Choose your number of fights :----------------');
  console.log('-------------------- OPTION ----------------------');
  console.log('Option [1] : 10 Fight ');
  console.log('Option [2] : 20 Fight ');
  console.log('Option [3] : 50 Fight ');
  console.log('Option [4] : 100 Fight ');
  let valeur: number;
  do {
    valeur = Number(readline.question(''));
  } while (valeur !== 1 && valeur !== 2 && valeur !== 3 && valeur !== 4);
  // eslint-disable-next-line default-case
  switch (valeur) {
    case 1: valeur = 10; break;
    case 2: valeur = 20; break;
    case 3: valeur = 50; break;
    case 4: valeur = 50; break;
    default:
  }
  return valeur;
}

export function ShowStatAndEnnemy(i: number, _enemies: Stats, _player: Stats, _boss: Stats, OriEnemies: Stats, OriBoss: Stats, BossOrNot: any) {
  console.log('\n');
  if (i <= 9) {
    console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);
    console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
  } else {
    console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
    console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
    BossOrNot = true;
    return BossOrNot;
  }
}
