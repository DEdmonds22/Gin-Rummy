const computersDeckSection = document.getElementById("computers-deck-section");
const mainSection = document.getElementById("main-section");
const pluckingPile = document.getElementById("plucking-pile");
const discardPile = document.getElementById("discard-pile");
const sortingBtns = document.getElementById("sorting-btns")
const passBtn = document.getElementById("pass-btn");
const suitBtn = document.getElementById("suit-btn");
const numberBtn = document.getElementById("number-btn");
const discardBtn = document.getElementById("discard-btn");
const knockBtn = document.getElementById("knock-btn");
const ginBtn = document.getElementById("gin-btn");
const usersDeckSection = document.getElementById("users-deck-section");
/*
 computersDeckSection - div element
 mainSection - div element
 pluckingPile - img element inside of mainSection
 discardPile - div element inside of mainSection
 sortingBtns - div element
 passBtn - p element inside of sortingBtns
 suitBTN - p element inside of sortingBtns
 numberBtn - p elements 
 discardBtn - p elements 
 ginBtn - p elements
 usersDeckSection - div element
*/
// GLOBAL VARIABLES
let computersDeck = [];
let pluckingDeck = [];
let shuffledPluckingDeck = [];
let usersDeck = [];
let selectedCard = null;
let usersDeadwood = null;
let computersDeadwood = null;

// DECK
    /* [imgSrc: "", name: "c1", suit: "club", number: "1"] */
