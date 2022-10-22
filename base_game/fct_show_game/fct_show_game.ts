/* eslint-disable global-require */
/* eslint-disable max-len */
import { Stats } from '../interface_game/i_game';

export const readline = require('readline-sync');

export function ShowStatAndEnnemy(i: number, _enemies: Stats, _player: Stats, _boss: Stats, OriEnemies: Stats, OriBoss: Stats, BossOrNot: any) {
  console.log('\n');
  const visualHpEnnemy = '▯'.repeat(_enemies.hp);
  if (i <= 9) {
    console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);

    console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
    console.log(`${visualHpEnnemy}`);
  } else {
    console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
    console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
    BossOrNot = true;
    return BossOrNot;
  }
}

export function ShowStatPlayer(_player: Stats, OriPlayer: Stats) {
  console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
  console.log(`\x1b[41mHP: ${_player.hp} / ${OriPlayer.hp}\x1b[0m`);
  const visualHPPlayer = '▱'.repeat(_player.hp);
  console.log(`\x1b[36m${visualHPPlayer}\x1b[0m`);
}

export function DisplayBegin(_player: Stats) {
  const OriPlayer = _player;
  console.log('========================================');
  console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
  console.log('========================================');
  console.log('Your stats : ');
  console.log(`\x1b[44mHP : ${_player.hp} / ${OriPlayer.hp}\x1b[0m`);
  console.log(`\x1b[33mSTR : ${_player.str} \x1b[0m`);
  console.log('========================================');
  readline.keyIn('Press Any Key to Start the game : ');
  console.log('\n');
}

export function DisplayFight(_enemies: Stats, _boss: Stats, i: number) {
  if (i % 10 !== 0) {
    console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
  } else {
    console.log('\x1b[33m%s\x1b[0m', `You Encounter a ${_boss.name}`);
  }
}
