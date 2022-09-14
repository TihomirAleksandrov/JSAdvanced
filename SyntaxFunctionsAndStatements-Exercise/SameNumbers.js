function numbers(nums){
    let numAsString = nums.toString();
    let firstNum = numAsString[0];
    let sum = Number(firstNum);
    let bool = true;

    for(let i = 1; i < numAsString.length; i++){
        if(numAsString[i] !== firstNum){
            bool = false;
        }
        sum += Number(numAsString[i]);
    }

    console.log(bool);
    console.log(sum);
}

numbers(2222222);
numbers(1234);