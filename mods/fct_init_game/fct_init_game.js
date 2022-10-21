"use strict";
exports.__esModule = true;
exports.InitBoss = exports.InitEnemies = exports.InitPlayer = exports.getRandomInt = void 0;
function getRandomInt() {
    // Returns a random integer from 0 to 100:
    var random = Math.floor(Math.random() * 100) + 1;
    var arrayPlayerEnemiesBoss = 0;
    // console.log(random);
    if (random > 0 && random <= 50) {
        arrayPlayerEnemiesBoss = 1;
    }
    else if (random > 50 && random <= 80) {
        arrayPlayerEnemiesBoss = 2;
    }
    else if (random > 80 && random <= 95) {
        arrayPlayerEnemiesBoss = 3;
    }
    else if (random > 95 && random <= 99) {
        arrayPlayerEnemiesBoss = 4;
    }
    else if (random === 100) {
        arrayPlayerEnemiesBoss = 5;
    }
    return arrayPlayerEnemiesBoss;
}
exports.getRandomInt = getRandomInt;
/* const Rdinit = getRandomInt(); */
function InitPlayer(_player, Rdinit) {
    var CopyPlayer = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        int: 0,
        rarity: 0
    };
    _player.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyPlayer = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                int: el.int,
                rarity: el.rarity
            };
        }
    });
    return CopyPlayer;
}
exports.InitPlayer = InitPlayer;
function InitEnemies(_enemies, Rdinit) {
    var CopyEnemies = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        int: 0,
        rarity: 0
    };
    _enemies.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyEnemies = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                int: el.int,
                rarity: el.rarity
            };
        }
    });
    // eslint-disable-next-line consistent-return
    return CopyEnemies;
}
exports.InitEnemies = InitEnemies;
function InitBoss(_boss, Rdinit) {
    var CopyBoss = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        int: 0,
        rarity: 0
    };
    _boss.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyBoss = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                int: el.int,
                rarity: el.rarity
            };
        }
    });
    return CopyBoss;
}
exports.InitBoss = InitBoss;
