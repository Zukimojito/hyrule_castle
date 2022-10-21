"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const fct_init_game_1 = require("./fct_init_game/fct_init_game");
const fct_show_game_1 = require("./fct_show_game/fct_show_game");
const fct_attack_game_1 = require("./fct_attack_game/fct_attack_game");
const basic_game_customization_1 = require("./basic_game_customization");
/* const readline = require('readline-sync'); */
// Original
const player = require('./jsonObjectGame/players.json');
const enemies = require('./jsonObjectGame/enemies.json');
const bosses = require('./jsonObjectGame/bosses.json');
function ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies) {
    if (_enemies.hp <= 0) {
        NewEnemies = true;
        _enemies.hp = OriEnemies.hp;
        console.log(`${_enemies.name} died !`);
        return NewEnemies;
    }
}
function ReloadHpBoss(_boss, NewEnemies, OriBoss) {
    if (_boss.hp <= 0) {
        NewEnemies = true;
        _boss.hp = OriBoss.hp;
        console.log(`${_boss.name} died !`);
        return NewEnemies;
    }
}
function OptionInGame() {
    let res;
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Attack      2. Heal              ');
    do {
        res = Number(fct_show_game_1.readline.question('Your choice : '));
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
    const OriEnemies = Object.assign({}, _enemies);
    const OriBoss = Object.assign({}, _boss);
    let NewEnemies = true;
    let BossOrNot = false;
    console.log(`NbFight : ---- ${nbFight}`);
    /* ================ Boucle de jeu ================== */
    for (let i = 1; i <= nbFight; i += 1) {
        while (_enemies.hp > 1 && _boss.hp > 1) {
            console.log(`==================== FIGHT ${i}/${nbFight} ====================`);
            console.log(`valeur de NewEnmy ${NewEnemies}`);
            if (NewEnemies) {
                (0, fct_show_game_1.DisplayFight)(_enemies, _boss, i);
                NewEnemies = false;
            }
            BossOrNot = (0, basic_game_customization_1.ShowStatAndEnnemy)(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot, nbFight);
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
            NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies);
        }
        else {
            NewEnemies = ReloadHpBoss(_boss, NewEnemies, OriBoss);
        }
        Coins = (0, basic_game_customization_1.AddCoins)(Coins);
    }
}
function main() {
    // Initialisation Player
    const Player1 = (0, fct_init_game_1.InitPlayer)(player);
    // Begin
    const knowIfEndOrNotAndDifficulty = (0, basic_game_customization_1.initGameAndDifficulty)();
    console.log(knowIfEndOrNotAndDifficulty);
    if (knowIfEndOrNotAndDifficulty === 0)
        return;
    // Initialisation Enemies, Bosses
    const Enemies1 = (0, fct_init_game_1.InitEnemies)(enemies);
    const Boss1 = (0, fct_init_game_1.InitBoss)(bosses);
    const nbFight = (0, basic_game_customization_1.PlayerChoiceNbFight)();
    const Coins = (0, basic_game_customization_1.Generate12Coins)();
    (0, basic_game_customization_1.ChangeStatByDifficulty)(knowIfEndOrNotAndDifficulty, Enemies1);
    console.log(`test main si modif value ${JSON.stringify(Enemies1)}`);
    // display menu
    (0, basic_game_customization_1.DisplayBegin)(Player1, Coins);
    // In Fight
    InFight(Player1, Enemies1, Boss1, Coins, nbFight);
}
main();
