function Person(name) {
    this._name = name;
    this._partner = [];
}
Person.prototype.getMarry = function(other) {
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
    //console.log(this.constructor);
    //console.log("Hy "+this._name+", and "+other);
}
Person.prototype.hasMarry = function(other) {
    return this._partner.includes(other);
}

function Man(name) {
    Person.call(this);
    this._name = name;
}

function Woman(name) {
    Person.call(this);
    this._name = name;
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;
Woman.prototype = Object.create(Person.prototype);
Woman.prototype.constructor = Woman;

var ivan = new Man("Ivan");
var anna = new Woman("Anna");
ivan.getMarry(anna);
console.log(anna.hasMarry(ivan));
