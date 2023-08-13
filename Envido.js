export default class Envido {
    num1;
    num2;
    num3;
    hasFlor = true;

    constructor(hand){
        this.num1 = hand[0];
        this.num2 = hand[1];
        this.num3 = hand[2];
    }

    #validatePoints(value){
        value > 7 ? (value = value - 10) : (value = value);
        return value;
    };

    #getMayorCard (){
        let cards = [this.num1 , this.num2, this.num3].filter(c=> c.number <= 7);
        let mayor = cards[0]
        cards.map(c => c.number > mayor.number ? mayor = c : mayor=mayor);

        return mayor
    };

    #getValues(num1, num2){
        if(num1.number >7 && num2.number > 7){
            return 20
        }else{
            return  this.#validatePoints(num1.number) + this.#validatePoints(num2.number) + 20  
        }
    }

    getPoints(){
        if(this.num1.type == this.num2.type && this.num1.type == this.num3.type ){
            if(this.hasFlor){
                return 100  
            }
        }

        else if(this.num2.type == this.num1.type){
           return this.#getValues(this.num2 , this.num1) 
        }

        else if(this.num3.type == this.num1.type){
            return this.#getValues(this.num3 , this.num1)
        }

        else if(this.num3.type == this.num2.type){
            return this.#getValues(this.num3 , this.num2)
        }

        else {
            let card = this.#getMayorCard()
            return card.number
        }
        
    };

};

