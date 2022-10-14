function solve(input) {
    let deck = [];
    let flag = true;
    
    for (let item of input) {
        let card = '';
        let suit = '';
        
        if (item.length === 3) {
            card = item[0] + item[1];
            suit = item[2];
        } else{
            card = item[0];
            suit = item[1];
        }

        let currCard = createCard(card, suit);
        deck.push(currCard);
    }

    if (flag) {
        console.log(deck.join(' '));
    } 


    function createCard(face, suit) {
        let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let card = {
            face: '',
            suit: '',

            toString() {
                return `${this.face}${this.suit}`;
            }
        }

        if (validCards.find(x => x == face)) {
            card.face = face;
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            flag = false;
            return;
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
                console.log(`Invalid card: ${face}${suit}`);
                flag = false;
                return;
        }

        return card;
    }
}

solve(['5S', '3D', 'QD', '1C']);