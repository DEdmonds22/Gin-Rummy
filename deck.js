// DOM elements
const computers = document.getElementById("computers");
const main = document.querySelector(".main");
const pluckPile = document.getElementById("pluckPile");
const discardPile = document.getElementById("discardPile");
const users = document.getElementById("users");
const passBtn = document.querySelector(".pass-btn");
const sortingBtns = document.querySelector(".sorting-btns");
const suitBtn = document.getElementById("suit-btn");
const numberBtn = document.getElementById("number-btn");
const discardBtn = document.getElementById("discard-btn");
const knockBtn = document.getElementById("knock-btn");
const ginBtn = document.getElementById("gin-btn");

// global variables
let shuffledPluckPileArray = [];
let shuffledPluckPile = [];
const computersDeck = [];
let usersDeck = [];
let usersDeadwood = null;
let computersDeadwood = null;
let numberOfRounds = 1;
let roundWinner = null;
const winner = null;
let selectedCard = null;

// Functions
// Generate the data
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
    for (let i = 0; i < 21; i++) {
        const firstElement = cardData.shift();
        firstTwentyOne.push(firstElement);
    };
/*
    for (let i = 0; i < cardData.length; i++) {

    };*/

    for (let i = 0; i < 21; i++) {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        const backImg = document.createElement("img");

        card.classList.add = "card";
        face.classList.add = "face";
        face.classList.add = "name";
        face.classList.add = "suit";
        face.classList.add = "number";
        back.classList.add = "back";
        backImg.classList.add = "backImg";

        card.dataset.card = "card";
        face.src = firstTwentyOne[i].imgSrc;
        face.dataset.name = firstTwentyOne[i].name;
        face.dataset.suit = firstTwentyOne[i].suit;
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

        };
    };
    console.log(cardData)
    shuffledPluckPileArray.push(cardData);
}

const cardCreation = () => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    const backImg = document.createElement("img");

    card.classList.add = "card";
    face.classList.add = "face";
    face.classList.add = "name";
    face.classList.add = "suit";
    face.classList.add = "number";
    back.classList.add = "back";
    backImg.classList.add = "backImg";

    card.dataset.card = "card";
    face.src = shuffledPluckPile[0].imgSrc;
    face.dataset.name = shuffledPluckPile[0].name;
    face.dataset.suit = shuffledPluckPile[0].suit;
    face.dataset.number = shuffledPluckPile[0].number;
    backImg.src = "scr/playingcards/Backing.png";

    users.appendChild(card)
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', function() {
        // Handle click event for the new card
        if (!selectedCard) {
            // If no card is currently selected, store the clicked card
            selectedCard = card;
            selectedCard.classList.add = 'selected';
        } else {
            // If another card is already selected, swap the positions
            swapCards(selectedCard, card);
            selectedCard.classList.remove = 'selected';
            selectedCard = null;
        }
        
    });

    usersDeck.push(face)

    usersDeck.forEach(card => {
        card.style.cursor = "pointer";
    })

    discardBtn.style.visibility = "visible";
    passBtn.style.display = "none";
    sortingBtns.style.visibility = "visible";
}

dealers()

// converts the array into something accessible/manipulitable
const usersD = Array.from(users.querySelectorAll("img"));
for (let i = 0; i < usersD.length; i++) {
    usersDeck.push(usersD[i]);
}

shuffledPluckPileArray[0].forEach(card => {
    shuffledPluckPile.push(card);
})

// when discard pile is clicked
const discardPileFunction = function(event) {
    const parentDiv = event.target.parentNode;
    passBtn.style.display = "none";
    sortingBtns.style.visibility = "visible";
    users.appendChild(parentDiv);
    usersDeck.push(event.target);
/*
    parentDiv.addEventListener('click', function() {
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

    usersDeck.forEach(card => {
        card.style.cursor = "pointer";
    })*/

    discardBtn.style.visibility = "visible";
    discardPile.removeEventListener("click", discardPileFunction);
    pluckPile.removeEventListener("click", pluckPileFunction);
}

// when discardPile is clicked
discardPile.addEventListener("click", discardPileFunction);

// when pluckPile ic clicked
// Define the event listener function separately
const pluckPileFunction = () => {
    cardCreation();
    shuffledPluckPile.shift();
  
    discardPile.removeEventListener("click", discardPileFunction);
    pluckPile.removeEventListener("click", pluckPileFunction);

};
  
  // Add the event listener
pluckPile.addEventListener("click", pluckPileFunction);

  

// when pass button is clicked
passBtn.addEventListener("click", () => {
    passBtn.style.display = "none";
    userPassed = true;

    computerTurn();
})

