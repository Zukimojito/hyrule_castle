/* eslint-disable consistent-return */
/* eslint-disable max-len */
import readline from 'readline-sync';
// Original
import player from './players.json';
import enemies from './enemies.json';
import bosses from './bosses.json';

interface Stats {
  id: number;
  name: string;
  hp: number;
  str: number;
}
function getRandomInt() {
  // Returns a random integer from 0 to 100:
  const random = Math.floor(Math.random() * 100) + 1;
  const arrayPlayerEnemiesBoss: string[] = [];
  // console.log(random);
  if (random > 0 && random <= 50) {
    arrayPlayerEnemiesBoss.push('Link', 'Skulltula', 'Ganon');
  } else if (random > 50 && random <= 80) {
    arrayPlayerEnemiesBoss.push('Young Link', 'Lizalfos', 'Volvagia');
  } else if (random > 80 && random <= 95) {
    arrayPlayerEnemiesBoss.push('Sheik', 'Dead Hand', 'Onox');
  } else if (random > 95 && random <= 99) {
    arrayPlayerEnemiesBoss.push('Impa', 'Stalfos', 'Stallord');
  } else if (random === 100) {
    arrayPlayerEnemiesBoss.push('Hylia', 'Guardian', 'Gohma');
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
  };
  _player.forEach((el: Stats) => {
    if (el.name === Rdinit[0]) {
      CopyPlayer = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
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
  };
  _enemies.forEach((el: Stats) => {
    if (el.name === Rdinit[1]) {
      CopyEnemies = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
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
  };
  _boss.forEach((el: Stats) => {
    if (el.name === Rdinit[2]) {
      CopyBoss = {
        id: el.id,
        name: el.name,
        hp: el.hp,
        str: el.str,
      };
    }
  });
  return CopyBoss;
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
function Option() {
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
  let nbEnemies = 1;
  let BossOrNot = false;

  while (_boss.hp > 1) {
    console.log(`==================== FIGHT ${nbFight} ====================`);
    if (NewEnemies) { DisplayFight(_enemies); NewEnemies = false; }
    if (nbEnemies <= 9) {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${nbEnemies})`);
      console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
    } else {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
      console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
      BossOrNot = true;
    }
    console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
    console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
    const res = Option();

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

      if (_enemies.hp <= 0) {
        nbEnemies += 1;
        NewEnemies = true;
        _enemies.hp = OriEnemies.hp;
        console.log(`${_enemies.name} died !`);
      }
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
}

function main() {
  // Initialisation Player, Enemies, Bosses
  const Player1 = InitPlayer(player);
  const Enemies1 = InitEnemies(enemies);
  const Boss1 = InitBoss(bosses);
  // Begin
  DisplayBegin(Player1);
  // In Fight
  InFight(Player1, Enemies1, Boss1);
}

main();
