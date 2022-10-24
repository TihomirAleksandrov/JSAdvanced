class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        let searchedPlant = this.plants.find(x => x.plantName === plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (searchedPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        } else if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        } else{
            searchedPlant.ripe = true;
            searchedPlant.quantity += quantity;

            return searchedPlant.quantity === 1 ? `${quantity} ${plantName} has successfully ripened.` : `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName){
        let searchedPlant = this.plants.find(x => x.plantName === plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (!searchedPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else{
            let harvestedPlant = {
                plantName,
                quantity: searchedPlant.quantity
            }
            
            this.storage.push(harvestedPlant);
            this.spaceAvailable += searchedPlant.spaceRequired;
            this.plants = this.plants.filter(x => x.plantName !== plantName);

            return `The ${plantName} has been successfully harvested.`
        }
    }

    generateReport(){
        let outputMsg = `The garden has ${this.spaceAvailable} free space left.\n`;

        let orderedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsNames = orderedPlants.map(x => x.plantName);

        outputMsg += `Plants in the garden: ${plantsNames.join(', ')}\n`;
        outputMsg += `Plants in storage: `;

        if (this.storage.length === 0) {
            outputMsg += 'The storage is empty.'
        } else{
            for (let plant of this.storage) {
                outputMsg += `${plant.plantName} (${plant.quantity}), `
            }
            
            outputMsg = outputMsg.substring(0, outputMsg.length - 2);
        }

        return outputMsg.trimEnd();
    }
}
