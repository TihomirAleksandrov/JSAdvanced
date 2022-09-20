function print(inputArr, n){
    let newArr = [];
    
    for (let i = 0; i < inputArr.length; i++) {
        if (i % n === 0) {
            newArr.push(inputArr[i]);
        }
    }

    return newArr;
}

console.log(print(['1', 
'2',
'3', 
'4', 
'5'], 
6
))