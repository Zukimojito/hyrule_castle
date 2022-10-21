"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackByEnnemy = exports.AttackByPlayer = void 0;
function AttackByPlayer(_player, _enemies, _boss, BossOrNot, nbFight, i) {
    console.log('==================== INFOS ====================');
    console.log(`You attacked and dealt ${_player.str} damages !`);
    if (!BossOrNot) {
        console.log(`${_enemies.name} attacked and deal ${_enemies.str} damages !`);
        _enemies.hp -= _player.str;
    }
    else {
        console.log(`${_boss.name} attacked and deal ${_boss.str} damages !`);
        _boss.hp -= _player.str;
        if (_boss.hp <= 0) {
            console.log(`${_boss.name} died ! Congratulation, the game is done.`);
            return true;
        }
    }
    console.log('\n');
}
exports.AttackByPlayer = AttackByPlayer;
function AttackByEnnemy(BossOrNot, _player, _enemies, _boss) {
    if (!BossOrNot) {
        _player.hp -= _enemies.str;
        if (_player.hp <= 0) {
            console.log(`${_player.name} died !`);
            return true;
        }
    }
    else {
        _player.hp -= _boss.str;
        if (_player.hp <= 0) {
            console.log(`${_player.name} died !`);
            return true;
        }
    }
}
exports.AttackByEnnemy = AttackByEnnemy;
