function process(inputArr){
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(inputArr[i] * 2);
        }
    }

    return newArr.reverse();
}

console.log(process([10, 15, 20, 25]));