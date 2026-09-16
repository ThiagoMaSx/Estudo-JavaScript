// Objetos
const person = {
  firstName: "André",
  lastName: "Silva",
  age: "25",
  hobbies: ["Volêi", "Desenhar", "Tocar Instrumentos"],
  dog: {
    name: "Rex",
    age: "5",
  },
};

// Acessando propriedades de um objeto

const firstName = person.firstName;
const hobbies = person.hobbies;

const {
  firstName: primeiroNome,
  lastName: ultimoNome,
  age: idade,
  hobbies,
  dog: {name: dogName},
} = person;

// Acessando elementos de uma propriedade array

const read_hobbies = person.hobbies[2]; // irá retornar "Tocar Instrumentos"

// Atribuindo propriedade a um objeto

person.dog = "Rex";

console.log(person.dog.age)
console.log(dogName)
