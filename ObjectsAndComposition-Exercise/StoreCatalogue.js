function solve(inputArr){
    let dictionaries = {};

    for (const element of inputArr.sort((a,b) => a.localeCompare(b))) {
        let [name, price] = element.split(' : ');
        price = Number(price);

        let firstLetter = name[0];
        let product = {name, price}

        if (!dictionaries[firstLetter]) {
            dictionaries[firstLetter] = [];
        }
        dictionaries[firstLetter].push(product);
    }

    for (const item of Object.keys(dictionaries)) {
        console.log(item);
        for (const prod of dictionaries[item]) {
            console.log(`  ${prod.name}: ${prod.price}`);
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);