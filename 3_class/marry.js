class Man {
    constructor(name) {
        this._name = name;
        this._partner = [];
        this._gender="man";
    }
    getMarry(other) {
        if (this._gender!==other._gender) {
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

class Woman extends Man {
    constructor(name) {
        super(name);
        this._gender="woman";
    }
}

const ivan = new Man("Ivan");
const anna = new Woman("Anna");
ivan.getMarry(anna);
console.log(anna.hasMarry(ivan));