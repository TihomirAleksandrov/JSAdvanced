function sort(inputArr){
    let sortedArr = [];
    inputArr.sort((a, b) => a - b);

    while(inputArr.length > 0){
        sortedArr.push(inputArr.shift(), inputArr.pop());
    }

    return sortedArr;
}

console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));