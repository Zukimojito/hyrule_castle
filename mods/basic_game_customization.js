"use strict";
exports.__esModule = true;
exports.DisplayBegin = exports.sleep = exports.readline = void 0;
exports.readline = require('readline-sync');
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
exports.sleep = sleep;
function DisplayBegin(_player) {
    var res;
    var OriPlayer = _player;
    console.log('------Start the game or Quit the game :---------');
    console.log('-------------------- OPTION --------------------');
    console.log('            1. Start      2. Quit              ');
    do {
        res = Number(exports.readline.question('Your choice : '));
    } while (res !== 1 && res !== 2);
    if (res === 1) {
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
    if (res === 2) {
        console.log('vous avez quitté le jeu');
        sleep(5000);
        return true;
    }
}
exports.DisplayBegin = DisplayBegin;
