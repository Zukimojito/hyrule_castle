import { link } from 'fs/promises';

/* eslint-disable no-plusplus */
const readline = require('readline-sync');
const fs = require('fs');

/* const index = readline.keyInSelect([
  'optiçon 1',
  'option 2',
  'option 3',
  'option 4',
  'option 5',
  'option 6',
  'option 7',
  'option 8',
  'option 9',
  'option 10',
  'option 11',
  'option 12',
  'option 13',
  'option 14',
  'option 15',
  'option 16',
  'option 17',
  'option 18',
  'option 19',
  'option 20',
  'option 21',
  'option 22',
  'option 23',
  'option 24',
  'option 25',
  'option 26',
  'option 27',
  'option 28',
  'option 29',
  'option 30',
  'option 31',
  'option 32',
  'option 33',
  'option 34',
  'option 35',
]); */

interface Stat {
  id: number,
  name: string,
  hp: number,
  str: number
}

function AttackByEnnemy(i: number, initHpEnnemyEtBoss: Stat[], initHpStrLink: Stat) {
  if (initHpEnnemyEtBoss[i].hp > 1) {
    initHpStrLink.hp -= initHpEnnemyEtBoss[i].str;
    console.log(`${initHpEnnemyEtBoss[i].name} attaque.`);
    if (initHpStrLink.hp > 0) {
      console.log(`HP de Link après avoir subit l'attaque : ${initHpStrLink.hp}`);
    } else {
      console.log(`${initHpStrLink.name} est mort.`);
    }
  }
}

function AttackDeLink(i: number, initHpEnnemyEtBoss: Stat[], initHpStrLink: Stat) {
  initHpEnnemyEtBoss[i].hp -= initHpStrLink.str;
  if (initHpEnnemyEtBoss[i].hp > 0) {
    console.log(`${initHpEnnemyEtBoss[i].name} HP: ${initHpEnnemyEtBoss[i].hp}`);
  } else {
    console.log(`${initHpEnnemyEtBoss[i].name} est mort.`);
  }
}

function Heal(Link: Stat) {
  const hpEnCours = Link.hp;
  if (Link.hp < 60) {
    Link.hp = hpEnCours + 30;
    if (Link.hp > 60) {
      Link.hp = 60;
    }
  } else {
    console.log('Vie au Maximum');
  }
  return Link;
}

function initHpLink() {
  const supaJson = fs.readFileSync('./Link.json', 'utf8');
  const res = JSON.parse(supaJson);
  return res[0];
}

function initialisationStateEnnemyEtBoss() {
  const supaJson = fs.readFileSync('./BokoblinGanon.json', 'utf8');
  const res: Stat[] = JSON.parse(supaJson);
  return res;
}

function LinkIsDead(Link: Stat) {
  if (Link.hp < 1) {
    return true;
  }
}

function ChoixDuJoueur(i: number, Ennemies: Stat[], Link: Stat) {
  const res = readline.keyInYN('Tu veux attaquer ? Y = Attaque, N = Soin');
  if (res === true) {
    console.log('Tu attaques l\'ennemies');
    AttackDeLink(i, Ennemies, Link);
  } else {
    console.log('Tu te soignes');
    Heal(Link);
  }
}

function main() {
  /* console.log('you chose ' + index); */
  const Ennemies: Stat[] = initialisationStateEnnemyEtBoss();
  const Link: Stat = initHpLink();
  for (let i = 9; i <= 9; i += 1) {
    console.log(`==== FIGHT ${i + 1} ====`);
    while (Ennemies[i].hp > 1 && Link.hp > 1) {
      if (LinkIsDead(Link)) {
        return;
      }
      ChoixDuJoueur(i, Ennemies, Link);
      AttackByEnnemy(i, Ennemies, Link);
    }
  }
}

main();
