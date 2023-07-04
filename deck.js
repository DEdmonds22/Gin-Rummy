const section = document.querySelector(".main");
const computer = document.getElementById("computers");
const user = document.getElementById("users");

// Generate the data
const getData = () => [
    {imgSrc: "scr/playingcards/Clover_A.png", name: "cA"},
    {imgSrc: "scr/playingcards/Clover_2.png", name: "c2"},
    {imgSrc: "scr/playingcards/Clover_3.png", name: "c3"},
    {imgSrc: "scr/playingcards/Clover_4.png", name: "c4"},
    {imgSrc: "scr/playingcards/Clover_5.png", name: "c5"},
    {imgSrc: "scr/playingcards/Clover_6.png", name: "c6"},
    {imgSrc: "scr/playingcards/Clover_7.png", name: "c7"},
    {imgSrc: "scr/playingcards/Clover_8.png", name: "c8"},
    {imgSrc: "scr/playingcards/Clover_9.png", name: "c9"},
    {imgSrc: "scr/playingcards/Clover_10.png", name: "c10"},
    {imgSrc: "scr/playingcards/Clover_J.png", name: "cJ"},
    {imgSrc: "scr/playingcards/Clover_Q.png", name: "cQ"},
    {imgSrc: "scr/playingcards/Clover_K.png", name: "cK"},
    {imgSrc: "scr/playingcards/Diamond_A.png", name: "dA"},
    {imgSrc: "scr/playingcards/Diamond_2.png", name: "d2"},
    {imgSrc: "scr/playingcards/Diamond_3.png", name: "d3"},
    {imgSrc: "scr/playingcards/Diamond_4.png", name: "d4"},
    {imgSrc: "scr/playingcards/Diamond_5.png", name: "d5"},
    {imgSrc: "scr/playingcards/Diamond_6.png", name: "d6"},
    {imgSrc: "scr/playingcards/Diamond_7.png", name: "d7"},
    {imgSrc: "scr/playingcards/Diamond_8.png", name: "d8"},
    {imgSrc: "scr/playingcards/Diamond_9.png", name: "d9"},
    {imgSrc: "scr/playingcards/Diamond_10.png", name: "d10"},
    {imgSrc: "scr/playingcards/Diamond_J.png", name: "dJ"},
    {imgSrc: "scr/playingcards/Diamond_Q.png", name: "dQ"},
    {imgSrc: "scr/playingcards/Diamond_K.png", name: "dK"},
    {imgSrc: "scr/playingcards/Heart_A.png", name: "hA"},
    {imgSrc: "scr/playingcards/Heart_2.png", name: "h2"},
    {imgSrc: "scr/playingcards/Heart_3.png", name: "h3"},
    {imgSrc: "scr/playingcards/Heart_4.png", name: "h4"},
    {imgSrc: "scr/playingcards/Heart_5.png", name: "h5"},
    {imgSrc: "scr/playingcards/Heart_6.png", name: "h6"},
    {imgSrc: "scr/playingcards/Heart_7.png", name: "h7"},
    {imgSrc: "scr/playingcards/Heart_8.png", name: "h8"},
    {imgSrc: "scr/playingcards/Heart_9.png", name: "h9"},
    {imgSrc: "scr/playingcards/Heart_10.png", name: "h10"},
    {imgSrc: "scr/playingcards/Heart_J.png", name: "hJ"},
    {imgSrc: "scr/playingcards/Heart_Q.png", name: "hQ"},
    {imgSrc: "scr/playingcards/Heart_K.png", name: "hK"},
    {imgSrc: "scr/playingcards/Spade_A.png", name: "sA"},
    {imgSrc: "scr/playingcards/Spade_2.png", name: "s2"},
    {imgSrc: "scr/playingcards/Spade_3.png", name: "s3"},
    {imgSrc: "scr/playingcards/Spade_4.png", name: "s4"},
    {imgSrc: "scr/playingcards/Spade_5.png", name: "s5"},
    {imgSrc: "scr/playingcards/Spade_6.png", name: "s6"},
    {imgSrc: "scr/playingcards/Spade_7.png", name: "s7"},
    {imgSrc: "scr/playingcards/Spade_8.png", name: "s8"},
    {imgSrc: "scr/playingcards/Spade_9.png", name: "s9"},
    {imgSrc: "scr/playingcards/Spade_10.png", name: "s10"},
    {imgSrc: "scr/playingcards/Spade_J.png", name: "sJ"},
    {imgSrc: "scr/playingcards/Spade_Q.png", name: "sQ"},
    {imgSrc: "scr/playingcards/Spade_K.png", name: "sK"},
];

//Randomize the cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random()-0.5);
    return cardData;
};

//Calls the randomize function, deals the inital 20 cards out
const dealers = () => {
    const cardData = randomize();
    const firstTwenty = [];
    for (let i = 0; i < 20; i++) {
        firstTwenty.push(cardData[i]);
    }

    for (let i = 0; i < 20; i++) {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        card.classList.add = "card";
        face.classList.add = "face";
        back.classList.add = "back";

        face.src = firstTwenty[i].imgSrc

        if (i % 2 === 0) {
            computer.appendChild(card)
            card.appendChild(face);
            card.appendChild(back);
        } else {
            user.appendChild(card)
            card.appendChild(face);
            card.appendChild(back);
        }
    }
}

dealers()