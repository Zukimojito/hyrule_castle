/* eslint-disable consistent-return */
/* eslint-disable max-len */
const readline = require('readline-sync');
// Original
const player = require('./players.json');
const enemies = require('./enemies.json');
const bosses = require('./bosses.json');

interface Stats {
  id: number;
  name: string;
  hp: number;
  str: number;
  rarity: number;
}
function getRandomInt() {
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
const Rdinit = getRandomInt();
function InitPlayer(_player: any) {
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
function InitEnemies(_enemies: any) {
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
function InitBoss(_boss: any) {
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

function ReloadHpEnnemy(_enemies: any, NewEnemies: any, OriEnemies: any) {
  if (_enemies.hp <= 0) {
    NewEnemies = true;
    _enemies.hp = OriEnemies.hp;
    console.log(`${_enemies.name} died !`);
    return NewEnemies;
  }
}

function ShowStatAndEnnemy(i: any, _enemies: any, _player: any, _boss: any, OriEnemies: any, OriBoss: any, BossOrNot:Boolean) {
  if (i <= 9) {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);
    console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
  } else {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
    console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
    BossOrNot = true;
    return BossOrNot;
  }
}

function ShowStatPlayer(_player: { name: any; hp: any; }, OriPlayer: { hp: any; }) {
  console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
  console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
}

function DisplayBegin(_player: any) {
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
function OptionInGame() {
  let res;
  console.log('-------------------- OPTION --------------------');
  console.log('            1. Attack      2. Heal              ');
  do {
    res = Number(readline.question('Your choice : '));
  } while (res !== 1 && res !== 2);
  return res;
}
function DisplayFight(_enemies: any) {
  console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
}
function InFight(_player: any, _enemies: any, _boss: any) {
  const OriPlayer = { ..._player };
  const OriEnemies = { ..._enemies };
  const OriBoss = { ..._boss };
  let nbFight = 1;
  let NewEnemies = true;
  /* let nbEnemies = 1; */
  let BossOrNot = false;
  for (let i = 1; i <= 10; i += 1) {
    console.log(`nombre de boucle actuelLLLLLLLLLLLLLLLLLLE : ${i}`);
    while (_enemies.hp > 1) {
      console.log(`==================== FIGHT ${nbFight} ====================`);
      console.log(`valeur de NewEnmy ${NewEnemies}`);
      if (NewEnemies) { DisplayFight(_enemies); NewEnemies = false; }
      if (i <= 9) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);
        console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
      } else {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
        console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
        BossOrNot = true;
      }
      /*    console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
      console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`); */
      ShowStatPlayer(_player, OriPlayer);
      const res = OptionInGame();

      if (res === 1) {
        console.log('==================== INFOS ====================');
        console.log(`You attacked and dealt ${_player.str} damages !`);
        if (!BossOrNot) {
          console.log(`${_enemies.name} attacked and deal ${_enemies.str} damages !`);
          _enemies.hp -= _player.str;
        } else {
          console.log(`${_boss.name} attacked and deal ${_boss.str} damages !`);
          _boss.hp -= _player.str;
        }
        console.log('\n');

        _player.hp -= _enemies.str;

        if (_boss.hp <= 0) { console.log(`${_boss.name} died !`); return 1; }
        if (_player.hp <= 0) { console.log(`${_player.name} died !`); return 1; }
      } else if (res === 2) {
        console.log(`You chose heal ! You heal yourself ${OriPlayer.hp / 2} HP`);
        _player.hp += (OriPlayer.hp / 2);
        if (!BossOrNot) { _player.hp -= _enemies.str; }
        if (_player.hp > OriPlayer.hp) {
          _player.hp = OriPlayer.hp;
        }
      }
      nbFight += 1;
    }
    NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies);
  }
}

function main() {
  // Initialisation Player, Enemies, Bosses
  const Player1: Stats = InitPlayer(player);
  const Enemies1: Stats = InitEnemies(enemies);
  const Boss1: Stats = InitBoss(bosses);
  // Begin
  DisplayBegin(Player1);
  // In Fight
  InFight(Player1, Enemies1, Boss1);
}

main();
