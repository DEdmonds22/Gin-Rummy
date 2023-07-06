// DOM elements
const computers = document.getElementById("computers");
const main = document.querySelector(".main");
const discardPile = document.getElementById("discardPile");
const users = document.getElementById("users");
const passBtn = document.querySelector(".pass-btn");
const sortingBtns = document.querySelector(".sorting-btns");
const suitBtn = document.getElementById("suit-btn");
const numberBtn = document.getElementById("number-btn");

// global variables
const pluckPile = [];
const computersDeck = [];
const usersDeck = []

// Functions
// Generate the data
const getData = () => [
    {imgSrc: "scr/playingcards/Clover_A.png", name: "cA", number: "1"},
    {imgSrc: "scr/playingcards/Clover_2.png", name: "c2", number: "2"},
    {imgSrc: "scr/playingcards/Clover_3.png", name: "c3", number: "3"},
    {imgSrc: "scr/playingcards/Clover_4.png", name: "c4", number: "4"},
    {imgSrc: "scr/playingcards/Clover_5.png", name: "c5", number: "5"},
    {imgSrc: "scr/playingcards/Clover_6.png", name: "c6", number: "6"},
    {imgSrc: "scr/playingcards/Clover_7.png", name: "c7", number: "7"},
    {imgSrc: "scr/playingcards/Clover_8.png", name: "c8", number: "8"},
    {imgSrc: "scr/playingcards/Clover_9.png", name: "c9", number: "9"},
    {imgSrc: "scr/playingcards/Clover_10.png", name: "c10", number: "10"},
    {imgSrc: "scr/playingcards/Clover_J.png", name: "cJ", number: "11"},
    {imgSrc: "scr/playingcards/Clover_Q.png", name: "cQ", number: "12"},
    {imgSrc: "scr/playingcards/Clover_K.png", name: "cK", number: "K"},
    {imgSrc: "scr/playingcards/Diamond_A.png", name: "dA", number: "1"},
    {imgSrc: "scr/playingcards/Diamond_2.png", name: "d2", number: "2"},
    {imgSrc: "scr/playingcards/Diamond_3.png", name: "d3", number: "3"},
    {imgSrc: "scr/playingcards/Diamond_4.png", name: "d4", number: "4"},
    {imgSrc: "scr/playingcards/Diamond_5.png", name: "d5", number: "5"},
    {imgSrc: "scr/playingcards/Diamond_6.png", name: "d6", number: "6"},
    {imgSrc: "scr/playingcards/Diamond_7.png", name: "d7", number: "7"},
    {imgSrc: "scr/playingcards/Diamond_8.png", name: "d8", number: "8"},
    {imgSrc: "scr/playingcards/Diamond_9.png", name: "d9", number: "9"},
    {imgSrc: "scr/playingcards/Diamond_10.png", name: "d10", number: "10"},
    {imgSrc: "scr/playingcards/Diamond_J.png", name: "dJ", number: "11"},
    {imgSrc: "scr/playingcards/Diamond_Q.png", name: "dQ", number: "12"},
    {imgSrc: "scr/playingcards/Diamond_K.png", name: "dK", number: "K"},
    {imgSrc: "scr/playingcards/Heart_A.png", name: "hA", number: "1"},
    {imgSrc: "scr/playingcards/Heart_2.png", name: "h2", number: "2"},
    {imgSrc: "scr/playingcards/Heart_3.png", name: "h3", number: "3"},
    {imgSrc: "scr/playingcards/Heart_4.png", name: "h4", number: "4"},
    {imgSrc: "scr/playingcards/Heart_5.png", name: "h5", number: "5"},
    {imgSrc: "scr/playingcards/Heart_6.png", name: "h6", number: "6"},
    {imgSrc: "scr/playingcards/Heart_7.png", name: "h7", number: "7"},
    {imgSrc: "scr/playingcards/Heart_8.png", name: "h8", number: "8"},
    {imgSrc: "scr/playingcards/Heart_9.png", name: "h9", number: "9"},
    {imgSrc: "scr/playingcards/Heart_10.png", name: "h10", number: "10"},
    {imgSrc: "scr/playingcards/Heart_J.png", name: "hJ", number: "11"},
    {imgSrc: "scr/playingcards/Heart_Q.png", name: "hQ", number: "12"},
    {imgSrc: "scr/playingcards/Heart_K.png", name: "hK", number: "K"},
    {imgSrc: "scr/playingcards/Spade_A.png", name: "sA", number: "1"},
    {imgSrc: "scr/playingcards/Spade_2.png", name: "s2", number: "2"},
    {imgSrc: "scr/playingcards/Spade_3.png", name: "s3", number: "3"},
    {imgSrc: "scr/playingcards/Spade_4.png", name: "s4", number: "4"},
    {imgSrc: "scr/playingcards/Spade_5.png", name: "s5", number: "5"},
    {imgSrc: "scr/playingcards/Spade_6.png", name: "s6", number: "6"},
    {imgSrc: "scr/playingcards/Spade_7.png", name: "s7", number: "7"},
    {imgSrc: "scr/playingcards/Spade_8.png", name: "s8", number: "8"},
    {imgSrc: "scr/playingcards/Spade_9.png", name: "s9", number: "9"},
    {imgSrc: "scr/playingcards/Spade_10.png", name: "s10", number: "10"},
    {imgSrc: "scr/playingcards/Spade_J.png", name: "sJ", number: "11"},
    {imgSrc: "scr/playingcards/Spade_Q.png", name: "sQ", number: "12"},
    {imgSrc: "scr/playingcards/Spade_K.png", name: "sK", number: "K"},
];

