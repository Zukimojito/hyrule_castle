"use strict";
exports.__esModule = true;
exports.DisplayBegin = exports.initGameAndDifficulty = exports.chooseYourDifficulty = exports.sleep = exports.readline = void 0;
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
    console.log('            1. Start      2. Quit              ');
    do {
        res = Number(exports.readline.question('Your choice : '));
    } while (res !== 1 /* StartOrQuit.start */ && res !== 2 /* StartOrQuit.quit */);
    if (res === 1 /* StartOrQuit.start */) {
        return 1 /* StartOrQuit.start */;
    }
    if (res === 2 /* StartOrQuit.quit */) {
        return 2 /* StartOrQuit.quit */;
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
    } while (resDifficulty !== 1 /* Difficulty.normal */ && resDifficulty !== 2 /* Difficulty.difficult */ && resDifficulty !== 3 /* Difficulty.insane */);
    switch (resDifficulty) {
        case 1 /* Difficulty.normal */: return 1 /* Difficulty.normal */;
        case 2 /* Difficulty.difficult */: return 2 /* Difficulty.difficult */;
        case 3 /* Difficulty.insane */: return 3 /* Difficulty.insane */;
        default:
    }
}
exports.chooseYourDifficulty = chooseYourDifficulty;
// eslint-disable-next-line consistent-return
function initGameAndDifficulty() {
    var res = ChooseStartOrQuit();
    if (res === 1 /* StartOrQuit.start */) {
        return chooseYourDifficulty();
    }
    if (res === 2 /* StartOrQuit.quit */) {
        console.log('vous avez quitté le jeu');
        sleep(1000);
        return 'quit';
    }
}
exports.initGameAndDifficulty = initGameAndDifficulty;
function DisplayBegin(_player) {
    var OriPlayer = _player;
    console.log('========================================');
    console.log('\x1b[32m%s\x1b[0m', "Your character is ".concat(_player.name, "."));
    console.log('========================================');
    console.log('Your stats : ');
    console.log("HP : ".concat(_player.hp, " / ").concat(OriPlayer.hp));
    console.log("STR : ".concat(_player.str));
    console.log('========================================');
    exports.readline.keyIn('Press Any Key to Start the game : ');
    console.log('\n');
}
exports.DisplayBegin = DisplayBegin;
