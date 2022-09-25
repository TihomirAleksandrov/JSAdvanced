function solve(inputArr){
    let jsonArr = [];

    for (let element of inputArr) {
        let splitElement = element.split(' / ');
        let items = splitElement.length > 2 ? splitElement[2].split(', ') : [];

        let heroObj = {
            'name': splitElement[0],
            'level': Number(splitElement[1]),
            'items': items
        };

        jsonArr.push(heroObj);
    }

    return JSON.stringify(jsonArr);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1']))