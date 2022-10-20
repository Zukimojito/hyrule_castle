"use strict";
exports.__esModule = true;
/* eslint-disable no-plusplus */
var readline = require('readline-sync');
var fs = require('fs');
function AttackByEnnemy(i, initHpEnnemyEtBoss, initHpStrLink) {
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
function AttackDeLink(i, initHpEnnemyEtBoss, initHpStrLink) {
    initHpEnnemyEtBoss[i].hp -= initHpStrLink.str;
    if (initHpEnnemyEtBoss[i].hp > 0) {
        console.log("".concat(initHpEnnemyEtBoss[i].name, " HP: ").concat(initHpEnnemyEtBoss[i].hp));
    }
    else {
        console.log("".concat(initHpEnnemyEtBoss[i].name, " est mort."));
    }
}
function Heal(Link) {
    var hpEnCours = Link.hp;
    if (Link.hp < 60) {
        Link.hp = hpEnCours + 30;
        if (Link.hp > 60) {
            Link.hp = 60;
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
function LinkIsDead(Link) {
    if (Link.hp < 1) {
        return true;
    }
}
function ChoixDuJoueur(i, Ennemies, Link) {
    var res = readline.keyInYN('Tu veux attaquer ? Y = Attaque, N = Soin');
    if (res === true) {
        console.log('Tu attaques l\'ennemies');
        AttackDeLink(i, Ennemies, Link);
    }
    else {
        console.log('Tu te soignes');
        Heal(Link);
    }
}
function main() {
    /* console.log('you chose ' + index); */
    var Ennemies = initialisationStateEnnemyEtBoss();
    var Link = initHpLink();
    for (var i = 9; i <= 9; i += 1) {
        console.log("==== FIGHT ".concat(i + 1, " ===="));
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
