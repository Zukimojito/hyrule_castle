/* eslint-disable max-len */
import { Stats } from '../interface_game/i_game';

const figlet = require('figlet');

export function AttackByPlayer(_player: Stats, _enemies: Stats, _boss: Stats, BossOrNot: any, nbFight: number, i: number) {
  console.log('=================================== INFOS ===================================');
  console.log(`You attacked and dealt ${_player.str} damages !`);
  if (!BossOrNot) {
    console.log(`${_enemies.name} attacked and deal ${_enemies.str} damages !`);
    _enemies.hp -= _player.str;
  } else {
    console.log(`${_boss.name} attacked and deal ${_boss.str} damages !`);
    _boss.hp -= _player.str;
    if (_boss.hp <= 0) {
      console.log(figlet.textSync(`${_boss.name} died !\n Congratulation\n The game is done.`, {
        horizontalLayout: 'full',
        verticalLayout: 'full',
      })); return true;
      return true;
    }
  }
  console.log('\n');
}
export function AttackByEnnemy(BossOrNot: any, _player: Stats, _enemies: Stats, _boss: Stats) {
  if (!BossOrNot) {
    _player.hp -= _enemies.str;
    if (_player.hp <= 0) {
      console.log(figlet.textSync(`${_player.name} died !\n Try Again !\n `, {
        horizontalLayout: 'full',
        verticalLayout: 'full',
      })); return true;
    }
  } else {
    _player.hp -= _boss.str;
    if (_player.hp <= 0) { console.log(`${_player.name} died !`); return true; }
  }
}
/* console.log(figlet.textSync(`${_player.name} died !\n Try Again !\n `, {
  horizontalLayout: 'full',
  verticalLayout: 'full',
})); */
