function subtract() {
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');
    let sub = Number(num1.value) - Number(num2.value);
    
    let result = document.getElementById('result');

    result.textContent = sub;
}