function solve(inputArr){
    let products = [];

    for (let productInfo of inputArr) {
        let splitProduct = productInfo.split(' | ');
        let town = splitProduct[0];
        let product = splitProduct[1];
        let price = Number(splitProduct[2]);

        let object = products.find(x => x.name === product)
        if(object){
            if (object.price > price) {
                object.price = price;
                object.town = town;
            }
        } else {
            let productObj = {
                'name': product,
                'price': price,
                'town': town
            }

            products.push(productObj);
        }
    }

    for (let product of products) {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)