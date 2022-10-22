class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }

    toString(){
        let substring = '';

        if (this.innerString.length > this.innerLength) {
            substring = this.innerString.substring(0, this.innerLength) + '...'
        } else {
            substring = this.innerString;
        }

        return substring;
    }
}