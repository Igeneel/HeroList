const fs = require('fs');
const readlineSync = require('readline-sync');
let rawdata = fs.readFileSync('heroes.json');
let heroes = JSON.parse(rawdata);
function number(){
    while(true) {
        var x = readlineSync.question();
        const parsed = Number.parseInt(x);
        if (Number.isNaN(parsed)) {
            console.log("Dana statystyka musi być liczba");
        }else{
        return x;
        }
    }

}
function newHero() {
    var name = readlineSync.question("Name : ");
    console.log("Age : ");
    var age = number();
    console.log("HP : ");
    var hp = number();
    console.log("AD : ");
    var ad = number();
    console.log("Armor : ");
    var armor = number();
    console.log("Mana : ");
    var mana = number();
    var myObj = {
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
    fs.writeFile("heroes.json", JSON.stringify(heroes), function(err) {
        if (err) throw err;
    });
}
function check() {
    var x = readlineSync.question('\nKtory bohater cie interesuje ?\n');
    if (x == "exit") {
        return;
    } else if (x in heroes) {
        console.log(heroes[x]);
    } else {
        var dodac = readlineSync.question("Dany bohater nie istnieje , czy chcesz go dodac do listy ?(tak\nie)\n");
        if (dodac == "tak") {
            newHero();
        }
    }
    var b = readlineSync.question('Czy chcesz ponownie wyszukac bohatera ?(tak/nie)\n');
    if (b == "tak") {
        check();
    } else {
        return;
    }
}
check();