// when suitBtn is clicked
suitBtn.addEventListener("click", () => {
    suitBtn.classList.add("clicked");
    numberBtn.classList.remove("clicked");

    usersDeck.sort((card1, card2) => {
        const name1 = card1.dataset.name;
        const name2 = card2.dataset.name;
        return name1.localeCompare(name2);
    });
    users.innerHTML = "";
    usersDeck.forEach(card => users.appendChild(card));

    removeGrouped()
    pair()
})

// when numberbtn is clicked
numberBtn.addEventListener("click", () => {
    numberBtn.classList.add("clicked");
    suitBtn.classList.remove("clicked");

    usersDeck.sort((card1, card2) => {
        const numberOne = card1.dataset.number;
        const numberTwo = card2.dataset.number;
        return numberOne.localeCompare(numberTwo);
    });
    users.innerHTML = "";
    usersDeck.forEach(card => users.appendChild(card));

    removeGrouped()
    pair()
})

ginBtn.addEventListener("click", () => {
    console.log("gin button clicked");
});

knockBtn.addEventListener("click", () => {
    console.log("knock button cllicked");
})

discardBtn.addEventListener("click", () => {
    if (selectedCard === null) {
        console.log("select a card first"); //prompt later stages 
    } else {
        discardPile.appendChild(selectedCard.parentNode);
        discardBtn.style.visibility = "hidden";
        selectedCard.classList.remove = 'selected'
        removeGrouped()

        turn = "computer"
        computersTurn();
    }
})

// Add click event listeners to each card
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

users.addEventListener("click", () => {
    console.log("clicked users")
    removeGrouped()
    pair()

    if (usersDeck.filter(card => card.hasAttribute("data-grouped")).length <= 1 && usersDeadwood <= 10) {
        ginBtn.style.visibility = "visible";
    } else if (usersDeadwood <= 10) {
        knockBtn.style.visibility = "visible";
    }
})

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


function removeGrouped() {
    usersDeck.forEach( item => {
        if (item.hasAttribute("data-grouped") && item.getAttribute("data-grouped") === "thing") {
            item.removeAttribute("data-grouped")
        }
    })
}

