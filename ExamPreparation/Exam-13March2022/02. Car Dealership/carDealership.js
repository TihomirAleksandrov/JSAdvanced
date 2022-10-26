class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage){
        if (!model || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || Number.isNaN(price) || mileage < 0 || Number.isNaN(mileage)) {
            throw new Error('Invalid input!');
        }

        let car = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage){
        let desiredCar = this.availableCars.find(x => x.model === model);
        
        if (!desiredCar) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;
        let mileageDiff = desiredCar.mileage - desiredMileage;
        let carPrice = Number(desiredCar.price);

        if (mileageDiff <= 0) {
            soldPrice = carPrice;
        } else if(mileageDiff > 0 && mileageDiff <= 40000){
            soldPrice = carPrice - (carPrice * 0.05);
        } else if (mileageDiff > 40000) {
            soldPrice = carPrice - (carPrice * 0.1);
        }

        let soldCar = {
            model: desiredCar.model,
            horsepower: desiredCar.horsepower,
            price: soldPrice
        }

        this.soldCars.push(soldCar);
        this.availableCars = this.availableCars.filter(x => x !== desiredCar);
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar(){
        if (!this.availableCars.length) {
            return 'There are no available cars';
        }

        let outputMsg = `-Available cars:\n`;

        for (let car of this.availableCars) {
            outputMsg += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        }

        return outputMsg.trimEnd();
    }

    salesReport(criteria){
        if (criteria === 'horsepower' || criteria === 'model') {
            let sortedCars = criteria === 'horsepower' ? this.soldCars.sort((a, b) => b.horsepower - a.horsepower) : this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

            let outputMsg = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`;

            for (let car of sortedCars) {
                outputMsg += `---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$\n`
            }

            return outputMsg.trimEnd();
        } else{
            throw new Error('Invalid criteria!');
        }
    }
}