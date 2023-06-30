import Deck from "./deck.js"

// creates brand new deck
const deck = new Deck();
deck.shuffle();
console.log(deck.cards)

/*  // start of user class and responsiveness
// user cards
const usersDeckImgsEl = document.querySelectorAll(".users-deck img");  // selects img element in div class users-deck
const mainDeckImgsEl = document.querySelectorAll(".main-deck img");


let turn = null;


class User {
    constructor(name) {
        this.name
    }

    mainDeckAccess() {
        turn = "user";
        mainDeckImgsEl.forEach(img => {
            img.classList.add('turn');
        })       
    }

    deckAccess(){
        usersDeckImgsEl.forEach(img => {
            img.classList.add('turn');
        })
    }
}

const player = new User("Jeffery");
player.mainDeckAccess();
console.log(turn)*/