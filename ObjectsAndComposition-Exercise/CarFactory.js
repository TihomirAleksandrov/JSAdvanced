function solve(obj){
    let car = {
        'model': obj['model'],
        'engine': {
            'power': assignPower(obj['power']),
            'volume': assignVolume(obj['power'])
        },
        'carriage': {
            'type': obj['carriage'],
            'color': obj['color']
        },
        'wheels': assignWheels(obj['wheelsize'])
    };

    return car;

    function assignWheels(wheels){
        let wheelsArr = [];
        
        if (wheels % 2 == 0) {
            wheels--;
        }

        for (let i = 0; i < 4; i++) {
            wheelsArr.push(wheels);
        }

        return wheelsArr;
    }

    function assignVolume(power){
        let volume = 0;
        
        if (power <= 90) {
            volume = 1800;
        } else if(power > 90 && power <= 120){
            volume = 2400;
        } else{
            volume = 3500;
        }

        return volume;
    }

    function assignPower(power){
        let newPower = 0;
        
        if (power <= 90) {
            newPower = 90;
        } else if(power > 90 && power <= 120){
            newPower = 120;
        } else{
            newPower = 200;
        }

        return newPower;
    }
}

console.log(solve({ model: 'VW Golf II',
power: 110,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

//expected { model: 'VW Golf II',
//engine: { power: 90, volume: 1800 },
//carriage: { type: 'hatchback',color: 'blue' },
//wheels: [13, 13, 13, 13] }
