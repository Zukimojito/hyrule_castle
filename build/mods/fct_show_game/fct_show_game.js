"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayFight = exports.ShowStatPlayer = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatPlayer(_player, OriPlayer, Coins) {
    console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
    console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
    console.log(`Coins: ${Coins}`);
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayFight(_enemies, _boss, i) {
    if (i % 10 !== 0) {
        console.log('\x1b[33m%s\x1b[0m', `                        You encounter a ${_enemies.name}`);
    }
    else {
        console.log('\x1b[33m%s\x1b[0m', `                        You Encounter a ${_boss.name}`);
    }
}
exports.DisplayFight = DisplayFight;
