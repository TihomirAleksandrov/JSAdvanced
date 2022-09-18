function solve(inputArr){
    let startIndex = Math.floor(inputArr.length / 2);
    inputArr.sort((a, b) => a - b);

    let newArr = inputArr.slice(startIndex, inputArr.length);

    return newArr;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]))