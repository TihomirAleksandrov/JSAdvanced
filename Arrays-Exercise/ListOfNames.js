function sort(namesArr){
    let num = 1;

    for (let name of namesArr.sort((a, b) => a.localeCompare(b))) {
        console.log(`${num}.${name}`);
        num++;
    }
}

sort(["John", "bob", "Ema", "Christina", "Ema"]);