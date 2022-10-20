"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable consistent-return */
/* eslint-disable max-len */
var fct_init_game_1 = require("./fct_init_game/fct_init_game");
var fct_show_game_1 = require("./fct_show_game/fct_show_game");
var fct_attack_game_1 = require("./fct_attack_game/fct_attack_game");
/* const readline = require('readline-sync'); */
// Original
var player = require('./jsonObjectGame/players.json');
var enemies = require('./jsonObjectGame/enemies.json');
var bosses = require('./jsonObjectGame/bosses.json');
function ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies) {
    if (_enemies.hp <= 0) {
        NewEnemies = true;
        _enemies.hp = OriEnemies.hp;
        console.log("".concat(_enemies.name, " died !"));
        return NewEnemies;
    }
}
function OptionInGame() {
    var res;
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Attack      2. Heal              ');
    do {
        res = Number(fct_show_game_1.readline.question('Your choice : '));
    } while (res !== 1 && res !== 2);
    return res;
}
function HealGame(OriPlayer, _player) {
    console.log("You chose heal ! You heal yourself ".concat(OriPlayer.hp / 2, " HP"));
    _player.hp += (OriPlayer.hp / 2);
    if (_player.hp > OriPlayer.hp) {
        _player.hp = OriPlayer.hp;
    }
}
function InFight(_player, _enemies, _boss) {
    var OriPlayer = __assign({}, _player);
    var OriEnemies = __assign({}, _enemies);
    var OriBoss = __assign({}, _boss);
    var nbFight = 1;
    var NewEnemies = true;
    var BossOrNot = false;
    /* ================ Boucle de jeu ================== */
    for (var i = 1; i <= 10; i += 1) {
        while (_enemies.hp > 1) {
            console.log("==================== FIGHT ".concat(nbFight, " ===================="));
            console.log("valeur de NewEnmy ".concat(NewEnemies));
            if (NewEnemies) {
                (0, fct_show_game_1.DisplayFight)(_enemies);
                NewEnemies = false;
            }
            BossOrNot = (0, fct_show_game_1.ShowStatAndEnnemy)(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot);
            (0, fct_show_game_1.ShowStatPlayer)(_player, OriPlayer);
            var res = OptionInGame();
            if (res === 1) {
                var checkIfbossIsDie = (0, fct_attack_game_1.AttackByPlayer)(_player, _enemies, _boss, BossOrNot);
                if (checkIfbossIsDie)
                    return true;
            }
            else if (res === 2) {
                HealGame(OriPlayer, _player);
            }
            var checkIfPlayerIsGone = (0, fct_attack_game_1.AttackByEnnemy)(BossOrNot, _player, _enemies, _boss);
            if (checkIfPlayerIsGone)
                return;
            nbFight += 1;
        }
        NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies);
    }
}
function main() {
    // Initialisation Player, Enemies, Bosses
    var Player1 = (0, fct_init_game_1.InitPlayer)(player);
    var Enemies1 = (0, fct_init_game_1.InitEnemies)(enemies);
    var Boss1 = (0, fct_init_game_1.InitBoss)(bosses);
    // Begin
    (0, fct_show_game_1.DisplayBegin)(Player1);
    // In Fight
    InFight(Player1, Enemies1, Boss1);
}
main();
