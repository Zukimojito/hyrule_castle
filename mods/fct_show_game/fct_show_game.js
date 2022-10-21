"use strict";
exports.__esModule = true;
exports.DisplayFight = exports.ShowStatPlayer = exports.ShowStatAndEnnemy = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot) {
    console.log('\n');
    if (i <= 9) {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_enemies.name, " (ennemies ").concat(i, ")"));
        console.log("HP: ".concat(_enemies.hp, " / ").concat(OriEnemies.hp));
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_boss.name, " (Boss)"));
        console.log("HP: ".concat(_boss.hp, " / ").concat(OriBoss.hp));
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
function ShowStatPlayer(_player, OriPlayer, Coins) {
    console.log('\x1b[32m%s\x1b[0m', "".concat(_player.name, " (player)"));
    console.log("HP: ".concat(_player.hp, " / ").concat(OriPlayer.hp));
    console.log("Coins: ".concat(Coins));
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayFight(_enemies) {
    console.log('\x1b[33m%s\x1b[0m', "You encounter a ".concat(_enemies.name));
}
exports.DisplayFight = DisplayFight;
