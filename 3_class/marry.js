class Person {
    constructor(name) {
        this._name = name;
        this._partner = [];
    }
    getMarry(other) {
        if (this.constructor!==other.constructor) {
            if ( (this._partner.length == 0) && (other._partner.length == 0) ) {
                this._partner.push(other);
                other._partner.push(this);
            }
            else {
                console.log("Hav partner");
            }
        }
        else {
            console.log("The same gender");
        }
    }
    hasMarry(other) {
        return this._partner.includes(other);
    }
}
class Man extends Person {
    constructor(name) {
        super(name);
    }
}

class Woman extends Person {
    constructor(name) {
        super(name);
    }
}

const ivan = new Man("Ivan");
const anna = new Woman("Anna");
ivan.getMarry(anna);
console.log(anna.hasMarry(ivan));