const getData = () => [
    {imgSrc: "scr/playingcards/Clover_A.png", name: "c1", suit: "club", number: "1"},
    {imgSrc: "scr/playingcards/Clover_2.png", name: "c2", suit: "club", number: "2"},
    {imgSrc: "scr/playingcards/Clover_3.png", name: "c3", suit: "club", number: "3"},
    {imgSrc: "scr/playingcards/Clover_4.png", name: "c4", suit: "club", number: "4"},
    {imgSrc: "scr/playingcards/Clover_5.png", name: "c5", suit: "club", number: "5"},
    {imgSrc: "scr/playingcards/Clover_6.png", name: "c6", suit: "club", number: "6"},
    {imgSrc: "scr/playingcards/Clover_7.png", name: "c7", suit: "club", number: "7"},
    {imgSrc: "scr/playingcards/Clover_8.png", name: "c8", suit: "club", number: "8"},
    {imgSrc: "scr/playingcards/Clover_9.png", name: "c9", suit: "club", number: "9"},
    {imgSrc: "scr/playingcards/Clover_10.png", name: "cb", suit: "club", number: "10"},
    {imgSrc: "scr/playingcards/Clover_J.png", name: "cc", suit: "club", number: "11"},
    {imgSrc: "scr/playingcards/Clover_Q.png", name: "cd", suit: "club", number: "12"},
    {imgSrc: "scr/playingcards/Clover_K.png", name: "ce", suit: "club", number: "13"},
    {imgSrc: "scr/playingcards/Diamond_A.png", name: "d1", suit: "diamond", number: "1"},
    {imgSrc: "scr/playingcards/Diamond_2.png", name: "d2", suit: "diamond", number: "2"},
    {imgSrc: "scr/playingcards/Diamond_3.png", name: "d3", suit: "diamond", number: "3"},
    {imgSrc: "scr/playingcards/Diamond_4.png", name: "d4", suit: "diamond", number: "4"},
    {imgSrc: "scr/playingcards/Diamond_5.png", name: "d5", suit: "diamond", number: "5"},
    {imgSrc: "scr/playingcards/Diamond_6.png", name: "d6", suit: "diamond", number: "6"},
    {imgSrc: "scr/playingcards/Diamond_7.png", name: "d7", suit: "diamond", number: "7"},
    {imgSrc: "scr/playingcards/Diamond_8.png", name: "d8", suit: "diamond", number: "8"},
    {imgSrc: "scr/playingcards/Diamond_9.png", name: "d9", suit: "diamond", number: "9"},
    {imgSrc: "scr/playingcards/Diamond_10.png", name: "db", suit: "diamond", number: "10"},
    {imgSrc: "scr/playingcards/Diamond_J.png", name: "dc", suit: "diamond", number: "11"},
    {imgSrc: "scr/playingcards/Diamond_Q.png", name: "dd", suit: "diamond", number: "12"},
    {imgSrc: "scr/playingcards/Diamond_K.png", name: "de", suit: "diamond", number: "13"},
    {imgSrc: "scr/playingcards/Heart_A.png", name: "h1", suit: "heart", number: "1"},
    {imgSrc: "scr/playingcards/Heart_2.png", name: "h2", suit: "heart", number: "2"},
    {imgSrc: "scr/playingcards/Heart_3.png", name: "h3", suit: "heart", number: "3"},
    {imgSrc: "scr/playingcards/Heart_4.png", name: "h4", suit: "heart", number: "4"},
    {imgSrc: "scr/playingcards/Heart_5.png", name: "h5", suit: "heart", number: "5"},
    {imgSrc: "scr/playingcards/Heart_6.png", name: "h6", suit: "heart", number: "6"},
    {imgSrc: "scr/playingcards/Heart_7.png", name: "h7", suit: "heart", number: "7"},
    {imgSrc: "scr/playingcards/Heart_8.png", name: "h8", suit: "heart", number: "8"},
    {imgSrc: "scr/playingcards/Heart_9.png", name: "h9", suit: "heart", number: "9"},
    {imgSrc: "scr/playingcards/Heart_10.png", name: "hb", suit: "heart", number: "10"},
    {imgSrc: "scr/playingcards/Heart_J.png", name: "hc", suit: "heart", number: "11"},
    {imgSrc: "scr/playingcards/Heart_Q.png", name: "hd", suit: "heart", number: "12"},
    {imgSrc: "scr/playingcards/Heart_K.png", name: "he", suit: "heart", number: "13"},
    {imgSrc: "scr/playingcards/Spade_A.png", name: "s1", suit: "spade", number: "1"},
    {imgSrc: "scr/playingcards/Spade_2.png", name: "s2", suit: "spade", number: "2"},
    {imgSrc: "scr/playingcards/Spade_3.png", name: "s3", suit: "spade", number: "3"},
    {imgSrc: "scr/playingcards/Spade_4.png", name: "s4", suit: "spade", number: "4"},
    {imgSrc: "scr/playingcards/Spade_5.png", name: "s5", suit: "spade", number: "5"},
    {imgSrc: "scr/playingcards/Spade_6.png", name: "s6", suit: "spade", number: "6"},
    {imgSrc: "scr/playingcards/Spade_7.png", name: "s7", suit: "spade", number: "7"},
    {imgSrc: "scr/playingcards/Spade_8.png", name: "s8", suit: "spade", number: "8"},
    {imgSrc: "scr/playingcards/Spade_9.png", name: "s9", suit: "spade", number: "9"},
    {imgSrc: "scr/playingcards/Spade_10.png", name: "sb", suit: "spade", number: "10"},
    {imgSrc: "scr/playingcards/Spade_J.png", name: "sc", suit: "spade", number: "11"},
    {imgSrc: "scr/playingcards/Spade_Q.png", name: "sd", suit: "spade", number: "12"},
    {imgSrc: "scr/playingcards/Spade_K.png", name: "se", suit: "spade", number: "13"},
];

