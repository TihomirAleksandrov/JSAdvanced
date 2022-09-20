function solve(inputArr) {
    let areRowsEqual = false;
    let areColsEqual = false;
    let rowsSum = [];
    let colsSum = [];

    for (let row = 0; row < inputArr.length; row++) {
        let sum = 0;
        for (let col = 0; col < inputArr.length; col++) {
            sum += inputArr[row][col];
        }
        rowsSum.push(sum);
    }

    if (rowsSum.every(element => {
        if(element === rowsSum[0]){
            return true;
        }
    })) {
        areRowsEqual = true;
    }

    for (let col = 0; col < inputArr.length; col++) {
        let sum = 0;
        for (let row = 0; row < inputArr.length; row++) {
            sum += inputArr[row][col];
        }
        colsSum.push(sum);
    }

    if (colsSum.every(element => {
        if(element === colsSum[0]){
            return true;
        }
    })) {
        areColsEqual = true;
    }

    let areEqual = false;

    if (areRowsEqual && areColsEqual) {
        if (colsSum[0] === rowsSum[0]) {
            areEqual = true;
        }
    }

    console.log(areEqual);
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );