import { Stats } from '../interface_game/i_game';

export function getRandomInt() {
  // Returns a random integer from 0 to 100:
  const random = Math.floor(Math.random() * 100) + 1;
  let arrayPlayerEnemiesBoss: number = 0;
  // console.log(random);
  if (random > 0 && random <= 50) {
    arrayPlayerEnemiesBoss = 1;
  } else if (random > 50 && random <= 80) {
    arrayPlayerEnemiesBoss = 2;
  } else if (random > 80 && random <= 95) {
    arrayPlayerEnemiesBoss = 3;
  } else if (random > 95 && random <= 99) {
    arrayPlayerEnemiesBoss = 4;
  } else if (random === 100) {
    arrayPlayerEnemiesBoss = 5;
  }
  return arrayPlayerEnemiesBoss;
}

/* export const Rdinit = getRandomInt(); */
export function InitPlayer(_player: any, Rdinit: any) {
  let CopyPlayer: Stats = {
    id: 0,
    name: '',
    hp: 0,
    str: 0,
    rarity: 0,
  };
  _player.forEach((el: Stats) => {
    if (el.rarity === Rdinit) {
      CopyPlayer = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
        rarity: el.rarity,
      };
    }
  });
  return CopyPlayer;
}
export function InitEnemies(_enemies: any, Rdinit: any) {
  let CopyEnemies: Stats = {
    id: 0,
    name: '',
    hp: 0,
    str: 0,
    rarity: 0,
  };
  _enemies.forEach((el: Stats) => {
    if (el.rarity === Rdinit) {
      CopyEnemies = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
        rarity: el.rarity,
      };
    }
  });
  return CopyEnemies;
}
export function InitBoss(_boss: any, Rdinit: any) {
  let CopyBoss: Stats = {
    id: 0,
    name: '',
    hp: 0,
    str: 0,
    rarity: 0,
  };
  _boss.forEach((el: Stats) => {
    if (el.rarity === Rdinit) {
      CopyBoss = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
        rarity: el.rarity,
      };
    }
  });
  return CopyBoss;
}
