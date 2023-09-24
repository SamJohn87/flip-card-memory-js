/* Create a class called Card with 2 properties.
setNumber: Number used to check if 2 cards belongs to the same set.
url: Literal path of an online image. */
class Card {
    //Constructor used to define an object of the Card class
    constructor(setNumber, url) {
        this.setNumber = setNumber;
        this.url = url;
    }
    
    //This function return the Object's value of the property setNumber.
    //Will be used to check if 2 cards are from the same set.
    setNumberValue() {
        return this.setNumber;
    }
}

//GLOBAL VARIABLES
const CARDS = []; //Create an array to store all the cards created, so we can use index of array to access individual card information
let CARD_SELECTED = []; //Array used to log player card id picked
const SETS_FOUND = []; //Array used to keep track of card set found by player
const NUM_TRIES =[]; //Array used to keep track of player attempts
const SCORE = 0; //Variable keeping track of player's score
let showCardFunctionsArr = []; //Array to keep track of functions created by eventlistener
let arrIdx = 0; //index of array to locate functions in showCardFunctionsArr array
let idNumber = 0; //get the number portion of the card id (e.g card1 idNumber will be 1)
let theImgContainer; //container of the image receving the events from evenlistener

//first set of cards
const card1 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
CARDS.push(card1); // add card to library of cards
const card2 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
CARDS.push(card2);// add card to library of cards

//Second set of cards
const card3 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");
CARDS.push(card3); // add card to library of cards
const card4 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");
CARDS.push(card4); // add card to library of cards

//third set of cards
const card5 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
CARDS.push(card5); // add card to library of cards
const card6 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
CARDS.push(card6); // add card to library of cards

//example of how to check a card setNumber.
console.log(`card3 is part of set number ${card3.setNumberValue()}.`);
console.log(`card4 is part of set number ${card4.setNumberValue()}.`);

//Adding onclick events to each div card 
for(i = 1; i < 7; i++) {
    let element = document.querySelector(`#card${i}`);
    let elementID = element.id;
    let showCardFunction = () => showCard(elementID); 
    //memorize function by adding it to array
    showCardFunctionsArr.push(showCardFunction); //even function is the same, considered different methods by javascript
    element.addEventListener('click', showCardFunction);
}

//function to display card's picture
function showCard(id){

    let cardElement = document.querySelector(`#${id}`);
    //create images element and add related src to element
    theImgContainer = document.querySelector(`#${id} > .flip-card-back`);
    let theImg = document.createElement('img');
    idNumber = id[id.length-1]; //get the number part of the card id, which is last character
    arrIdx = idNumber-1;
    theImg.src = CARDS[arrIdx].url; //card5 picture is in array index 4, 5-1=4

    //add img element to DOM
    theImgContainer.appendChild(theImg);

    //remove eventListener so user cannot click again on the same card
    cardElement.removeEventListener('click', showCardFunctionsArr[arrIdx]); //getting the correct function for the card element

    //add card to CARD_SELECTED array as a card selected by user
    CARD_SELECTED.push(id);
    
    //display card
    cardElement.classList.add('flipped-card-inner');

    //display in console card selected
    console.log(id); 

    //if 2 cards are selected, hide both cards 
    if(CARD_SELECTED.length === 2) {
        //delay the call to hideCards function by 1 second - 1000 millisecond
        setTimeout(() => {
            hideCards();
        }, 1000);
    }
}

function hideCards() {
    for (let card of CARD_SELECTED) {
        let theCard = document.querySelector(`#${card}`); 
        theCard.classList.remove('flipped-card-inner'); 
        
        //restore onclick event
        idNumber = card[card.length-1]; //get the number part of the card id, which is last character
        arrIdx = idNumber-1;
        theCard.addEventListener('click', showCardFunctionsArr[arrIdx]);

        //delete img element
        theImgContainer = document.querySelector(`#${card} > .flip-card-back`);
        theImgContainer.removeChild(theImgContainer.firstElementChild);
    }

    //empty CARD_SELECTED array no cards are selected
    CARD_SELECTED = [];
}