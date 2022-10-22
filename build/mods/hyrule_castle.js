"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const fct_init_game_1 = require("./fct_init_game/fct_init_game");
const fct_show_game_1 = require("./fct_show_game/fct_show_game");
const fct_attack_game_1 = require("./fct_attack_game/fct_attack_game");
const basic_game_customization_1 = require("./basic_game_customization");
const random_game_events_1 = require("./random_game_events");
/* const readline = require('readline-sync'); */
// Original
const figlet = require('figlet');
const player = require('./jsonObjectGame/players.json');
const enemies = require('./jsonObjectGame/enemies.json');
const bosses = require('./jsonObjectGame/bosses.json');
function clearTerminal() {
    return console.clear();
}
function ReloadHpEnnemy(_enemies, NewEnemies) {
    if (_enemies.hp <= 0) {
        NewEnemies = true;
        const randomNum = (0, fct_init_game_1.getRandomInt)();
        const randomNewEnnemy = (0, fct_init_game_1.InitEnemies)(enemies, randomNum);
        _enemies.hp = randomNewEnnemy.hp;
        _enemies.name = randomNewEnnemy.name;
        _enemies.str = randomNewEnnemy.str;
        console.log(`${_enemies.name} died !`);
        _enemies = randomNewEnnemy;
        return NewEnemies;
    }
}
function ReloadHpBoss(_boss, NewEnemies) {
    if (_boss.hp <= 0) {
        NewEnemies = true;
        const randomNumBoss = (0, fct_init_game_1.getRandomInt)();
        const randomNewBoss = (0, fct_init_game_1.InitBoss)(bosses, randomNumBoss);
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
        res = Number(fct_show_game_1.readline.question('Your choice : 1 Attack / 2 Heal ONLY ! '));
        clearTerminal();
    } while (res !== 1 && res !== 2);
    return res;
}
function HealGame(OriPlayer, _player) {
    console.log(`You chose heal ! You heal yourself ${OriPlayer.hp / 2} HP`);
    _player.hp += (OriPlayer.hp / 2);
    if (_player.hp > OriPlayer.hp) {
        _player.hp = OriPlayer.hp;
    }
}
function InFight(_player, _enemies, _boss, Coins, nbFight) {
    const OriPlayer = Object.assign({}, _player);
    let NewEnemies = true;
    let BossOrNot = false;
    /* ================ Boucle de jeu ================== */
    for (let i = 1; i <= nbFight; i += 1) {
        const OriEnemies = Object.assign({}, _enemies);
        const OriBoss = Object.assign({}, _boss);
        Coins = (0, random_game_events_1.KnowIfEnnemisOrBoss)(i, _player, Coins, OriPlayer);
        while (_enemies.hp > 1 && _boss.hp > 1) {
            console.log(`================================ FIGHT ${i}/${nbFight} =================================`);
            if (NewEnemies) {
                (0, fct_show_game_1.DisplayFight)(_enemies, _boss, i);
                NewEnemies = false;
            }
            BossOrNot = (0, basic_game_customization_1.ShowStatAndEnnemy)(i, _enemies, _player, _boss, BossOrNot, OriEnemies, OriBoss);
            (0, fct_show_game_1.ShowStatPlayer)(_player, OriPlayer, Coins);
            const res = OptionInGame();
            if (res === 1) {
                const checkIfbossIsDie = (0, fct_attack_game_1.AttackByPlayer)(_player, _enemies, _boss, BossOrNot, nbFight, i);
                if (checkIfbossIsDie && i === nbFight) {
                    return true;
                }
                BossOrNot = false;
            }
            else if (res === 2) {
                HealGame(OriPlayer, _player);
            }
            const checkIfPlayerIsGone = (0, fct_attack_game_1.AttackByEnnemy)(BossOrNot, _player, _enemies, _boss);
            if (checkIfPlayerIsGone)
                return;
        }
        if (i % 10 !== 0) {
            NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies);
        }
        else {
            NewEnemies = ReloadHpBoss(_boss, NewEnemies);
        }
        Coins = (0, basic_game_customization_1.AddCoins)(Coins);
        // clearTerminal();
    }
}
function main() {
    // Initialisation Player
    console.log(figlet.textSync('WELCOME\n ---TO--- \nZELDA GAME', {
        horizontalLayout: 'full',
        verticalLayout: 'full',
    }));
    const Rdinit = (0, fct_init_game_1.getRandomInt)();
    const Player1 = (0, fct_init_game_1.InitPlayer)(player, Rdinit);
    // Begin
    const knowIfEndOrNotAndDifficulty = (0, basic_game_customization_1.initGameAndDifficulty)();
    if (knowIfEndOrNotAndDifficulty === 0)
        return;
    // Initialisation Enemies, Bosses
    const Enemies1 = (0, fct_init_game_1.InitEnemies)(enemies, Rdinit);
    const Boss1 = (0, fct_init_game_1.InitBoss)(bosses, Rdinit);
    const nbFight = (0, basic_game_customization_1.PlayerChoiceNbFight)();
    const Coins = (0, basic_game_customization_1.Generate12Coins)();
    (0, basic_game_customization_1.ChangeStatByDifficulty)(knowIfEndOrNotAndDifficulty, Enemies1);
    // display menu
    (0, basic_game_customization_1.DisplayBegin)(Player1, Coins);
    // In Fight
    InFight(Player1, Enemies1, Boss1, Coins, nbFight);
}
main();
