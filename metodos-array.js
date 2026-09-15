const number = [1, 2, 3, 4, 5]

const numberMultipliedByTwo = number.map(function(number) {

    return number * 2;
})

const ages = [8, 13, 27, 30, 22]

const evenAges = ages.filter(function(age){
    return age % 2 === 0
})