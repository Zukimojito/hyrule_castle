"use strict";
exports.__esModule = true;
exports.ShowStatAndEnnemy = exports.PlayerChoiceNbFight = exports.ChangeStatByDifficulty = exports.DisplayBegin = exports.AddCoins = exports.Generate12Coins = exports.initGameAndDifficulty = exports.chooseYourDifficulty = exports.sleep = exports.readline = void 0;
var figlet = require('figlet');
exports.readline = require('readline-sync');
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
exports.sleep = sleep;
function ChooseStartOrQuit() {
    var res;
    console.log('\x1b[34m%s\x1b[0m', '\n--------------------- Start the game or Quit the game : ---------------------');
    console.log('\x1b[34m%s\x1b[0m', '---------------------------------- OPTION -----------------------------------');
    console.log('\x1b[34m%s\x1b[0m', '                           1. Start      0. Quit                            ');
    do {
        res = Number(exports.readline.question('Your choice : '));
    } while (res !== 1 && res !== 0);
    if (res === 1) {
        return 1;
    }
    if (res === 0) {
        return 0;
    }
}
// eslint-disable-next-line consistent-return
function chooseYourDifficulty() {
    console.log('\x1b[34m%s\x1b[0m', '\n------------------------- Choose your difficulty : --------------------------');
    console.log('\x1b[34m%s\x1b[0m', '----------------------------------- OPTION ----------------------------------');
    console.log('\x1b[32m', '      1. Normal      ', '\x1b[0m', '\x1b[31m', '      2. Difficult      ', '\x1b[0m', '\x1b[35m', '      3. Insane      ', '\x1b[0m');
    var resDifficulty;
    do {
        resDifficulty = Number(exports.readline.question('Your choice : '));
        // eslint-disable-next-line max-len
    } while (resDifficulty !== 1 && resDifficulty !== 2 && resDifficulty !== 3);
    switch (resDifficulty) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        default:
    }
}
exports.chooseYourDifficulty = chooseYourDifficulty;
// eslint-disable-next-line consistent-return
function initGameAndDifficulty() {
    var res = ChooseStartOrQuit();
    if (res === 1) {
        return chooseYourDifficulty();
    }
    if (res === 0) {
        console.log('vous avez quitté le jeu');
        return 0;
    }
}
exports.initGameAndDifficulty = initGameAndDifficulty;
function Generate12Coins() {
    var coins = 12;
    return coins;
}
exports.Generate12Coins = Generate12Coins;
function AddCoins(coins) {
    coins += 1;
    console.log('\x1b[36m%s\x1b[0m', 'You have gained 1 coin !');
    return coins;
}
exports.AddCoins = AddCoins;
function DisplayBegin(_player, Coins) {
    var OriPlayer = _player;
    console.log('\n=============================================================================');
    console.log('\x1b[32m%s\x1b[0m', figlet.textSync("Your character is ".concat(_player.name, "."), { fontSize: 10 }));
    // console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
    console.log('=============================================================================');
    console.log('Your information : ');
    console.log('\x1b[32m%s\x1b[0m', "HP : ".concat(_player.hp, " / ").concat(OriPlayer.hp));
    console.log("STR : ".concat(_player.str));
    console.log("Your receive ".concat(Coins, " coins"));
    console.log('=============================================================================');
    exports.readline.keyIn('                   Press Any Key to Start the game ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
function ChangeStatByDifficulty(difficulty, _ennemy) {
    var coefMultiOfStat = 0;
    switch (difficulty) {
        case 1:
            coefMultiOfStat = 1;
            break;
        case 2:
            coefMultiOfStat = 3 / 2;
            break;
        case 3:
            coefMultiOfStat = 2;
            break;
        default:
    }
    _ennemy.hp *= coefMultiOfStat;
    _ennemy.str *= coefMultiOfStat;
    // eslint-disable-next-line consistent-return
    return _ennemy;
}
exports.ChangeStatByDifficulty = ChangeStatByDifficulty;
function PlayerChoiceNbFight() {
    console.log('\x1b[34m%s\x1b[0m', '\n---------------------- Choose your number of fights : -----------------------');
    console.log('\x1b[34m%s\x1b[0m', '---------------------------------- OPTION -----------------------------------');
    console.log('\x1b[32m%s', 'Option [1] : 10 Fight ', '\x1b[0m', '\x1b[33m', '                             Option [2] : 20 Fight ', ' \x1b[0m');
    console.log('\x1b[31m%s', 'Option [3] : 50 Fight ', '\x1b[0m', '\x1b[35m', '                             Option [4] : 100 Fight ', ' \x1b[0m');
    var valeur;
    do {
        valeur = Number(exports.readline.question('Your choice : '));
    } while (valeur !== 1 && valeur !== 2 && valeur !== 3 && valeur !== 4);
    // eslint-disable-next-line default-case
    switch (valeur) {
        case 1:
            valeur = 10;
            break;
        case 2:
            valeur = 20;
            break;
        case 3:
            valeur = 50;
            break;
        case 4:
            valeur = 50;
            break;
        default:
    }
    return valeur;
}
exports.PlayerChoiceNbFight = PlayerChoiceNbFight;
function ShowStatAndEnnemy(i, _enemies, _player, _boss, BossOrNot) {
    var visualHpEnnemy = '□'.repeat(_enemies.hp);
    var visualHpBoss = '▯'.repeat(_boss.hp);
    if (i % 10 !== 0) {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_enemies.name, " (ennemies ").concat(i, ")"));
        console.log("HP: ".concat(_enemies.hp, " / ").concat(_enemies.hp));
        console.log(visualHpEnnemy);
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "".concat(_boss.name, " (Boss)"));
        console.log("HP: ".concat(_boss.hp, " / ").concat(_boss.hp));
        console.log(visualHpBoss);
        BossOrNot = true;
        return BossOrNot;
    }
}
exports.ShowStatAndEnnemy = ShowStatAndEnnemy;