function pair() { //place in while loop ?
    let deadwood = null

    //cycles 11 times, each card, this runs for each card
    for (let i = 0; i < 11; i++) {

        //skips card if already grouped
        if (usersDeck[i].hasAttribute("data-grouped") && usersDeck[i].getAttribute("data-grouped") === "thing"){
            continue

        // first ignores same number, checks if 3 of the same suit
        } else if  (!(i >= 9) && (usersDeck[i].dataset.suit === usersDeck[i + 1].dataset.suit) && (usersDeck[i].dataset.suit === usersDeck[i + 2].dataset.suit)) {
            const suit = usersDeck[i].dataset.suit;
            const valueOne = parseInt(usersDeck[i].dataset.number);
            const valueTwo = parseInt(usersDeck[i + 1].dataset.number);
            const valueThree = parseInt(usersDeck[i +2].dataset.number);
            
            // since suit is the same checks if card is a k - value 13 
            if (valueOne === 13 && valueTwo === 1 && valueThree === 2) {
                usersDeck[i].classList.add = "grouped";
                usersDeck[i].dataset.grouped = "thing";
                usersDeck[i + 1].classList.add = "grouped";
                usersDeck[i + 1].dataset.grouped = "thing";
                usersDeck[i + 2].classList.add = "grouped";
                usersDeck[i + 2].dataset.grouped = "thing";

                // checks next card and so on 
                if (usersDeck[i + 3].dataset.suit === suit && parseInt(usersDeck[i + 3].dataset.number) === 3) {
                    usersDeck[i + 3].classList.add = "grouped";
                    usersDeck[i + 3].dataset.grouped = "thing";
                    
                    if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === 4) {
                        usersDeck[i + 4].classList.add = "grouped";
                        usersDeck[i + 4].dataset.grouped = "thing";
                        
                        if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 5) {
                            usersDeck[i + 5].classList.add = "grouped";
                            usersDeck[i + 5].dataset.grouped = "thing";
                            
                            if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 6) {
                                usersDeck[i + 6].classList.add = "grouped";
                                usersDeck[i + 6].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 7) {
                                    usersDeck[i + 7].classList.add = "grouped";
                                    usersDeck[i + 7].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 8) {
                                        usersDeck[i + 8].classList.add = "grouped";
                                        usersDeck[i + 8].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 9) {
                                            usersDeck[i + 9].classList.add = "grouped";
                                            usersDeck[i + 9].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 10) {
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

            // since suit is the same, card isnt k, checks if the second card i+1 is k - value 13
            } else if (valueOne === 12 && valueTwo === 13 && valueThree === 1) {
                usersDeck[i].classList.add = "grouped";
                usersDeck[i].dataset.grouped = "thing";
                usersDeck[i + 1].classList.add = "grouped";
                usersDeck[i + 1].dataset.grouped = "thing";
                usersDeck[i + 2].classList.add = "grouped";
                usersDeck[i + 2].dataset.grouped = "thing";

                // checks next card and so on 
                if (usersDeck[i + 3].dataset.suit === suit && parseInt(usersDeck[i + 3].dataset.number) === 2) {
                    usersDeck[i + 3].classList.add = "grouped";
                    usersDeck[i + 3].dataset.grouped = "thing";
                    
                    if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === 3) {
                        usersDeck[i + 4].classList.add = "grouped";
                        usersDeck[i + 4].dataset.grouped = "thing";
                        
                        if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 4) {
                            usersDeck[i + 5].classList.add = "grouped";
                            usersDeck[i + 5].dataset.grouped = "thing";
                            
                            if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 5) {
                                usersDeck[i + 6].classList.add = "grouped";
                                usersDeck[i + 6].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 6) {
                                    usersDeck[i + 7].classList.add = "grouped";
                                    usersDeck[i + 7].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 7) {
                                        usersDeck[i + 8].classList.add = "grouped";
                                        usersDeck[i + 8].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 8) {
                                            usersDeck[i + 9].classList.add = "grouped";
                                            usersDeck[i + 9].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 9) {
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
            // since suit is the same, card and car i+1 isnt k, checks if the third card is k - value 13
            } else if (valueOne === 11 && valueTwo == 12 && valueThree === 13) {
                usersDeck[i].classList.add = "grouped";
                usersDeck[i].dataset.grouped = "thing";
                usersDeck[i + 1].classList.add = "grouped";
                usersDeck[i + 1].dataset.grouped = "thing";
                usersDeck[i + 2].classList.add = "grouped";
                usersDeck[i + 2].dataset.grouped = "thing";

                // checks next card and so on 
                if (usersDeck[i + 3].dataset.suit === suit && parseInt(usersDeck[i + 3].dataset.number) === 1) {
                    usersDeck[i + 3].classList.add = "grouped";
                    usersDeck[i + 3].dataset.grouped = "thing";
                    
                    if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === 2) {
                        usersDeck[i + 4].classList.add = "grouped";
                        usersDeck[i + 4].dataset.grouped = "thing";
                        
                        if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 3) {
                            usersDeck[i + 5].classList.add = "grouped";
                            usersDeck[i + 5].dataset.grouped = "thing";
                            
                            if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 4) {
                                usersDeck[i + 6].classList.add = "grouped";
                                usersDeck[i + 6].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 5) {
                                    usersDeck[i + 7].classList.add = "grouped";
                                    usersDeck[i + 7].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 6) {
                                        usersDeck[i + 8].classList.add = "grouped";
                                        usersDeck[i + 8].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 7) {
                                            usersDeck[i + 9].classList.add = "grouped";
                                            usersDeck[i + 9].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 8) {
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

            // since suits are the same, and none of the first selescted cards are k procceed as normal 
            } else if (valueOne <= 10) {
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
                                            } else if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 13 && valueOne + 9 === 13) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 1) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";

                                                }                                               
                                            }
                                        } else if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 13 && valueOne + 8 === 13) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 1) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 2) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";

                                                }
                                            }                                               
                                        }
                                    } else if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 13 && valueOne + 7 === 13) {
                                        usersDeck[i + 7].classList.add = "grouped";
                                        usersDeck[i + 7].dataset.grouped = "thing";
                                        if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 1) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 2) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 3) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";
                                                    
                                                }
                                            }
                                        }                                               
                                    }
                                } else if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 13 && valueOne + 6 === 13) {
                                    usersDeck[i + 6].classList.add = "grouped";
                                    usersDeck[i + 6].dataset.grouped = "thing";
                                    if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 1) {
                                        usersDeck[i + 7].classList.add = "grouped";
                                        usersDeck[i + 7].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 2) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 3) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 4) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";

                                                }
                                            }
                                        }
                                    }                                                     
                                }
                            } else if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 13 && valueOne + 5 === 13) {
                                usersDeck[i + 5].classList.add = "grouped";
                                usersDeck[i + 5].dataset.grouped = "thing";
                                if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 1) {
                                    usersDeck[i + 6].classList.add = "grouped";
                                    usersDeck[i + 6].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 2) {
                                        usersDeck[i + 7].classList.add = "grouped";
                                        usersDeck[i + 7].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 3) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 4) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 5) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";
                                                    
                                                }
                                            }
                                        }
                                    }
                                }                                              
                            }
                        } else if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === 13 && valueOne + 4 === 13) {
                            usersDeck[i + 4].classList.add = "grouped";
                            usersDeck[i + 4].dataset.grouped = "thing";
                            if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 1) {
                                usersDeck[i + 5].classList.add = "grouped";
                                usersDeck[i + 5].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 2) {
                                    usersDeck[i + 6].classList.add = "grouped";
                                    usersDeck[i + 6].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 3) {
                                        usersDeck[i + 7].classList.add = "grouped";
                                        usersDeck[i + 7].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 4) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 5) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 6) {
                                                    usersDeck[i + 10].classList.add = "grouped";
                                                    usersDeck[i + 10].dataset.grouped = "thing";
                                                }
                                            }
                                        }
                                    }
                                }
                            }                                          
                        }
                    // any of the follow up cards = 12 ...
                    } else if (usersDeck[i + 3].dataset.suit === suit && parseInt(usersDeck[i + 3].dataset.number) === 13 && valueOne + 3 === 13) {
                        usersDeck[i + 3].classList.add = "grouped";
                        usersDeck[i + 3].dataset.grouped = "thing";
                        if (usersDeck[i + 4].dataset.suit === suit && parseInt(usersDeck[i + 4].dataset.number) === 1) {
                            usersDeck[i + 4].classList.add = "grouped";
                            usersDeck[i + 4].dataset.grouped = "thing";
                            
                            if (usersDeck[i + 5].dataset.suit === suit && parseInt(usersDeck[i + 5].dataset.number) === 2) {
                                usersDeck[i + 5].classList.add = "grouped";
                                usersDeck[i + 5].dataset.grouped = "thing";
                                
                                if (usersDeck[i + 6].dataset.suit === suit && parseInt(usersDeck[i + 6].dataset.number) === 3) {
                                    usersDeck[i + 6].classList.add = "grouped";
                                    usersDeck[i + 6].dataset.grouped = "thing";
                                    
                                    if (usersDeck[i + 7].dataset.suit === suit && parseInt(usersDeck[i + 7].dataset.number) === 4) {
                                        usersDeck[i + 7].classList.add = "grouped";
                                        usersDeck[i + 7].dataset.grouped = "thing";
                                        
                                        if (usersDeck[i + 8].dataset.suit === suit && parseInt(usersDeck[i + 8].dataset.number) === 5) {
                                            usersDeck[i + 8].classList.add = "grouped";
                                            usersDeck[i + 8].dataset.grouped = "thing";
                                            
                                            if (usersDeck[i + 9].dataset.suit === suit && parseInt(usersDeck[i + 9].dataset.number) === 6) {
                                                usersDeck[i + 9].classList.add = "grouped";
                                                usersDeck[i + 9].dataset.grouped = "thing";
                                                
                                                if (usersDeck[i + 10].dataset.suit === suit && parseInt(usersDeck[i + 10].dataset.number) === 7) {
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
            }
        
        //ignores suit, checks if same number
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
            deadwood += parseInt(usersDeck[i].dataset.number)
        }
    }

    usersDeadwood = deadwood;
}


// COMPUTER'S LOGIC
let choicesToDiscard = [];

const computersTurn = () => {
    discardPile.removeEventListener("click", discardPileFunction)   //no effect when user clicks on discardPile
    pluckPile.removeEventListener("click", pluckPileFunction);
    discardBtn.style.visibility = "hidden";
    knockBtn.style.visibility = "hidden";
    ginBtn.style.visibility = "hidden";

    const computersD = Array.from(computers.querySelectorAll("img"));

    for (let i = 0; i < computersD.length; i++) {
        if (computersD[i].hasAttribute("data-number")){
            computersDeck.push(computersD[i]);
        }
    }

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

    turn = "user";
    numberOfRounds += 1;
    discardPile.addEventListener("click", discardPileFunction);
    pluckPile.addEventListener("click", pluckPileFunction);
}

// COMPUTERS FUNCTIONS
const grabFromDiscardPile = () => {
    passBtn.style.display = "none";
    const card = discardPile.firstChild
    card.firstChild.style.display = "none";
    console.log(card)
    console.log(card.firstChild)

    const backImg = document.createElement("img");
    backImg.classList.add = "backImg";
    backImg.src = "scr/playingcards/Backing.png";

    card.lastChild.appendChild(backImg)
    computers.appendChild(card);
}

const pairTheNumbers = () => {
    let deadwood = null;

    for (let i = 0; i < computersDeck.length; i++) {
        const currentCard = computersDeck[i];
        const number = currentCard.dataset.number;
        // Count the occurrences of the current card's number in the array
        const occurrences = computersDeck.filter(card => card.dataset.number === number).length;
      
        if (occurrences >= 3) {
            currentCard.classList.add = "grouped";
            currentCard.dataset.grouped = "thing";
        } else {
            deadwood += parseInt(number);
        }
    }
    computersDeadwood = deadwood;
};

const findOutliers = () => {
    const outliers = computersDeck.filter(card => !card.hasAttribute("data-grouped"));
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
  