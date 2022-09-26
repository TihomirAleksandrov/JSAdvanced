function solve(inputArr){
    let towns = [];
    let inputs = inputArr[0].split(/\s*\|\s*/mg).filter(x => x.trim());
    
    for (let i = 1; i < inputArr.length; i++) {
        let info = inputArr[i].split(/\s*\|\s*/mg).filter(x => x.trim());
        let town = info[0];
        let latitude = Number(info[1]).toFixed(2);
        let longitude = Number(info[2]).toFixed(2);

        let obj = {};
        obj[inputs[0]] = town;
        obj[inputs[1]] = Number(latitude);
        obj[inputs[2]] = Number(longitude);

        towns.push(obj);
    }

    let JSONText = JSON.stringify(towns);

    console.log(JSONText);

}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);