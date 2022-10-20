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
/* eslint-disable consistent-return */
/* eslint-disable max-len */
var readline = require('readline-sync');
// Original
var player = require('./players.json');
var enemies = require('./enemies.json');
var bosses = require('./bosses.json');
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
var Rdinit = getRandomInt();
function InitPlayer(_player) {
    var CopyPlayer = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        rarity: 0
    };
    _player.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyPlayer = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                rarity: el.rarity
            };
        }
    });
    return CopyPlayer;
}
function InitEnemies(_enemies) {
    var CopyEnemies = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        rarity: 0
    };
    _enemies.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyEnemies = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                rarity: el.rarity
            };
        }
    });
    return CopyEnemies;
}
function InitBoss(_boss) {
    var CopyBoss = {
        id: 0,
        name: '',
        hp: 0,
        str: 0,
        rarity: 0
    };
    _boss.forEach(function (el) {
        if (el.rarity === Rdinit) {
            CopyBoss = {
                id: el.id,
                name: el.name,
                hp: el.hp,
                str: el.str,
                rarity: el.rarity
            };
        }
    });
    return CopyBoss;
}
function ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies) {
    if (_enemies.hp <= 0) {
        NewEnemies = true;
        _enemies.hp = OriEnemies.hp;
        console.log("".concat(_enemies.name, " died !"));
        return NewEnemies;
    }
}
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
function ShowStatPlayer(_player, OriPlayer) {
    console.log('\x1b[32m%s\x1b[0m', "".concat(_player.name, " (player)"));
    console.log("HP: ".concat(_player.hp, " / ").concat(OriPlayer.hp));
}
function DisplayBegin(_player) {
    var OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', "Your character is ".concat(_player.name, "."));
    console.log('========================================');
    console.log('Your stats : ');
    console.log("HP : ".concat(_player.hp, " / ").concat(OriPlayer.hp));
    console.log("STR : ".concat(_player.str));
    console.log('========================================');
    readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
function OptionInGame() {
    var res;
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Attack      2. Heal              ');
    do {
        res = Number(readline.question('Your choice : '));
    } while (res !== 1 && res !== 2);
    return res;
}
function DisplayFight(_enemies) {
    console.log('\x1b[33m%s\x1b[0m', "You encounter a ".concat(_enemies.name));
}
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
            console.log("".concat(_boss.name, " died ! Congratulation, the game is done."));
            return true;
        }
    }
    console.log('\n');
}
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
        console.log("nombre de boucle actuelLLLLLLLLLLLLLLLLLLE : ".concat(i));
        while (_enemies.hp > 1) {
            console.log("==================== FIGHT ".concat(nbFight, " ===================="));
            console.log("valeur de NewEnmy ".concat(NewEnemies));
            if (NewEnemies) {
                DisplayFight(_enemies);
                NewEnemies = false;
            }
            BossOrNot = ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot);
            ShowStatPlayer(_player, OriPlayer);
            var res = OptionInGame();
            if (res === 1) {
                var checkIfbossIsDie = AttackByPlayer(_player, _enemies, _boss, BossOrNot);
                if (checkIfbossIsDie)
                    return true;
            }
            else if (res === 2) {
                /*         console.log(`You chose heal ! You heal yourself ${OriPlayer.hp / 2} HP`);
                _player.hp += (OriPlayer.hp / 2);
                if (_player.hp > OriPlayer.hp) {
                  _player.hp = OriPlayer.hp;
                } */ HealGame(OriPlayer, _player);
            }
            var checkIfPlayerIsGone = AttackByEnnemy(BossOrNot, _player, _enemies, _boss);
            if (checkIfPlayerIsGone)
                return;
            nbFight += 1;
        }
        NewEnemies = ReloadHpEnnemy(_enemies, NewEnemies, OriEnemies);
    }
}
function main() {
    // Initialisation Player, Enemies, Bosses
    var Player1 = InitPlayer(player);
    var Enemies1 = InitEnemies(enemies);
    var Boss1 = InitBoss(bosses);
    // Begin
    DisplayBegin(Player1);
    // In Fight
    InFight(Player1, Enemies1, Boss1);
}
main();
