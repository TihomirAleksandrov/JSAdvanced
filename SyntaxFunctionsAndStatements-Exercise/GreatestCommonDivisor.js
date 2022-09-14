function divide(num1, num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    let biggerNum = number1 > number2 ? number1 : number2;
    let smallerNum = number1 < number2 ? number1 : number2;
    let divisor;

    for(let i = biggerNum; i > 0; i--){
        if(biggerNum % i === 0 && smallerNum % i == 0){
            divisor = i;
            break;
        }
    }

    console.log(divisor);
}

divide(15, 5);
divide(2154, 458);