"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayFight = exports.ShowStatPlayer = exports.ShowStatAndEnnemy = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot) {
    console.log('\n');
    if (i <= 9) {
        console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);
        console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
        console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
function ShowStatPlayer(_player, OriPlayer, Coins) {
    console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
    console.log(`HP: ${_player.hp} / ${OriPlayer.hp}`);
    console.log(`Coins: ${Coins}`);
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayFight(_enemies) {
    console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
}
exports.DisplayFight = DisplayFight;
