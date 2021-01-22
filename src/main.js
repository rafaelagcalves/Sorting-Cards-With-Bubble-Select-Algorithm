/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const orderNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const orderSuits = ["&spades;", "&clubs;", "&diams;", "&hearts;"];

window.onload = function() {
  let repeticion = 9;

  this.console.log(selectSort(directorDeOrquesta(repeticion)));
};

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (
        orderNumbers.indexOf(arr[index].number) >
        orderNumbers.indexOf(arr[index + 1].number)
      ) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
  }
  return arr;
};

const generateNumbers = () => {
  let cardHeight = "";
  let randomHeight = Math.floor(Math.random() * orderNumbers.length);
  cardHeight = orderNumbers[randomHeight];
  return cardHeight;
};

const generateSuits = () => {
  let suite = "";
  let randomSuite = Math.floor(Math.random() * orderSuits.length);
  if (randomSuite == 0) suite = orderSuits[0];
  if (randomSuite == 1) suite = orderSuits[1];
  if (randomSuite == 2) suite = orderSuits[2];
  if (randomSuite == 3) suite = orderSuits[3];

  return suite;
};

const generateCard = () => {
  let card = {
    number: generateNumbers(),
    suit: generateSuits()
  };
  return card;
};

const directorDeOrquesta = n => {
  let cardObject = [];
  for (let i = 0; i < n; i++) {
    cardObject.push(generateCard());
  }
  return cardObject;
};

const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let index = min + 1; index < arr.length; index++) {
      if (
        orderNumbers.indexOf(arr[min].number) >
        orderNumbers.indexOf(arr[index].number)
      ) {
        //arr[min] > orderNumbers.indexOf(arr[index].number)) {
        let aux = arr[min];
        arr[min] = arr[index];
        arr[index] = aux;
      }
    }
    min++;
  }
  return arr;
};
