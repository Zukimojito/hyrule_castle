const readline = require('readline-sync');
const fs = require('fs');

const commandeDeChoix = [
  'Attaque', 'Soin',
];

interface Stat {
  id: number,
  name: string,
  hp: number,
  str: number
}

function attackByEnnemy(i: number, initHpEnnemyEtBoss: Stat[], initHpStrLink: Stat) {
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

function attackDeLink(i: number, initHpEnnemyEtBoss: Stat[], initHpStrLink: Stat) {
  initHpEnnemyEtBoss[i].hp -= initHpStrLink.str;
  if (initHpEnnemyEtBoss[i].hp <= 0) {
    if (initHpEnnemyEtBoss[i].id !== initHpEnnemyEtBoss.length) {
      console.log(`${initHpEnnemyEtBoss[i].name} est mort.`);
    } else { console.log(`${initHpEnnemyEtBoss[i].name} est mort.\n Vous avez gagné ! \n Fin du jeu.`); }
  }
}

function heal(Link: Stat, LinkStatOriginal: Stat) {
  const hpEnCours = Link.hp;
  if (Link.hp < LinkStatOriginal.hp) {
    Link.hp = hpEnCours + (LinkStatOriginal.hp / 2);
    if (Link.hp > LinkStatOriginal.hp) {
      Link.hp = LinkStatOriginal.hp;
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

/* function ShowHpEnnemy() {} */

function initialisationStateEnnemyEtBoss() {
  const supaJson = fs.readFileSync('./BokoblinGanon.json', 'utf8');
  const res: Stat[] = JSON.parse(supaJson);
  return res;
}

function linkIsDead(Link: Stat) {
  if (Link.hp < 1) {
    return true;
  }
}

function choixDuJoueur(i: number, Ennemies: Stat[], Link: Stat, LinkStatOriginal: Stat) {
  const res = readline.keyInSelect(commandeDeChoix, 'Selectionner une action :');
  if (commandeDeChoix[res] === 'Attaque') {
    console.log(`Tu attaques ${Ennemies[i].name}`);
    attackDeLink(i, Ennemies, Link);
  } else if (commandeDeChoix[res] === 'Soin') {
    console.log('Tu te soignes');
    heal(Link, LinkStatOriginal);
  }
}

function afficherGlobal(i: number, Ennemies: Stat[], Link: Stat) {
  console.log(`================ Vos stats Etage ${i + 1} ====================`);
  console.log(`Link : ${Link.hp}hp`);
  console.log(`================ Stat Ennemie Etage ${i + 1} =================`);
  console.log(`${Ennemies[i].name} : ${Ennemies[i].hp}hp`);
  console.log('===============================================');
}

function main() {
  /* console.log('you chose ' + index); */
  const Ennemies: Stat[] = initialisationStateEnnemyEtBoss();
  const Link: Stat = initHpLink();
  const LinkStatOriginal: Stat = initHpLink();
  for (let i = 0; i <= ((Ennemies.length - 1)); i += 1) {
    while (Ennemies[i].hp > 1 && Link.hp > 1) {
      afficherGlobal(i, Ennemies, Link);
      if (linkIsDead(Link)) {
        return;
      }
      choixDuJoueur(i, Ennemies, Link, LinkStatOriginal);
      attackByEnnemy(i, Ennemies, Link);
    }
  }
}

main();
