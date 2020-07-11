const fs = require('fs');
const readlineSync = require('readline-sync');
let rawdata = fs.readFileSync('heroes.json');
let heroes = JSON.parse(rawdata);
function number(){
    while(true) {
        let x = readlineSync.question();
        const parsed = Number.parseInt(x);
        if (Number.isNaN(parsed)) {
            console.log("Dana statystyka musi być liczba");
        }else{
        return x;
        }
    }

}
function newHero() {
    let name = readlineSync.question("Name : ");
    let nameSave = name.toLowerCase();
    console.log("Age : ");
    let age = number();
    console.log("HP : ");
    let hp = number();
    console.log("AD : ");
    let ad = number();
    console.log("Armor : ");
    let armor = number();
    console.log("Mana : ");
    let mana = number();
    let myObj = {
        [nameSave]: {
            'age': age,
            'stats': {
                'hp': hp,
                'ad': ad,
                'armor': armor,
                'mana': mana
            }
        }
    }
    Object.assign(heroes, myObj);
    fs.writeFile("heroes.json", JSON.stringify(heroes), function(err) {
        if (err) throw err;
    });
}
function check() {
    let k = readlineSync.question('\nKtory bohater cie interesuje ?\n');
    let x=k.toLowerCase();
    if (x === "exit") {
        return;
    } else if (x in heroes) {
        console.log(heroes[x]);
    } else {
        let dodac = readlineSync.question("Dany bohater nie istnieje , czy chcesz go dodac do listy ?(tak\nie)\n");
        if (dodac === "tak") {
            newHero();
        }
    }
    let b = readlineSync.question('Czy chcesz ponownie wyszukac bohatera ?(tak/nie)\n');
    if (b === "tak") {
        check();
    }
}
check();