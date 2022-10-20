var readline = require('readline-sync');
var fs = require('fs');
var commandeDeChoix = [
    'Attaque', 'Soin',
];
function attackByEnnemy(i, initHpEnnemyEtBoss, initHpStrLink) {
    if (initHpEnnemyEtBoss[i].hp > 1) {
        initHpStrLink.hp -= initHpEnnemyEtBoss[i].str;
        console.log("".concat(initHpEnnemyEtBoss[i].name, " attaque."));
        if (initHpStrLink.hp > 0) {
            console.log("HP de Link apr\u00E8s avoir subit l'attaque : ".concat(initHpStrLink.hp));
        }
        else {
            console.log("".concat(initHpStrLink.name, " est mort."));
        }
    }
}
function attackDeLink(i, initHpEnnemyEtBoss, initHpStrLink) {
    initHpEnnemyEtBoss[i].hp -= initHpStrLink.str;
    if (initHpEnnemyEtBoss[i].hp <= 0) {
        if (initHpEnnemyEtBoss[i].id !== initHpEnnemyEtBoss.length) {
            console.log("".concat(initHpEnnemyEtBoss[i].name, " est mort."));
        }
        else {
            console.log("".concat(initHpEnnemyEtBoss[i].name, " est mort.\n Vous avez gagn\u00E9 ! \n Fin du jeu."));
        }
    }
}
function heal(Link, LinkStatOriginal) {
    var hpEnCours = Link.hp;
    if (Link.hp < LinkStatOriginal.hp) {
        Link.hp = hpEnCours + (LinkStatOriginal.hp / 2);
        if (Link.hp > LinkStatOriginal.hp) {
            Link.hp = LinkStatOriginal.hp;
        }
    }
    else {
        console.log('Vie au Maximum');
    }
    return Link;
}
function initHpLink() {
    var supaJson = fs.readFileSync('./Link.json', 'utf8');
    var res = JSON.parse(supaJson);
    return res[0];
}
/* function ShowHpEnnemy() {} */
function initialisationStateEnnemyEtBoss() {
    var supaJson = fs.readFileSync('./BokoblinGanon.json', 'utf8');
    var res = JSON.parse(supaJson);
    return res;
}
function linkIsDead(Link) {
    if (Link.hp < 1) {
        return true;
    }
}
function choixDuJoueur(i, Ennemies, Link, LinkStatOriginal) {
    var res = readline.keyInSelect(commandeDeChoix, 'Selectionner une action :');
    if (commandeDeChoix[res] === 'Attaque') {
        console.log("Tu attaques ".concat(Ennemies[i].name));
        attackDeLink(i, Ennemies, Link);
    }
    else if (commandeDeChoix[res] === 'Soin') {
        console.log('Tu te soignes');
        heal(Link, LinkStatOriginal);
    }
}
function afficherGlobal(i, Ennemies, Link) {
    console.log("================ Vos stats Etage ".concat(i + 1, " ===================="));
    console.log("Link : ".concat(Link.hp, "hp"));
    console.log("================ Stat Ennemie Etage ".concat(i + 1, " ================="));
    console.log("".concat(Ennemies[i].name, " : ").concat(Ennemies[i].hp, "hp"));
    console.log('===============================================');
}
function main() {
    /* console.log('you chose ' + index); */
    var Ennemies = initialisationStateEnnemyEtBoss();
    var Link = initHpLink();
    var LinkStatOriginal = initHpLink();
    for (var i = 0; i <= ((Ennemies.length - 1)); i += 1) {
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
