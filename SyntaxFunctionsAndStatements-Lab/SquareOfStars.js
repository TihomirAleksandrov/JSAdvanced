function solve(size = 5){
    let result = '';

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            result += '*';
        }
        console.log(result);
        result = '';
    }
}

solve(3);