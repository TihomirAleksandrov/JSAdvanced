function solve(argument){
    let type = typeof(argument);

    if(type !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
    else{
        let result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
}

solve(5);
solve('name')