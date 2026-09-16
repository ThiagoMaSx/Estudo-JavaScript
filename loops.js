// Loops
// let index = 0

// for(index < 10; index++;) {

// } 

const cars = ["Ferrari", "Mustang", "Tesla", "Mercedes"]

//for(let i = 0; i < cars.length; i++) {
//    console.log(cars[i])
//}

//for(let car in cars){
// console.log(car);
//}

cars.forEach(function(car) {
    console.log(car)
})

let index = 0

while (index < 10) {
    console.log("O index é menor que 10!")
    index = index+ 1;
    //  index += 1
    //  index++
}