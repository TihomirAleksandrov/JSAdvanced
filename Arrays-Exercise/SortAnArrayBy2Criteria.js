function sort(inputArr){
    let newArr = inputArr.sort((a, b) => {
        if (a.length == b.length) {
            return a.localeCompare(b);
        } else{
            return a.length - b.length;
        }
    });

    newArr.forEach(element => console.log(element));
}

sort(['test', 
'Deny', 
'omen', 
'Default']
)