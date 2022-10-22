"use strict";
exports.__esModule = true;
exports.DisplayFight = exports.ShowStatPlayer = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatPlayer(_player, OriPlayer, Coins) {
    console.log('\x1b[32m%s\x1b[0m', "".concat(_player.name, " (player)"));
    console.log("\u001B[41mHP: ".concat(_player.hp, " / ").concat(OriPlayer.hp, "\u001B[0m"));
    var visualHPPlayer = '▱'.repeat(_player.hp);
    console.log(visualHPPlayer);
    console.log("Coins: ".concat(Coins));
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayFight(_enemies, _boss, i) {
    if (i % 10 !== 0) {
        console.log('\x1b[33m%s\x1b[0m', "                        You encounter a ".concat(_enemies.name));
    }
    else {
        console.log('\x1b[33m%s\x1b[0m', "                        You Encounter a ".concat(_boss.name));
    }
}
exports.DisplayFight = DisplayFight;
