function solve(inputArr) {
    let biggestNum = inputArr[0];
    let newArr = [biggestNum];

    for (let i = 1; i < inputArr.length; i++) {
        let currNum = inputArr[i];
        
        if(currNum >= biggestNum){
            biggestNum = currNum;
            newArr.push(currNum);
        }
    }

    return newArr;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));