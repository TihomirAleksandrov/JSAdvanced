function solve(inputArr){
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < inputArr.length; row++) {
        let currBiggest = Math.max(...inputArr[row]);

        if(currBiggest > biggestNum){
            biggestNum = currBiggest;
        }
    }

    return biggestNum;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));