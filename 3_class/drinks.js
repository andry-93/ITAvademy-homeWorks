"use strict";
class HashStorage {
    constructor() {
        this.hash = {};
    }

    addValue(key, value) {
        this.hash[key]=value;
    }

    getValue(key) {
        //console.log(this.hash[key]);
        return this.hash[key];
    }

    deleteValue(key) {
        if (key in this.hash){
            delete this.hash[key];
            return true;
        }
        return false;
    }

    getKeys() {
        return Object.keys(this.hash);
    }

    watchValue() {
        console.log(this.hash);
    }
}
function htmlAddValue() {
    let drink = prompt('Введите название напитка:')||" ",
        alcohol = confirm('Этот напиток алкогольный?')||false,
        recipe = prompt('Введите рецепт напитка:')||" ";
    drinkStorage.addValue(drink, {'alcohol': alcohol, 'recipe': recipe});
}
function htmlGetValue() {
    let drink = prompt('Введите название напитка:'),
    drinkObj=drinkStorage.getValue(drink);
    if (typeof drinkObj  !== 'undefined') {
        console.log(`
        напиток: ${drink}
        алкогольный: ${drinkStorage.hash[drink]["alcohol"]}
        рецепт приготовления: ${drinkStorage.hash[drink]["recipe"]}
        `);
    } else {
        console.log(`Такого напитка нет`);
    }
}
function htmlDeleteValue() {
    let key = prompt('Введите название напитка:'),
    status=drinkStorage.deleteValue(key);
    if (status===true) {
        alert(`Напиток ${key} удален`);
    } else {
        alert(`Напиток ${key} не найден`);
    }
}
function htmlAllValue() {
    let key = drinkStorage.getKeys(),
    i;
    for (i in key) {
        console.log(`
        напиток: ${key}
        `);
    }
}
const drinkStorage = new HashStorage();
//drinkStorage.addValue("Напиток 1", "Ингридиенты 1");
//drinkStorage.addValue("Напиток 2", "Ингридиенты 2");
//drinkStorage.getValue("Напиток 1");
//drinkStorage.getValue("Напиток 2");
//drinkStorage.watchValue();
//console.log(drinkStorage.getKeys());
//drinkStorage.deleteValue("Напиток 1");
//drinkStorage.watchValue();