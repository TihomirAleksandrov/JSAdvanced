class List {
    #collection = [];

    constructor() {
        this.size = this.#collection.length;
    }

    add(element) {
        this.#collection.push(element);
        this.#collection.sort((a, b) => a - b);
        this.size++;
    };

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error;
        } else {
            this.#collection.splice(index, 1);
            this.size--;
        }
    };

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error;
        } else {
            return this.#collection[index]
        }
    }
}