//Randomize the cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random()-0.5);
    return cardData;
};

//Calls the randomize function, deals the inital 20 cards out, and 1 card placed in discard pile
const dealers = () => {
    const cardData = randomize();
    const firstTwentyOne = [];
    const e = []
    for (let i = 0; i < 21; i++) {
        const firstElement = cardData.shift();
        firstTwentyOne.push(firstElement);
    }

    for (let i = 0; i < 21; i++) {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        const backImg = document.createElement("img");

        card.classList.add = "card";
        face.classList.add = "face";
        face.classList.add = "value";
        face.classList.add = "number";
        back.classList.add = "back";
        backImg.classList.add = "backImg";

        face.src = firstTwentyOne[i].imgSrc;
        face.dataset.value = firstTwentyOne[i].name;
        face.dataset.number = firstTwentyOne[i].number;
        backImg.src = "scr/playingcards/Backing.png";

        if (i === 20) {
            discardPile.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);
        } else if (i % 2 === 0) {
            users.appendChild(card)
            card.appendChild(face);
            card.appendChild(back);
        } else {
            computers.appendChild(card)
            card.appendChild(face);
            face.style.display = "none";
            card.appendChild(back);
            back.appendChild(backImg);

        }
    }
    pluckPile.push(cardData);
}

// Event Listeners
// when discard pile is clicked
    //hides passBtn
    //shows sortingBtns
    //remove card from discard pile - event.target
    //.. and adds card to users deck
discardPile.addEventListener("click", event => {
    passBtn.style.display = "none";
    sortingBtns.style.visibility = "visible";
    users.appendChild(event.target)
    usersDeck.push(event.target)
})

// when suitBtn is clicked
    //apply .selected css style/ add clsas
    //sorts card by suit
suitBtn.addEventListener("click", () => {
    suitBtn.classList.add("selected");
    numberBtn.classList.remove("selected");

    const cards = Array.from(users.querySelectorAll("img"))
    cards.sort((card1, card2) => {
        const value1 = card1.dataset.value;
        const value2 = card2.dataset.value;
        return value1.localeCompare(value2);
    });
    users.innerHTML = "";
    cards.forEach(card => users.appendChild(card));
})

numberBtn.addEventListener("click", () => {
    numberBtn.classList.add("selected");
    suitBtn.classList.remove("selected");

    const cards = Array.from(users.querySelectorAll("img"))
    cards.sort((card1, card2) => {
        const number1 = card1.dataset.number;
        const number2 = card2.dataset.number;
        return number1.localeCompare(number2);
    });
    users.innerHTML = "";
    cards.forEach(card => users.appendChild(card));
})

// If Statements



// activated functions
dealers()