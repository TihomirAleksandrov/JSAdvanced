function solve(input){

    let evenElements = [];
    
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            evenElements.push(input[i]);
        }
    }

    console.log(evenElements.join(' '));
}

solve(['20', '30', '40', '50', '60'])