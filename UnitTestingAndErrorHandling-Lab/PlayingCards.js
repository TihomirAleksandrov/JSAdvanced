function solve(face, suit) {
    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let card = {
        face: '',
        suit: '',

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    if (validCards.find(x => x === face)) {
        card.face = face;
    } else{
        throw new Error;
    }

    switch (suit) {
        case 'S':
            card.suit = '\u2660';
            break;
        case 'H':
            card.suit = '\u2665';
            break;
        case 'D':
            card.suit = '\u2666';
            break;
        case 'C':
            card.suit = '\u2663'
            break;
        default:
            throw new Error;
            break;
    }

    return card.toString();
}

console.log(solve(1, 'S'))