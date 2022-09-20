function solve(commands){
    let num = 1;
    let arr = [];

    for (let command of commands) {
        if (command === 'add') {
            arr.push(num);
        } else if(command === 'remove'){
            arr.pop();
        }

        num++;
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else{
        console.log(arr.join('\n'));
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);