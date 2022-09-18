function solve(inputArr){
    let sortedArr = inputArr.sort((a, b) => a - b);
    let resultArr = sortedArr.slice(0, 2);

    console.log(resultArr.join(' '));
}

solve([30, 15, 50, 5])