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
const hobbiesList = person.hobbies;

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

// Ínicio de JSON
const todos = [
  {
    id: 1,
  description: "Estudar programação",
  isCompleted: true
  },
  {
    id: 2,
  description: "Estudar POO",
  isCompleted: false
  }
]

const descriptionOfLastTodo = todos[1].description

console.log(descriptionOfLastTodo) // irá mostrar a descrição do todo de id = 2.

const todoJson = JSON.stringify(todos)
const todosList = JSON.parse(todoJson)