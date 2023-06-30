// to get all the suits and values of a card
const suits = ["suit", "club", "heart", "diamond"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    shuffle() { // shuffles cards
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));    // will give us an index that we havent accesed yet - returns a value been 0 and i.
            const oldValue = this.cards[randomIndex];   // selects a card at random index save it to a varaible named oldValue
            this.cards[randomIndex] = this.cards[i];  // replaces the orginal value of the card at the random index to value of card at i index - swaps values
            this.cards[i] = oldValue;   // replaces the value of card at i with the value of the orginal random index card
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

// creates a deck - combines the suuits and values
function freshDeck() {
    return suits.flatMap(suit => {  // ['suit', 'club', 'heart', 'diamond']
        return values.map(value => {   // ['A', '2',  '3', '4', '5', '6',  '7', '8', '9', '10', 'J', 'Q', 'K'] x4 because it's based off of # of suits
            return new Card(suit, value);   // makes new cards
        })
    })
}

/* map(callbackFn, thisArg) method creates a new array populated with the results of 
calling a provided function on every element in the calling array. */
/**/

//EXPLAINATION
/* 
    1. The Deck class is exported/accessible in script.js.
    2. When the Deck class is ran, the default value of cards is selected.
    3. The dealut is calling on the function freshDeck().
    4. freshDeck runs values for each suit and send and returns the information to/from the Card class.
    5. The Card class has information about selected cards suit and value.
*/