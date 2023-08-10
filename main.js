const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
const type = ["copa", "basto", "espada", "oro"];

const Deck = (numbers, type) => {
  let deck = [];
  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      deck.push({
        number: numbers[j],
        type: type[i],
      });
    }
  }

  return deck;
};

const Mezclar = (arr) => {
  let tempDeck = arr;
  for (let i = tempDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
  }
  return tempDeck;
};

/* modificar para que reparta 1 sola mano  */
const Hands = (deck) => {
  let playerOne = [];
  let playerTwo = [];

  for (let i = 0; i < 6; i++) {
    if (i >= 3) {
      playerTwo.push(deck.pop());
    } else {
      playerOne.push(deck.pop());
    }
  }
  return {
    playerOne,
    playerTwo,
  };
};

/* ---------------------------------------------------------------------------------------------- */
const values = {
  FLOR: "flor",
  FIRST: "primera y segunda coinciden",
  SECOND: "primera y tercera coindiden",
  THIRD: "segunda y tercera coinciden",
  NONE: "no hay coincidencias",
};

const verifyPoints = (hand) => {
  let base = hand[0].type;
  if (hand[1].type == base && hand[2].type == base) {
    console.log("hay flor");
    return values.FLOR;
  } else if (hand[1].type == base) {
    console.log("Primera y segunda coinciden");
    return values.FIRST;
  } else if (hand[2].type == base) {
    console.log("primera y tercera coinciden");
    return values.SECOND;
  } else if (hand[1].type == hand[2].type) {
    console.log("segunda y tercera coinciden");
    return values.THIRD;
  } else {
    console.log("no hay coincidencias");
    return values.NONE;
  }
};

const setEnvidoPoints = (value) => {
  value > 7 ? (value = value - 10) : (value = value);
  return value;
};

const envidoValues = (hand, type, values) => {
  switch (type) {
    case values.FIRST:
      if (hand[0].number > 7 && hand[1].number > 7) {
        return 20;
      } else {
        return (
          setEnvidoPoints(hand[0].number) + setEnvidoPoints(hand[1].number) + 20
        );
      }
    case values.SECOND:
      if (hand[0].number > 7 && hand[2].number > 7) {
        return 20;
      } else {
        return (
          setEnvidoPoints(hand[0].number) + setEnvidoPoints(hand[2].number) + 20
        );
      }

    case values.THIRD:
      if (hand[1].number > 7 && hand[2].number > 7) {
        return 20;
      } else {
        return (
          setEnvidoPoints(hand[1].number) + setEnvidoPoints(hand[2].number) + 20
        );
      }

    case values.FLOR:
      return hand[0].number + hand[1].number + hand[2].number;
    case values.NONE:
      /* Verificar carta mas alta */
      return "no points";
    default:
      return;
  }
};

/* -------------------------------------------------------------------------------------- */
/* 
1 ORO    - 13
1 COPA   - 13
2        - 14
3        - 16
7 ORO    - 16
7 ESPADA - 17
1 BASTO  - 18
1 ESPADA - 19

*/

const cardValues = {
  ORO1: "1 DE ORO",
  COPA1: "1 DE BASTO",
  DOS: "DOS",
  TRES: "TRES",
  ORO7: "7 DE ORO",
  ESPADA7: "7 DE ESPADA",
  BASTO1: "1 DE BASTO",
  ESPADA1: "1 DE ESPADA",
  NORMAL: "NORMAL",
};

const verifyTrucoPoints = ({ number, type }) => {
  if (number == 1 && type == "oro") {
    return cardValues.ORO1;
  } else if (number == 1 && type == "copa") {
    return cardValues.COPA1;
  } else if (number == 2) {
    return cardValues.DOS;
  } else if (number == 3) {
    return cardValues.TRES;
  } else if (number == 7 && type == "oro") {
    return cardValues.ORO7;
  } else if (number == 7 && type == "espada") {
    return cardValues.ESPADA7;
  } else if (number == 1 && type == "basto") {
    return cardValues.BASTO1;
  } else if (number == 1 && type == "espada") {
    return cardValues.ESPADA1;
  } else {
    return cardValues.NORMAL;
  }
};

const setTrucoValues = (card, value, cardValues) => {
  switch (value) {
    case cardValues.ORO1:
      return 13;
      break;

    case cardValues.COPA1:
      return 13;
      break;

    case cardValues.DOS:
      return 14;
      break;

    case cardValues.TRES:
      return 15;
      break;

    case cardValues.ORO7:
      return 16;
      break;

    case cardValues.ESPADA7:
      return 17;
      break;

    case cardValues.BASTO1:
      return 18;
      break;

    case cardValues.ESPADA1:
      return 19;
      break;

    case cardValues.NORMAL:
      return card.number;
      break;

    default:
      break;
  }
};
/* ---------------------------------------------------------------------------------------------- */
let deck = Deck(numbers, type);
let randomDeck = Mezclar(deck);
let hands = Hands(randomDeck);
let points = envidoValues(
  hands.playerOne,
  verifyPoints(hands.playerOne),
  values
);

verifyPoints(hands.playerOne);
console.log(hands.playerOne);
console.log("puntos", points);



let cardPoint = setTrucoValues(hands.playerOne[0] ,verifyTrucoPoints(hands.playerOne[0]), cardValues)
console.log('puntaje primera carta',cardPoint)