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
//drinkStorage.addValue("Напиток 1", "Ингридиенты 1");
//drinkStorage.addValue("Напиток 2", "Ингридиенты 2");
//drinkStorage.getValue("Напиток 1");
//drinkStorage.getValue("Напиток 2");
//drinkStorage.watchValue();
//console.log(drinkStorage.getKeys());
//drinkStorage.deleteValue("Напиток 1");
//drinkStorage.watchValue();