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

const card = document.querySelector("#card");
const inputCard = document.querySelector("#inputForCards");
const draw = document.querySelector("#draw");
const sortBubble = document.querySelector("#sortBubble");
const sortSelect = document.querySelector("#sortSelect");

window.onload = function() {
  this.console.log(directorDeOrquesta(inputCard.value));
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
  let randomHeight = Math.floor(Math.random() * orderNumbers.length);
  let cardHeight = orderNumbers[randomHeight];
  return cardHeight;
};

const generateSuits = () => {
  let randomSuite = Math.floor(Math.random() * orderSuits.length);
  let suite = orderSuits[randomSuite];
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
        let aux = arr[min];
        arr[min] = arr[index];
        arr[index] = aux;
      }
    }
    min++;
  }
  return arr;
};

const isNumber = input => {
  return Number(input.value) % 1 == 0;
};

const checkInputCard = input => {
  input.addEventListener("focusout", event => {
    isNumber(input) && input.value.length > 0 && input.value.length < 53
      ? true
      : false;
  });
};

const checkDraw = input => {
  draw.addEventListener("submit", event => {
    preventDefault();
    checkinputCard(input);
  });
};
