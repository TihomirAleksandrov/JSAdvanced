function solve(inputArr) {
    let towns = {};

    for (let townString of inputArr) {
        let [town, population] = townString.split(' <-> ');
        population = Number(population);

        if(towns[town] != undefined){
            population += towns[town];
        }

        towns[town] = population;

    }

    for (let key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }

}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);