// starts game by randomizing and dealing 52 cards
const startGame = () => {
    /* randomizes the cards */
    const randomize = () => {
        const cardData = getData();
        cardData.sort(() => Math.random()-0.5);
        return cardData;
    };

    const cardData = randomize();
    const firstTwentyOne = [];

    for (let i = 0; i < 21; i++) {
        const topCard = cardData.shift();
        firstTwentyOne.push(topCard);
    };

    for (let i = 0; i < 21; i++) {
        const cardDiv = document.createElement("div");
        const faceImg = document.createElement("img");
        const backDiv = document.createElement("div");
        const backImg = document.createElement("img");

        cardDiv.classList.add = "cardDiv";
        faceImg.classList.add = "faceImg";
        backDiv.classList.add = "backDiv";

        cardDiv.dataset.cardDiv = "cardDiv";
        faceImg.dataset.faceImg = "faceImg";
        backDiv.dataset.backDiv = "backDiv";

        faceImg.src = firstTwentyOne[i].imgSrc;
        faceImg.dataset.name = firstTwentyOne[i].name;
        faceImg.dataset.suit = firstTwentyOne[i].suit;
        faceImg.dataset.number = firstTwentyOne[i].number;
        backImg.src = "scr/playingcards/Backing.png";


        if (i === 20) {
            discardPile.appendChild(cardDiv);  /* <div data-card="card></div>" */
            cardDiv.appendChild(faceImg); /* <div><img></div> */
        } else if (i % 2 === 0) {
            usersDeckSection.appendChild(cardDiv); /* <div data-card="card></div>" */
            cardDiv.appendChild(faceImg); /* <div><img></div> */
        } else {
            computersDeckSection.appendChild(cardDiv);  /* <div data-card="card></div>" */
            cardDiv.appendChild(faceImg); /* <div><img></div> */
            cardDiv.appendChild(backDiv); /* <div><img><div data-backDiv="backDiv"></div></div> */
            backDiv.appendChild(backImg);   /* <div><img<div><img></div></div> */
        };
    }

    pluckingDeck = cardData;
    pluckingDeck.forEach(card => {
        shuffledPluckingDeck.push(card)
    })
}

startGame();

//  USEFUL FUNCTIONS FOR THE EVENT LISTENERS
const createACard = () => {
    const cardDiv = document.createElement("div");
    const faceImg = document.createElement("img");

    cardDiv.classList.add = "cardDiv";
    faceImg.classList.add = "faceImg";

    cardDiv.dataset.cardDiv = "cardDiv";
    faceImg.dataset.faceImg = "faceImg";

    faceImg.src = pluckingDeck[0].imgSrc;
    faceImg.dataset.name = pluckingDeck[0].name;
    faceImg.dataset.suit = pluckingDeck[0].suit;
    faceImg.dataset.number = pluckingDeck[0].number;

    usersDeckSection.appendChild(cardDiv); /* <div data-card="card></div>" */
    cardDiv.appendChild(faceImg); /* <div><img></div> */

    cardDiv.addEventListener('click', function() {
        // Handle click event for the new card
        if (!selectedCard) {
            // If no card is currently selected, store the clicked card
            selectedCard = event.target;
            selectedCard.classList.add = 'selected';
        } else {
            // If another card is already selected, swap the positions
            swapCards(selectedCard, event.target);
            selectedCard.classList.remove = 'selected';
            selectedCard = null;
        }
    });
};

const pluckingPileFunction = () => {
    createACard();  /* adds cards to user's hand */
    pluckingDeck.shift();    /* removes said card from plucking deck */

    passBtn.style.display = "none"; /* hides pass btn */
    sortingBtns.style.display = ""; /* shows sorting btns */
    discardBtn.style.display = "";  /* shows discard btn */
    pluckingPile.removeEventListener("click",pluckingPileFunction);
    discardPile.removeEventListener("click", discardPileFunction);
}

const discardPileFunction = event => {
    const cardDiv = event.target.parentNode;
    usersDeckSection.appendChild(cardDiv);
    usersDeck.push(event.target);

    cardDiv.addEventListener('click', function() {
        // Handle click event for the new card
        if (!selectedCard) {
            // If no card is currently selected, store the clicked card
            selectedCard = event.target;
            selectedCard.classList.add = 'selected';
        } else {
            // If another card is already selected, swap the positions
            swapCards(selectedCard, event.target);
            selectedCard.classList.remove = 'selected';
            selectedCard = null;

            removeGrouped();
            computersTurn();
        }
    });

    passBtn.style.display = "none"; /* hides pass btn */
    sortingBtns.style.display = ""; /* shows sorting btns */
    discardBtn.style.display = "";  /* shows discard btn */
    pluckingPile.removeEventListener("click",pluckingPileFunction);
    discardPile.removeEventListener("click", discardPileFunction);
}

