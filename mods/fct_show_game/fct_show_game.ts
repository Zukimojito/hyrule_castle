/* eslint-disable global-require */
/* eslint-disable max-len */
import { Stats } from '../interface_game/i_game';

export const readline = require('readline-sync');

export function ShowStatPlayer(_player: Stats, OriPlayer: Stats, Coins: number) {
  console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
  console.log(`\x1b[41mHP: ${_player.hp} / ${OriPlayer.hp}\x1b[0m`);
  const visualHPPlayer = '▱'.repeat(_player.hp);
  console.log(visualHPPlayer);
  console.log(`Coins: ${Coins}`);
}

export function DisplayFight(_enemies: Stats, _boss: Stats, i: number) {
  if (i % 10 !== 0) {
    console.log('\x1b[33m%s\x1b[0m', `                        You encounter a ${_enemies.name}`);
  } else {
    console.log('\x1b[33m%s\x1b[0m', `                        You Encounter a ${_boss.name}`);
  }
}
