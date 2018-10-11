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
}