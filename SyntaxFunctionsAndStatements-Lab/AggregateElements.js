function solve(array){
    let numbersArray = array.map(Number);
    let sum = numbersArray.reduce((a, b) => a + b);

    let inverseSum = 0;

    for(let i = 0; i < numbersArray.length; i++){
        inverseSum += 1/numbersArray[i];
    }

    let concat = array.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);