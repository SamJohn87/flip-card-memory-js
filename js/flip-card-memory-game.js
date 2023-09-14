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

//first set of cards
const card1 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
const card2 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");

//Second set of cards
const card3 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");
const card4 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");

//third set of cards
const card5 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
const card6 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");

//example of how to check a card setNumber.
console.log(`Card 1 set is ${card1.setNumberValue()}.`);