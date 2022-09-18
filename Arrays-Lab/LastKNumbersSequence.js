function solve(numN, numK){
    let arr = [];
    arr.length = numN;
    arr[0] = 1;

    for (let i = 1; i < arr.length; i++) {
        let counter = 0;
        arr[i] = 0;
        for (let k = i - 1; k >= 0; k--) {
            arr[i] += arr[k];
            counter++;

            if(counter === numK){
                break;
            }
        }
    }

    return arr;
}

console.log(solve(6, 3));