function radar(speed, area){
    let limit = 0;
    switch(area){
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    let speedDiff = speed - limit;

    if(speedDiff <= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    else{
        let speedingType;
        if(speedDiff <= 20){
            speedingType = 'speeding';
        }
        else if(speedDiff <= 40){
            speedingType = 'excessive speeding';
        }
        else{
            speedingType = 'reckless driving'
        }

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit} - ${speedingType}`)
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(45, 'residential')