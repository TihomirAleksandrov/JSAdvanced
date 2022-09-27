function sum(){
    let values = document.querySelectorAll('tr td:nth-of-type(2)');

    let valuesArr = Array.from(values);
    valuesArr.pop();

    let result = valuesArr.reduce((a, x) => {
        return a + Number(x.textContent);
    }, 0)

    let sum = document.getElementById('sum');

    sum.textContent = result;
}