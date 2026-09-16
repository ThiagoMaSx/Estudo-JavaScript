// Funções

function sumNumber(a, b = 10) {
    console.log(a + b);
}

const SumNumber2 = (a, b) => {
    console.log(a + b);
    // return a + b;
};

const SumNumber3 = (a, b) => a + b;

sumNumber(2, 7); // retorna 9