const passBtnFunction = () => {
    passBtn.style.display = "none";
    sortingBtns.style.display = "none"
    computersTurn();
}

const suitBtnFunction = () => {
    suitBtn.classList.add = "clicked";
    numberBtn.classList.remove = "clicked";

    usersDeck.sort((card1, card2) => {
        const name1 = card1.dataset.name;
        const name2 =card2.dataset.name;
        return name1.localeCompare(name2);
    });

    usersDeckSection.innerHTML = "";
    usersDeck.forEach(card => usersDeckSection.appendChild(card));
    
    removeGrouped();
    pair();
}

const numberBtnFunction = () => {
    numberBtn.classList.add = "clicked";
    suitBtn.classList.remove = "clicked";

    usersDeck.sort((card1, card2) => {
        const number1 = card1.dataset.number;
        const number2 =card2.dataset.number;
        return number1.localeCompare(number2);
    });

    usersDeckSection.innerHTML = "";
    usersDeck.forEach(card => usersDeckSection.appendChild(card));

    removeGrouped();
    pair();
}

const ginBtnFunction = () => {
    console.log("gin btn");
    // triggers game() + 25 pts
}

const knockBtnFunction = () => {
    console.log("knock btn");
    // triggers game() + deadwood difference after opp combines
        // if knockers is lower they get pts
        // if knockers is higer opp gets pts + 25pts
}

const discardBtnFunction = () => {
    console.log("discard btn"); // tester
    if (selectedCard === null) {
        window.alert("Please Select a Card To Discard.") //prompt later stages 
    } else {
        discardPile.appendChild(selectedCard.parentNode);
        discardBtn.style.visibility = "hidden";
        selectedCard.classList.remove = "selected";

        computersTurn();
    }
}

const usersDeckFunction = () => {
    removeGrouped();
    pair();

    if (usersDeck.filter(card => card.hasAttribute("data-grouped")).length <= 1 && usersDeadwood <= 10) {
        ginBtn.style.visibility = "visible";
    } else if (usersDeadwood <= 10) {
        knockBtn.style.visibility = "visible";
    }
}

// Function to swap two cards
function swapCards(card1, card2) {
    const parent1 = card1.parentNode;
    const parent2 = card2.parentNode;
    const sibling1 = card1.nextSibling;
    const sibling2 = card2.nextSibling;
  
    parent1.insertBefore(card2, sibling1);
    parent2.insertBefore(card1, sibling2);
  
    // Update usersDeck array
    const index1 = usersDeck.indexOf(card1);
    const index2 = usersDeck.indexOf(card2);
  
    // Swap the positions in the array
    [usersDeck[index1], usersDeck[index2]] = [usersDeck[index2], usersDeck[index1]];
}

// standard styles
const compDeckTempNodeList = computersDeckSection.querySelectorAll("[data-face-img]");
computersDeck = Array.from(compDeckTempNodeList);
computersDeck.forEach(card => {
    card.style.display = "none";
})

const usersDeckArray = Array.from(usersDeckSection.querySelectorAll("img"));
for (let i = 0; i < usersDeckArray.length; i++) {
    usersDeck.push(usersDeckArray[i]);
}

usersDeck.forEach(card => {
    card.addEventListener('click', function(event) {
      const clickedCard = event.target
      console.log("clicked usersdeck card")
      if (!selectedCard) {
        // If no card is currently selected, store the clicked card
        selectedCard = clickedCard;
        selectedCard.classList.add = "selected";
        console.log("selected card")
      } else {
        // If another card is already selected, swap the positions
        swapCards(selectedCard, clickedCard);
        selectedCard.classList.remove = "selected";
        selectedCard = null;
      }
    }); 
  });

