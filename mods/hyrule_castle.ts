/* eslint-disable consistent-return */
/* eslint-disable max-len */
import {
  InitPlayer, InitEnemies, InitBoss, getRandomInt,
} from './fct_init_game/fct_init_game';

import {
  readline, ShowStatPlayer, DisplayFight,
} from './fct_show_game/fct_show_game';

import {
  AttackByPlayer, AttackByEnnemy,
} from './fct_attack_game/fct_attack_game';

import {
  DisplayBegin, initGameAndDifficulty, ChangeStatByDifficulty, Generate12Coins, AddCoins, PlayerChoiceNbFight, ShowStatAndEnnemy,
} from './basic_game_customization';

import { KnowIfEnnemisOrBoss } from './random_game_events';

import { Stats } from './interface_game/i_game';

/* const readline = require('readline-sync'); */
// Original
const figlet = require('figlet');
const player = require('./jsonObjectGame/players.json');
const enemies = require('./jsonObjectGame/enemies.json');
const bosses = require('./jsonObjectGame/bosses.json');

function clearTerminal() {
  return console.clear();
}

function ReloadHpEnnemy(_enemies: Stats, NewEnemies: any) {
  if (_enemies.hp <= 0) {
    NewEnemies = true;
    const randomNum = getRandomInt();
    const randomNewEnnemy: Stats = InitEnemies(enemies, randomNum);
    _enemies.hp = randomNewEnnemy.hp;
    _enemies.name = randomNewEnnemy.name;
    _enemies.str = randomNewEnnemy.str;
    console.log(`${_enemies.name} died !`);
    _enemies = randomNewEnnemy;
    return NewEnemies;
  }
}

function ReloadHpBoss(_boss: Stats, NewEnemies: any) {
  if (_boss.hp <= 0) {
    NewEnemies = true;
    const randomNumBoss = getRandomInt();
    const randomNewBoss: Stats = InitBoss(bosses, randomNumBoss);
    _boss.hp = randomNewBoss.hp;
    _boss.name = randomNewBoss.name;
    _boss.str = randomNewBoss.str;
    console.log(`${_boss.name} died !`);
    return NewEnemies;
  }
}

/* function ReloadHpBoss(_boss: Stats, NewEnemies: any, OriBoss: Stats) {
  if (_boss.hp <= 0) {
    NewEnemies = true;
    _boss.hp = OriBoss.hp;
    console.log(`${_boss.name} died !`);
    return NewEnemies;
  }
} */

function OptionInGame() {
  let res;
  console.log(figlet.textSync('----  OPTION  ----', { whitespaceBreak: true }));
  console.log(figlet.textSync(' 1. Attack  - OR -  2. Heal', { whitespaceBreak: true }));
  do {
    res = Number(readline.question('Your choice : 1 Attack / 2 Heal ONLY ! '));
    clearTerminal();
  } while (res !== 1 && res !== 2);
  return res;
}

function HealGame(OriPlayer: Stats, _player: Stats) {
  console.log(`You chose heal ! You heal yourself ${OriPlayer.hp / 2} HP`);
  _player.hp += (OriPlayer.hp / 2);
  if (_player.hp > OriPlayer.hp) {
    _player.hp = OriPlayer.hp;
  }
}
function InFight(_player: Stats, _enemies: Stats, _boss: Stats, Coins: number, nbFight: number) {
  const OriPlayer = { ..._player };
  let NewEnemies = true;
  let BossOrNot = false;
  /* ================ Boucle de jeu ================== */
  for (let i = 1; i <= nbFight; i += 1) {
    const OriEnemies = { ..._enemies };
    const OriBoss = { ..._boss };
    Coins = KnowIfEnnemisOrBoss(i, _player, Coins, OriPlayer);
    while (_enemies.hp > 1 && _boss.hp > 1) {
      console.log(`================================ FIGHT ${i}/${nbFight} =================================`);
      if (NewEnemies) { DisplayFight(_enemies, _boss, i); NewEnemies = false; }
      BossOrNot = ShowStatAndEnnemy(i, _enemies, _player, _boss, BossOrNot, OriEnemies, OriBoss);
      ShowStatPlayer(_player, OriPlayer, Coins);
      const res = OptionInGame();

      if (res === 1) {
        const checkIfbossIsDie = AttackByPlayer(_player, _enemies, _boss, BossOrNot, nbFight, i);
        if (checkIfbossIsDie && i === nbFight) {
          return true;
        }
        BossOrNot = false;
      } else if (res === 2) {
        HealGame(OriPlayer, _player);
      }
      const checkIfPlayerIsGone = AttackByEnnemy(BossOrNot, _player, _enemies, _boss);
      if (checkIfPlayerIsGone) return;
    }
    if (i % 10 !== 0) {
      NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies);
    } else { NewEnemies = ReloadHpBoss(_boss, NewEnemies); }
    Coins = AddCoins(Coins);
    // clearTerminal();
  }
}

function main() {
  // Initialisation Player
  console.log(figlet.textSync('WELCOME\n ---TO--- \nZELDA GAME', {
    horizontalLayout: 'full',
    verticalLayout: 'full',
  }));
  const Rdinit = getRandomInt();
  const Player1: Stats = InitPlayer(player, Rdinit);
  // Begin
  const knowIfEndOrNotAndDifficulty = initGameAndDifficulty();
  if (knowIfEndOrNotAndDifficulty === 0) return;
  // Initialisation Enemies, Bosses
  const Enemies1 = InitEnemies(enemies, Rdinit);
  const Boss1 = InitBoss(bosses, Rdinit);
  const nbFight = PlayerChoiceNbFight();
  const Coins = Generate12Coins();
  ChangeStatByDifficulty(knowIfEndOrNotAndDifficulty, Enemies1);
  // display menu
  DisplayBegin(Player1, Coins);
  // In Fight
  InFight(Player1, Enemies1, Boss1, Coins, nbFight);
}

main();
