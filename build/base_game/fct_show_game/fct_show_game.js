"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayFight = exports.DisplayBegin = exports.ShowStatPlayer = exports.ShowStatAndEnnemy = exports.readline = void 0;
exports.readline = require('readline-sync');
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot) {
    console.log('\n');
    const visualHpEnnemy = '▯'.repeat(_enemies.hp);
    if (i <= 9) {
        console.log('\x1b[31m%s\x1b[0m', `${_enemies.name} (ennemies ${i})`);
        console.log(`HP: ${_enemies.hp} / ${OriEnemies.hp}`);
        console.log(`${visualHpEnnemy}`);
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', `${_boss.name} (Boss)`);
        console.log(`HP: ${_boss.hp} / ${OriBoss.hp}`);
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
function ShowStatPlayer(_player, OriPlayer) {
    console.log('\x1b[32m%s\x1b[0m', `${_player.name} (player)`);
    console.log(`\x1b[41mHP: ${_player.hp} / ${OriPlayer.hp}\x1b[0m`);
    const visualHPPlayer = '▱'.repeat(_player.hp);
    console.log(`\x1b[36m${visualHPPlayer}\x1b[0m`);
}
exports.ShowStatPlayer = ShowStatPlayer;
function DisplayBegin(_player) {
    const OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
    console.log('========================================');
    console.log('Your stats : ');
    console.log(`\x1b[44mHP : ${_player.hp} / ${OriPlayer.hp}\x1b[0m`);
    console.log(`\x1b[33mSTR : ${_player.str} \x1b[0m`);
    console.log('========================================');
    exports.readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
function DisplayFight(_enemies, _boss, i) {
    if (i % 10 !== 0) {
        console.log('\x1b[33m%s\x1b[0m', `You encounter a ${_enemies.name}`);
    }
    else {
        console.log('\x1b[33m%s\x1b[0m', `You Encounter a ${_boss.name}`);
    }
}
exports.DisplayFight = DisplayFight;
