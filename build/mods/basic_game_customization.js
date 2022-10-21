"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowStatAndEnnemy = exports.PlayerChoiceNbFight = exports.ChangeStatByDifficulty = exports.DisplayBegin = exports.AddCoins = exports.Generate12Coins = exports.initGameAndDifficulty = exports.chooseYourDifficulty = exports.sleep = exports.readline = void 0;
exports.readline = require('readline-sync');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
exports.sleep = sleep;
function ChooseStartOrQuit() {
    let res;
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
    console.log('-------------------- OPTION ----------------------');
    console.log('            1. Normal      2. Difficult      3. Insane         ');
    let resDifficulty;
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
    const res = ChooseStartOrQuit();
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
    const coins = 12;
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
    const OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', `Your character is ${_player.name}.`);
    console.log('========================================');
    console.log('Your stats : ');
    console.log(`HP : ${_player.hp} / ${OriPlayer.hp}`);
    console.log(`STR : ${_player.str}`);
    console.log(`Your receive ${Coins} coins`);
    console.log('========================================');
    exports.readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
function ChangeStatByDifficulty(difficulty, _ennemy) {
    console.log(`$test 1 voir obj enemy ${JSON.stringify(_ennemy)}`);
    let coefMultiOfStat = 0;
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
    console.log('--------- Choose your number of fights :----------------');
    console.log('-------------------- OPTION ----------------------');
    console.log('Option [1] : 10 Fight ');
    console.log('Option [2] : 20 Fight ');
    console.log('Option [3] : 50 Fight ');
    console.log('Option [4] : 100 Fight ');
    let valeur;
    do {
        valeur = Number(exports.readline.question(''));
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
function ShowStatAndEnnemy(i, _enemies, _player, _boss, OriEnemies, OriBoss, BossOrNot, nbFight) {
    console.log('\n');
    if (i % 10 !== 0) {
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
