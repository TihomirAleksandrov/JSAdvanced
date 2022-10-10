function attachEventsListeners() {
    let input = document.getElementById('inputDistance');

    let convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function(){
        let inputUnit = document.getElementById('inputUnits').value;
        let inputDistance = Number(input.value);
        
        let distanceInMeters = convertInMeters(inputDistance, inputUnit);
        

        let outputUnit = document.getElementById('outputUnits').value;
        let output = document.getElementById('outputDistance');

        let convertedDistance = convertMetersToUnits(distanceInMeters, outputUnit);

        output.value = convertedDistance;
    });

    function metersToKilometers(distanceInMeters){
        return distanceInMeters / 1000;
    }

    function metersToCentimeters(distanceInMeters){
        return distanceInMeters / 0.01;
    }

    function metersToMillimeters(distanceInMeters){
        return distanceInMeters / 0.001;
    }

    function metersToMiles(distanceInMeters){
        return distanceInMeters / 1609.34;
    }

    function metersToYards(distanceInMeters){
        return distanceInMeters / 0.9144;
    }

    function metersToFeet(distanceInMeters){
        return distanceInMeters / 0.3048;
    }

    function metersToInches(distanceInMeters){
        return distanceInMeters / 0.0254;
    }

    function convertMetersToUnits(distanceInMeters, outputUnit){
        switch (outputUnit) {
            case 'km':
                return metersToKilometers(distanceInMeters);
                break;
            case 'cm':
                return metersToCentimeters(distanceInMeters);
                break;
            case 'mm':
                return metersToMillimeters(distanceInMeters);
                break;
            case 'mi':
                return metersToMiles(distanceInMeters);
                break;
            case 'yrd':
                return metersToYards(distanceInMeters);
                break;
            case 'ft':
                return metersToFeet(distanceInMeters);
                break;
            case 'in':
                return metersToInches(distanceInMeters);
                break;
            default:
                return distanceInMeters;
                break;
        }
    }

    function convertInMeters(inputDistance, inputUnit){
        switch (inputUnit) {
            case 'km':
                return inputDistance * 1000;
                break;
            case 'cm':
                return inputDistance * 0.01;
                break;
            case 'mm':
                return inputDistance * 0.001;
                break;
            case 'mi':
                return inputDistance * 1609.34;
                break;
            case 'yrd':
                return inputDistance * 0.9144;
                break;
            case 'ft':
                return inputDistance * 0.3048;
                break;
            case 'in':
                return inputDistance * 0.0254;
                break;
            default:
                return inputDistance;
                break;
        }
    }
}

