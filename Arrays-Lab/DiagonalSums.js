function solve(inputArr){
    let firstDiagonalIndex = 0;
    let secondDiagonalIndex = inputArr.length - 1;
    let firstSum = 0;
    let secondSum = 0;
    
    for (let row = 0; row < inputArr.length; row++) {
        firstSum += inputArr[row][firstDiagonalIndex];
        secondSum += inputArr[row][secondDiagonalIndex];

        firstDiagonalIndex++;
        secondDiagonalIndex--;
    }

    console.log(`${firstSum} ${secondSum}`)
}

solve([[20, 40],
    [10, 60]]
   );

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );