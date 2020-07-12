import fs from 'fs';
import readlineSync from 'readline-sync';

let rawdata = fs.readFileSync('heroes.json');
let heroes = JSON.parse(rawdata);

function nameFormat() {
    let name = readlineSync.question("Name : ");
    for (let i = 0; i < name.length; i++) {
        if (i === 0 || name[i] === " " || name[i] === "'" || name[i] === "-") {
            name[i] = name.charAt(i).toUpperCase()
        }
    }
    return name;
}

function number() {
    while (true) {
        let x = readlineSync.question();
        const parsed = Number.parseInt(x);
        if (Number.isNaN(parsed)) {
            console.log("Dana statystyka musi być liczba");
        } else {
            return x;
        }
    }

}

function newHero() {
    let name = nameFormat();
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
        [name]: {
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
    fs.writeFile("heroes.json", JSON.stringify(heroes), function (err) {
        if (err) throw err;
    });
}

function check() {
    let x = readlineSync.question('\nKtory bohater cie interesuje ?\n');
    if (x === "exit") {
        return;
    }
    if (x in heroes) {
        console.log(x);
        console.log(heroes[x]);
    } else {
        let dodac = readlineSync.question("Dany bohater nie istnieje , czy chcesz go dodac do listy ?(tak/nie)\n");
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