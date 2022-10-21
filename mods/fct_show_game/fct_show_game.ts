/* eslint-disable global-require */
/* eslint-disable max-len */
import { Stats } from '../interface_game/i_game';

export const readline = require('readline-sync');

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

export function ShowStatPlayer(_player: Stats, OriPlayer: Stats, Coins: number) {
  console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
  console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
  console.log(`Coins: ${Coins}`);
}

export function DisplayFight(_enemies: Stats) {
  console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
}
