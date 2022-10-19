"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const players_json_1 = __importDefault(require("./players.json"));
const enemies_json_1 = __importDefault(require("./enemies.json"));
const bosses_json_1 = __importDefault(require("./bosses.json"));
let nbFight = 1;
let res;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const enemiesRandom = getRandomInt(enemies_json_1.default.length);
const bossesRandom = getRandomInt(bosses_json_1.default.length);
// console.log(enemies[enemiesRandom].name);
// console.log(bosses[bossesRandom].name);
// console.log(player[0].name);
while (bosses_json_1.default[bossesRandom].hp >= 0) {
    if (nbFight % 2 === 1) {
        console.log(`========== FIGHT ${nbFight} ==========`);
        console.log('\x1b[31m%s\x1b[0m', `${enemies_json_1.default[enemiesRandom].name} (ennemies)`);
        console.log(`HP: ${enemies_json_1.default[enemiesRandom].hp} `);
        console.log('\x1b[32m%s\x1b[0m', `${players_json_1.default[0].name} (player)`);
        console.log(`HP: ${players_json_1.default[0].hp} `);
        res = readline_sync_1.default.question('Hello ? ');
        console.log(res);
    }
    else {
        console.log(`========== FIGHT ${nbFight} ==========`);
        console.log();
    }
    nbFight += 1;
}
