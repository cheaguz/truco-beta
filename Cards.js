export default class Cards { 
    #numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
    #type = ["copa", "basto", "espada", "oro"];
    #deck = []
    #playerOne=[]
    #playerTwo=[]

    constructor(){
        this.#createDeck();
        this.#shuffleDeck()
        this.#dealHands()
    }
    
     #createDeck(){
        for (let i = 0; i < this.#type.length; i++) {
            for (let j = 0; j < this.#numbers.length; j++) {
              this.#deck.push({
                number: this.#numbers[j],
                type: this.#type[i],
              });
            }
          }
    };

    #shuffleDeck(){  
            let tempDeck = this.#deck;
            for (let i = tempDeck.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
            }
            this.#deck = tempDeck
    };

    #dealHands(){
        for (let i = 0; i < 6; i++) {
            if (i >= 3) {
              this.#playerTwo.push(this.#deck.pop());
            } else {
              this.#playerOne.push(this.#deck.pop());
            }
          }
    };

    getPlayerOneHand(){
        
        return this.#playerOne
    };

    getPlayerTwoHand(){
        
        return this.#playerTwo
    };

};



