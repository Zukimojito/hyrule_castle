"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const fct_init_game_1 = require("./fct_init_game/fct_init_game");
const fct_show_game_1 = require("./fct_show_game/fct_show_game");
const fct_attack_game_1 = require("./fct_attack_game/fct_attack_game");
const figlet = require('figlet');
/* const readline = require('readline-sync'); */
// Original
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
function OptionInGame() {
    let res;
    console.log(figlet.textSync('----  OPTION  ----', { whitespaceBreak: true }));
    console.log(figlet.textSync(' 1. Attack  - OR -  2. Heal', { whitespaceBreak: true }));
    do {
        res = Number(fct_show_game_1.readline.question('Your choice : Type 1 Attack or 2 Heal ONLY ! '));
        clearTerminal();
    } while (res !== 1 && res !== 2);
    return res;
}
function HealGame(OriPlayer, _player) {
    console.log(`\x1b[33mYou chose heal ! You heal yourself ${OriPlayer.hp / 2} HP\x1b[0m`);
    _player.hp += (OriPlayer.hp / 2);
    if (_player.hp > OriPlayer.hp) {
        _player.hp = OriPlayer.hp;
    }
}
function InFight(_player, _enemies, _boss) {
    const OriPlayer = Object.assign({}, _player);
    const OriEnemies = Object.assign({}, _enemies);
    const OriBoss = Object.assign({}, _boss);
    let NewEnemies = true;
    let BossOrNot = false;
    /* ================ Boucle de jeu ================== */
    for (let i = 1; i <= 10; i += 1) {
        while (_enemies.hp > 1) {
            console.log(figlet.textSync(`-- FIGHT ( ${i} / 10 ) --`, {
            /* horizontalLayout: 'full', */
            /* verticalLayout: 'full', */
            }));
            if (NewEnemies) {
                (0, fct_show_game_1.DisplayFight)(_enemies, _boss, i);
                NewEnemies = false;
            }
            BossOrNot = (0, fct_show_game_1.ShowStatAndEnnemy)(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot);
            (0, fct_show_game_1.ShowStatPlayer)(_player, OriPlayer);
            const res = OptionInGame();
            if (res === 1) {
                const checkIfbossIsDie = (0, fct_attack_game_1.AttackByPlayer)(_player, _enemies, _boss, BossOrNot);
                if (checkIfbossIsDie)
                    return true;
            }
            else if (res === 2) {
                HealGame(OriPlayer, _player);
            }
            const checkIfPlayerIsGone = (0, fct_attack_game_1.AttackByEnnemy)(BossOrNot, _player, _enemies, _boss);
            if (checkIfPlayerIsGone)
                return;
        }
        NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies);
        clearTerminal();
    }
}
function main() {
    console.log(figlet.textSync('WELCOME\n ---TO--- \nZELDA GAME', {
        horizontalLayout: 'full',
        verticalLayout: 'full',
    }));
    const Rdinit = (0, fct_init_game_1.getRandomInt)();
    // Initialisation Player, Enemies, Bosses
    const Player1 = (0, fct_init_game_1.InitPlayer)(player, Rdinit);
    const Enemies1 = (0, fct_init_game_1.InitEnemies)(enemies, Rdinit);
    const Boss1 = (0, fct_init_game_1.InitBoss)(bosses, Rdinit);
    // Begin
    (0, fct_show_game_1.DisplayBegin)(Player1);
    // In Fight
    InFight(Player1, Enemies1, Boss1);
}
main();
