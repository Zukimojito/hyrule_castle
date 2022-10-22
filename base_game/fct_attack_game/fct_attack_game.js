"use strict";
exports.__esModule = true;
exports.AttackByEnnemy = exports.AttackByPlayer = void 0;
var figlet = require('figlet');
function AttackByPlayer(_player, _enemies, _boss, BossOrNot) {
    console.log('==================== INFOS ====================');
    console.log("You attacked and dealt ".concat(_player.str, " damages !"));
    if (!BossOrNot) {
        console.log("".concat(_enemies.name, " attacked and deal ").concat(_enemies.str, " damages !"));
        _enemies.hp -= _player.str;
    }
    else {
        console.log("".concat(_boss.name, " attacked and deal ").concat(_boss.str, " damages !"));
        _boss.hp -= _player.str;
        if (_boss.hp <= 0) {
            console.log(figlet.textSync("".concat(_boss.name, " died !\n Congratulation\n The game is done."), {
                horizontalLayout: 'full',
                verticalLayout: 'full'
            }));
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
            console.log("".concat(_player.name, " died !"));
            return true;
        }
    }
    else {
        _player.hp -= _boss.str;
        if (_player.hp <= 0) {
            console.log("".concat(_player.name, " died !"));
            return true;
        }
    }
}
exports.AttackByEnnemy = AttackByEnnemy;
