class Person { // Базовый класс
    constructor(name) { // Конструктор
        this.name = name; // Создание и инициализация поля
        this.age = 0;
        this.friends = [];
    }
    grow(age) {
        this.age = age;
    }
    setFriend(other) {
        if (this.friends.indexOf(other) == -1) {
            this.friends.push(other);
            if (other.friends.indexOf(this) == -1) {
                other.friends.push(this);
            }
        } else if (other.friends.indexOf(this) == -1) {
            other.friends.push(this);
        }
    }
    hasFriend(other) {
        return this.friends.includes(other);
    }
    sayHello() { // Метод класса
        console.log(
            `hi, my name's ${this.name}, ${this.age} years`);
    }
}
const ivan = new Person("Ivan");
ivan.grow(20);
const anna = new Person("Anna");
anna.grow(18);
ivan.setFriend(anna);
console.log(anna.hasFriend(ivan));