import * as readline from "node:readline";
const rl = readline.createInterface(process.stdin, process.stdout);

import Envido from "./Envido.js";
import verifyTrucoPoints from "./Truco.js";
import Cards from "./Cards.js";

const main = () => {
  let cards = new Cards();

  let player1 = cards.getPlayerOneHand();

  let envido = new Envido(player1);

  console.log("Puntos de envido ", envido.getPoints());

  let turn;

  const showCards = () => {
    let str = [];
    player1.map((p, i) => str.push(`[${i}] - ${p.number}-${p.type} \n`));
    return str;
  };

  let hand = showCards();

  rl.question(`Tus cartas \n ${showCards()}`, (option) => {
    console.log("Elegiste : ", player1[parseInt(option)]);

    rl.close();
  });
};

main();
