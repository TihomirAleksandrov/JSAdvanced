function rotate(inputArr, n){
    for (let i = 0; i < n; i++) {
        let poppedElement = inputArr.pop();
        inputArr.unshift(poppedElement);
    }

    console.log(inputArr.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);

rotate(['1', 
'2', 
'3', 
'4'], 
2
);