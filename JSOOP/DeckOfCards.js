class Deck{
    constructor(){
        this.resetDeck()
    }

    printDeck(){
        for(var i = 0; i < this.DeckofCards.length; i++){
            console.log(this.DeckofCards[i])
        }
    }

    shuffleDeck(){
        for(var i = 0; i < this.DeckofCards.length; i++){
            var randomIndex = Math.floor(Math.random() * 52)
            var temp = this.DeckofCards[i]
            this.DeckofCards[i] = this.DeckofCards[randomIndex]
            this.DeckofCards[randomIndex] = temp
        }
        return this.DeckofCards
    }

    dealCard(){
        this.dealtCard = this.DeckofCards[0]
        this.DeckofCards.splice(0, 1)
        return this.dealtCard
    }

    resetDeck(){
        this.DeckofCards = []
        this.suits = ["hearts", "diamonds", "clubs", "spades"]
        this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
        for(var i = 0; i < this.suits.length; i++){
            for(var j = 0; j < this.value.length; j++){
                this.card = this.value[j] + ' of ' + this.suits[i]
                this.DeckofCards.push(this.card)
            }
        }
    }
}

class Player {
    constructor(name){
        this.name = name
        this.hand = []
    }

    printHand(){
        console.log(this.name + " has these cards:")
        for(var i = 0; i < this.hand.length; i++){
            console.log(this.hand[i])
        }
    }

    takeCard(specificDeck){
        this.hand.push(specificDeck.dealCard())
    }

    discardCard(){
        var chosenCard = Math.floor(Math.random() * this.hand.length)
        console.log(this.hand[chosenCard])
        this.hand.splice(chosenCard, 1)
    }
}

const newDeck = new Deck()
const PlayerOne = new Player("Steve")
const PlayerTwo = new Player("Karl")


newDeck.shuffleDeck()
newDeck.printDeck()

console.log("--------------------------")
PlayerOne.takeCard(newDeck)
PlayerOne.takeCard(newDeck)
PlayerOne.takeCard(newDeck)
PlayerOne.takeCard(newDeck)
PlayerOne.takeCard(newDeck)
PlayerOne.printHand()
console.log("--------------------------")
PlayerOne.discardCard()
PlayerOne.discardCard()
console.log("--------------------------")
PlayerOne.takeCard(newDeck)
PlayerOne.takeCard(newDeck)
PlayerOne.printHand()

console.log("--------------------------")
PlayerTwo.takeCard(newDeck)
PlayerTwo.takeCard(newDeck)
PlayerTwo.takeCard(newDeck)
PlayerTwo.takeCard(newDeck)
PlayerTwo.takeCard(newDeck)
PlayerTwo.printHand()
console.log("--------------------------")
PlayerTwo.discardCard()
PlayerTwo.discardCard()
console.log("--------------------------")
PlayerTwo.takeCard(newDeck)
PlayerTwo.takeCard(newDeck)
PlayerTwo.printHand()




