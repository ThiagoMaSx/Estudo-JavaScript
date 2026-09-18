// Programação Orientada a Objetos em JS

class Person {
    constructor(firstName, secondName, age) {
        this.firstName = firstName,
        this.secondName = secondName,
        this.age = age
    }

    getFullName() {
        console.log(`${this.firstName} ${this.secondName}`)
    }

    static speak() {
        console.log("Hello World!")
    }
}

Person.speak();

person.getFullName();

const person = new Person("Thiago", "Sales", 40);
console.log(person)