function solve(n1, n2){
    let result = 0;
    let num1 = Number(n1);
    let num2 = Number(n2);

    for(let i = num1; i <= num2; i++){
        result += i;
    }

    return result;
}

let result1 = solve('-8', '20');
let result2 = solve('5', '10');

console.log(result1);
console.log(result2);