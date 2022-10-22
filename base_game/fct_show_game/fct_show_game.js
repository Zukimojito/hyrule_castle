"use strict";
exports.__esModule = true;
exports.DisplayFight = exports.DisplayBegin = exports.ShowStatPlayer = exports.ShowStatAndEnnemy = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot) {
    console.log('\n');
    var visualHpEnnemy = '▯'.repeat(_enemies.hp);
    if (i <= 9) {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_enemies.name, " (ennemies ").concat(i, ")"));
        console.log("HP: ".concat(_enemies.hp, " / ").concat(OriEnemies.hp));
        console.log("".concat(visualHpEnnemy));
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_boss.name, " (Boss)"));
        console.log("HP: ".concat(_boss.hp, " / ").concat(OriBoss.hp));
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
function ShowStatPlayer(_player, OriPlayer) {
    console.log('\x1b[32m%s\x1b[0m', "".concat(_player.name, " (player)"));
    console.log("\u001B[41mHP: ".concat(_player.hp, " / ").concat(OriPlayer.hp, "\u001B[0m"));
    var visualHPPlayer = '▱'.repeat(_player.hp);
    console.log("\u001B[36m".concat(visualHPPlayer, "\u001B[0m"));
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayBegin(_player) {
    var OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', "Your character is ".concat(_player.name, "."));
    console.log('========================================');
    console.log('Your stats : ');
    console.log("\u001B[44mHP : ".concat(_player.hp, " / ").concat(OriPlayer.hp, "\u001B[0m"));
    console.log("\u001B[33mSTR : ".concat(_player.str, " \u001B[0m"));
    console.log('========================================');
    exports.readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
function DisplayFight(_enemies, _boss, i) {
    if (i % 10 !== 0) {
        console.log('\x1b[33m%s\x1b[0m', "You encounter a ".concat(_enemies.name));
    }
    else {
        console.log('\x1b[33m%s\x1b[0m', "You Encounter a ".concat(_boss.name));
    }
}
exports.DisplayFight = DisplayFight;