sortingBtns.style.display = "none";
discardBtn.style.display = "none";
knockBtn.style.display = "none";
ginBtn.style.display = "none";

// EVENT LISTENERS 
// user clicks pluckingPile
pluckingPile.addEventListener("click", pluckingPileFunction);
discardPile.addEventListener("click", discardPileFunction);
passBtn.addEventListener("click", passBtnFunction);
suitBtn.addEventListener("click", suitBtnFunction);
numberBtn.addEventListener("click", numberBtnFunction);
ginBtn.addEventListener("click", ginBtnFunction);
knockBtn.addEventListener("click", knockBtnFunction);
discardBtn.addEventListener("click", discardBtnFunction);
usersDeckSection.addEventListener("click", usersDeckFunction);

// COMPUTER LOGIC
let choicesToDiscard = [];

const computersTurn = () => {
    discardPile.removeEventListener("click", discardPileFunction)   //no effect when user clicks on discardPile
    pluckingPile.removeEventListener("click", pluckingPileFunction);
    discardBtn.style.visibility = "hidden";
    knockBtn.style.visibility = "hidden";
    ginBtn.style.visibility = "hidden";

/*    const computersD = Array.from(computers.querySelectorAll("img"));

    for (let i = 0; i < computersD.length; i++) {
        if (computersD[i].hasAttribute("data-number")){
            computersDeck.push(computersD[i]);
        }
    }*/

    grabFromDiscardPile();


    pairTheNumbers();

    findOutliers();

    console.log(choicesToDiscard)
    if (choicesToDiscard.length > 0){
        let toMoveToDiscardPile = null
        computersDeck.forEach(card => {
            if (card.dataset.name === choicesToDiscard[0].dataset.name){
                toMoveToDiscardPile = card
            }
        });

        let omgosh = toMoveToDiscardPile.nextSibling.querySelector("img")
        toMoveToDiscardPile.nextSibling.removeChild(omgosh)

        const card = document.createElement("div");
        card.classList.add = "card";
        card.dataset.card = "card";

        const back = document.createElement("div");
        back.classList.add = "back";

        card.appendChild(toMoveToDiscardPile);
        card.appendChild(back);

        toMoveToDiscardPile.style.display = "block";
        discardPile.appendChild(card);
        console.log(toMoveToDiscardPile)
        console.log(card)
    };

    /*
    if (computersDeadwood <= 5) {
        if (choicesToDiscard.length > 0){
            computers.forEach()
        }
        game ()
    } else {

    }*/

    discardPile.addEventListener("click", discardPileFunction);
    pluckingPile.addEventListener("click", pluckingPileFunction);
}

// COMPUTERS FUNCTIONS
const grabFromDiscardPile = () => {
    passBtn.style.display = "none";
    const card = discardPile.firstChild;
    card.firstChild.style.display = "none";
    console.log(card)
    console.log(card.firstChild)

    const backDiv = document.createElement("div");
    const backImg = document.createElement("img");

    backDiv.classList.add = "backDiv";
    backDiv.dataset.backDiv = "backDiv";
    backImg.src = "scr/playingcards/Backing.png";

    card.lastChild.appendChild(backDiv);
    backDiv.appendChild(backImg);
    computersDeckSection.appendChild(card);
}

const pairTheNumbers = () => {
    let deadwood = null;

    for (let i = 0; i < computersDeck.length; i++) {
        const currentCard = computersDeck[i];
        const number = currentCard.dataset.number;
        // Count the occurrences of the current card's number in the array
        const occurrences = computersDeck.filter(card => card.dataset.number === number).length;
      
        if (occurrences >= 3) {
            currentCard.classList.add = "groupedcomp";
            currentCard.dataset.grouped = "thing";
        } else {
            deadwood += parseInt(number);
        }
    }
    computersDeadwood = deadwood;
};

