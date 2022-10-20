"use strict";
exports.__esModule = true;
/* eslint-disable no-plusplus */
var readline = require('readline-sync');
var fs = require('fs');
function AttackByEnnemy(i, initHpEnnemyEtBoss, initHpStrLink) {
    initHpStrLink.hp -= initHpEnnemyEtBoss[i].str;
    console.log("".concat(initHpEnnemyEtBoss[i].name, " attaque."));
    console.log("HP de Link apr\u00E8s avoir subit l'attaque : ".concat(initHpStrLink.hp));
}
function AttackLink(i, initHpEnnemyEtBoss, initHpStrLink) {
    initHpEnnemyEtBoss[i].hp -= initHpStrLink.str;
    console.log("".concat(initHpEnnemyEtBoss[i].name, " HP: ").concat(initHpEnnemyEtBoss[i].hp));
}
function Heal(Link) {
    console.log(Link.hp);
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
function main() {
    /* console.log('you chose ' + index); */
    var Ennemies = initialisationStateEnnemyEtBoss();
    var Link = initHpLink();
    for (var i = 9; i <= 9; i += 1) {
        console.log(i);
        console.log("==== FIGHT ".concat(i + 1, " ===="));
        while (Ennemies[i].hp >= 0 && Link.hp >= 0) {
            var res = readline.keyInYN('Tu veux attaquer ? Y = Attaque, N = Soin');
            if (res === true) {
                console.log('Tu attaques l\'ennemies');
                AttackLink(i, Ennemies, Link);
                if (Ennemies[i].hp < 1) {
                    console.log('Tu as vaincu ton ennemi ! Prochain combat !');
                }
            }
            else {
                console.log('Tu te soignes');
                Heal(Link);
            }
            if (Ennemies[i].hp > 1) {
                AttackByEnnemy(i, Ennemies, Link);
            }
        }
    }
}
main();
