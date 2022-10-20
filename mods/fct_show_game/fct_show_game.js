"use strict";
exports.__esModule = true;
exports.DisplayFight = exports.ShowStatPlayer = exports.ShowStatAndEnnemy = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot) {
    console.log('\n');
    if (i <= 9) {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_enemies.name, " (ennemies ").concat(i, ")"));
        console.log("HP: ".concat(_enemies.hp, " / ").concat(OriEnemies.hp));
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_boss.name, " (Boss)"));
        console.log("HP: ".concat(_boss.hp, " / ").concat(OriBoss.hp));
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
function ShowStatPlayer(_player, OriPlayer) {
    console.log('\x1b[32m%s\x1b[0m', "".concat(_player.name, " (player)"));
    console.log("HP: ".concat(_player.hp, " / ").concat(OriPlayer.hp));
}
exports.ShowStatPlayer = ShowStatPlayer;
/* export function DisplayBegin(_player: Stats) {
  let res;
  const OriPlayer = _player;
  readline.keyIn('------Start the game or Quit the game :------ ');
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
    sleep(5000);
    return true;
  }
} */
function DisplayFight(_enemies) {
    console.log('\x1b[33m%s\x1b[0m', "You encounter a ".concat(_enemies.name));
}
exports.DisplayFight = DisplayFight;
