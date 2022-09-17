function validate(x1, y1, x2, y2){
    let result = function(x1, y1, x2 = 0, y2 = 0){
        let isValid = false;
        let firstSum = Math.pow((x2 - x1), 2);
        let secondSum = Math.pow((y2 - y1), 2);
        let totalSum = Math.sqrt(firstSum + secondSum);

        if(Number.isInteger(totalSum)){
            isValid = true;
        }

        return isValid;
    }

    let firstComparison = result(x1, y1) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstComparison}`);

    let secondComparison = result(x2, y2) ? 'valid' : 'invalid';
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondComparison}`);

    let thirdComparison = result(x1, y1, x2, y2) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdComparison}`);
}

validate(3, 0, 0, 4);
validate(2, 1, 1, 1);