const findOutliers = () => {
    const outliers = computersDeck.filter(card => !card.hasAttribute("data-groupedcomp"));
    const repLessThanTwice = outliers.filter(card => {
        const number = card.dataset.number;
        const count = computersDeck.filter(c => c.dataset.number === number).length;
        return count < 2;
      });
    
    repLessThanTwice.forEach(choice => {
        choicesToDiscard.push(choice);
        console.log(choice)
    })
};
  

// SORTING/SCORING RELATED
const removeGrouped = () => {
    usersDeck.forEach(item => {
        if (item.hasAttribute("data-grouped")) {
            item.removeAttribute("data-grouped");
        };
    });
};

const pair = () => {
    let deadwood = null;

    for (let i = 0; i < 11; i++) {
        if (usersDeck[i].hasAttribute("data-grouped") && usersDeck[i].getAttribute("data-grouped") === "thing"){
            continue;
        } else if  (!(i >= 9) && (usersDeck[i].dataset.suit === usersDeck[i + 1].dataset.suit) && (usersDeck[i].dataset.suit === usersDeck[i + 2].dataset.suit)) {
            const suit = usersDeck[i].dataset.suit;
            const valueOne = parseInt(usersDeck[i].dataset.number);
            const valueTwo = parseInt(usersDeck[i + 1].dataset.number);
            const valueThree = parseInt(usersDeck[i +2].dataset.number);
    
            if (valueOne + 1 === valueTwo && valueOne + 2 === valueThree) {
            usersDeck[i].classList.add = "grouped";
            usersDeck[i].dataset.grouped = "thing";
            usersDeck[i + 1].classList.add = "grouped";
            usersDeck[i + 1].dataset.grouped = "thing";
            usersDeck[i + 2].classList.add = "grouped";
            usersDeck[i + 2].dataset.grouped = "thing";

            // checks next card and so on 
            if (usersDeck[i + 3].dataset.suit === suit && parseInt(usersDeck[i + 3].dataset.number) === valueOne + 3) {
                usersDeck[i + 3].classList.add = "grouped";
                usersDeck[i + 3].dataset.grouped = "thing";
                
                if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === valueOne + 4) {
                    usersDeck[i + 4].classList.add = "grouped";
                    usersDeck[i + 4].dataset.grouped = "thing";
                    
                    if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === valueOne + 5) {
                        usersDeck[i + 5].classList.add = "grouped";
                        usersDeck[i + 5].dataset.grouped = "thing";
                        
                        if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === valueOne + 6) {
                            usersDeck[i + 6].classList.add = "grouped";
                            usersDeck[i + 6].dataset.grouped = "thing";
                            
                            if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === valueOne + 7) {
                                usersDeck[i + 7].classList.add = "grouped";
                                usersDeck[i + 7].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === valueOne + 8) {
                                    usersDeck[i + 8].classList.add = "grouped";
                                    usersDeck[i + 8].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === valueOne + 9) {
                                        usersDeck[i + 9].classList.add = "grouped";
                                        usersDeck[i + 9].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === valueOne + 10) {
                                            usersDeck[i + 10].classList.add = "grouped";
                                            usersDeck[i + 10].dataset.grouped = "thing";
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (!(i >= 9) && parseInt(usersDeck[i].dataset.number) === parseInt(usersDeck[i + 1].dataset.number) && parseInt(usersDeck[i].dataset.number) === parseInt(usersDeck[i + 2].dataset.number)) {
        usersDeck[i].classList.add = "grouped";
        usersDeck[i].dataset.grouped = "thing";
        usersDeck[i + 1].classList.add = "grouped";
        usersDeck[i + 1].dataset.grouped = "thing";
        usersDeck[i + 2].classList.add = "grouped";
        usersDeck[i + 2].dataset.grouped = "thing";

        if (parseInt(usersDeck[i + 3].dataset.number) === parseInt(usersDeck[i].dataset.number)) {
            usersDeck[i + 3].classList.add = "grouped";
            usersDeck[i + 3].dataset.grouped = "thing";
        }
    } else {
        deadwood += parseInt(usersDeck[i].dataset.number);
    }
}

usersDeadwood = deadwood;
};

