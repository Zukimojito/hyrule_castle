"use strict";
exports.__esModule = true;
exports.ChangeStatByDifficulty = exports.DisplayBegin = exports.AddCoins = exports.Generate12Coins = exports.initGameAndDifficulty = exports.chooseYourDifficulty = exports.sleep = exports.readline = void 0;
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
    console.log('------Start the game or Quit the game :---------');
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Start      0. Quit              ');
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
    console.log('--------- Choose your difficulty :----------------');
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Normal      2. Difficult      3. Insane         ');
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
    return coins;
}
exports.AddCoins = AddCoins;
function DisplayBegin(_player, Coins) {
    var OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', "Your character is ".concat(_player.name, "."));
    console.log('========================================');
    console.log('Your stats : ');
    console.log("HP : ".concat(_player.hp, " / ").concat(OriPlayer.hp));
    console.log("STR : ".concat(_player.str));
    console.log("Your receive ".concat(Coins, " coins"));
    console.log('========================================');
    exports.readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
function ChangeStatByDifficulty(difficulty, _ennemy) {
    console.log("$test 1 voir obj enemy ".concat(JSON.stringify(_ennemy)));
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
