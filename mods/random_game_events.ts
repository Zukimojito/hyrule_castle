/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable max-len */
// After each fight, the player has a 35% chance to stumble upon a room (100% before every boss fight) *DONE
// All the rooms have the “Leave” option, that allows the player to move on to the next fight
// The room type is randomly. You can decide of the odds. * DONE
// Trap Room: the trap room is selected randomly based on rarity (see traps.json). The player is stuck unless his character meets the requirements of the room or chooses to “Leave”. If he leaves without having the requirements, the character randomly loses between 5% and 15% of his maximum HP. If he meets the requirements, he can leave without losing HP and earns 1 coin.
// Treasure Room: the player randomly earns between 3 and 5 coins.
import { readline } from './basic_game_customization';
import { Stats } from './interface_game/i_game';

const traps = require('./jsonObjectGame/traps.json');

export function RandomRoom(_player: Stats, _coins: number) {
  let choice;
  let coin: number;
  console.log('\x1b[35m%s\x1b[0m', '===== You have discovered a secret room ! =====');
  console.log('You wanna go inside the room or leave :        \n');
  console.log('       1. Enter     2. Leave');
  do {
    choice = Number(readline.question('Your choice : '));
  } while (choice !== 1 && choice !== 2);

  if (choice === 1) {
    const random1 = Math.floor(Math.random() * 100) + 1;
    if (random1 >= 50) {
      console.log('You have enter in Trap Room');
      if (_player.str >= 15) {
        coin = _coins + 1;
        console.log('You have gain 1 coin in trap room');
        return coin;
      }
      console.log("You don't meets the requirements");
      _player.hp -= 15;
      return _coins;
    }
    console.log('You got lucky ! you enter in Treasure Room');
    // earns between 3 and 5 coins.
    coin = Math.floor(Math.random() * 2) + 3;
    _coins += coin;
    console.log(`You gains ${coin} coins !`);
    return _coins;
  } if (choice === 2) {
    console.log('You chose leave.\n');
    return _coins;
  }
}

export function KnowIfEnnemisOrBoss(i: number, _player: Stats, _coins: number) {
  const roomOrNot = Math.floor(Math.random() * 100) + 1;
  console.log(roomOrNot);
  if (i % 10 !== 0) {
    console.log('cest un mob');
    if (roomOrNot <= 35) {
      _coins = Number(RandomRoom(_player, _coins));
      return _coins;
    } return _coins;
  }
  console.log('c un boss');
  _coins = Number(RandomRoom(_player, _coins));
  return _coins;
}

// const argent = KnowIfEnnemisOrBoss(9, 12);
// console.log(argent);
