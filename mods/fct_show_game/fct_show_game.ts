/* eslint-disable global-require */
/* eslint-disable max-len */
import { Stats } from '../interface_game/i_game';

export const readline = require('readline-sync');

export function ShowStatPlayer(_player: Stats, OriPlayer: Stats, Coins: number) {
  console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
  console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
  console.log(`Coins: ${Coins}`);
}

export function DisplayFight(_enemies: Stats, _boss: Stats, BossorNot: any) {
  if (!BossorNot) {
    console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
  } else {
    console.log('\x1b[33m%s\x1b[0m', `You Encounter a ${_boss.name}`);
  }
}
