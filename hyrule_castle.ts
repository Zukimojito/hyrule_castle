import readline from 'readline-sync';
import player from './players.json';
import enemies from './enemies.json';
import bosses from './bosses.json';

let nbFight = 1;
let res;
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const enemiesRandom = getRandomInt(enemies.length);
const bossesRandom = getRandomInt(bosses.length);

// console.log(enemies[enemiesRandom].name);
// console.log(bosses[bossesRandom].name);
// console.log(player[0].name);

while (bosses[bossesRandom].hp >= 0) {
  if (nbFight % 2 === 1) {
    console.log(`========== FIGHT ${nbFight} ==========`);
    console.log('\x1b[31m%s\x1b[0m', `${enemies[enemiesRandom].name} (ennemies)`);
    console.log(`HP: ${enemies[enemiesRandom].hp} `);
    console.log('\x1b[32m%s\x1b[0m', `${player[0].name} (player)`);
    console.log(`HP: ${player[0].hp} `);
    res = readline.question('Hello ? ');
    console.log(res);
  } else {
    console.log(`========== FIGHT ${nbFight} ==========`);
    console.log();
  }

  nbFight += 1;
}
