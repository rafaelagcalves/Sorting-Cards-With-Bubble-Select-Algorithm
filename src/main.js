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

const orderSuits = ["\u2660", "\u2663", "\u2665", "\u2666"];

const card = document.querySelector("#card");
const inputCard = document.querySelector("#inputForCards");
const draw = document.querySelector("#draw");
const sortBubble = document.querySelector("#sortBubble");
const sortSelect = document.querySelector("#sortSelect");
const form = document.querySelector("#form");
const article = document.querySelector("#sortCards");

window.onload = function() {
  checkDraw();
  checkBubble();
};

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //newCard(arr);
      cardSort(arr);
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
      newCard(arr);
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

var arrayCards = [];

const checkDraw = () => {
  draw.addEventListener("click", event => {
    event.preventDefault();
    card.textContent = "";
    arrayCards = Array.from(directorDeOrquesta(inputCard.value));
    newCard(arrayCards);
  });
};

const newCard = arr => {
  for (let i = 0; i < arr.length; i++) {
    let card = document.querySelector("#card");
    let newCard = document.createElement("div");
    newCard.classList.add("col-sm-12", "col-lg-1", "card");
    card.appendChild(newCard);

    if (arr[i].suit == "\u2665" || arr[i].suit == "\u2666") {
      newCard.classList.add("text-danger");
    }
    let cardTop = document.createElement("div");
    cardTop.classList.add("card-title");
    newCard.appendChild(cardTop);
    let suitTop = document.createElement("p");
    suitTop.classList.add("suit1", "ml-0", "mt-1", "suit");
    cardTop.appendChild(suitTop);
    let textTop = document.createTextNode(arr[i].suit);
    suitTop.appendChild(textTop);

    let cardNumber = document.createElement("div");
    newCard.appendChild(cardNumber);
    cardNumber.classList.add(
      "card-body",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "cardHeight",
      "mb-1"
    );
    let number = document.createElement("p");
    number.classList.add("number");
    cardNumber.appendChild(number);
    let textNumber = document.createTextNode(arr[i].number);
    number.appendChild(textNumber);

    let cardBottom = document.createElement("div");
    cardBottom.classList.add(
      "card-title",
      "align-items-end",
      "suit",
      "bottomSuit"
    );
    newCard.appendChild(cardBottom);
    let suitBottom = document.createElement("p");
    suitBottom.classList.add(
      "suit1",
      "ml-0",
      "d-flex",
      "justify-content-end",
      "mb-0",
      "flip"
    );
    cardBottom.appendChild(suitBottom);
    let textBottom = document.createTextNode(arr[i].suit);
    suitBottom.appendChild(textBottom);
  }
  return arr;
};

// A PARTIR DE AQUI BOTONES PARA ORDENAR

const checkBubble = () => {
  sortBubble.addEventListener("click", event => {
    event.preventDefault();
    article.textContent = "";
    cardSort(bubbleSort(arrayCards));
  });
};

const cardSort = arr => {
  let ulList = document.createElement("ul", "listaPrincipal");
  ulList.classList.add("row");
  for (let i = 0; i < arr.length; i++) {
    let list = document.createElement("li", "list");
    list.classList.add("col-1");
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    article.appendChild(ulList);
    ulList.appendChild(list);
    list.appendChild(newCard);

    if (arr[i].suit == "\u2665" || arr[i].suit == "\u2666") {
      newCard.classList.add("text-danger");
    }
    let cardTop = document.createElement("div");
    cardTop.classList.add("card-title");
    newCard.appendChild(cardTop);
    let suitTop = document.createElement("p");
    suitTop.classList.add("suit1", "ml-0", "mt-1", "suit");
    cardTop.appendChild(suitTop);
    let textTop = document.createTextNode(arr[i].suit);
    suitTop.appendChild(textTop);

    let cardNumber = document.createElement("div");
    newCard.appendChild(cardNumber);
    cardNumber.classList.add(
      "card-body",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "cardHeight",
      "mb-1"
    );
    let number = document.createElement("p");
    number.classList.add("number");
    cardNumber.appendChild(number);
    let textNumber = document.createTextNode(arr[i].number);
    number.appendChild(textNumber);

    let cardBottom = document.createElement("div");
    cardBottom.classList.add(
      "card-title",
      "align-items-end",
      "suit",
      "bottomSuit"
    );
    newCard.appendChild(cardBottom);
    let suitBottom = document.createElement("p");
    suitBottom.classList.add(
      "suit1",
      "ml-0",
      "d-flex",
      "justify-content-end",
      "mb-0",
      "flip"
    );
    cardBottom.appendChild(suitBottom);
    let textBottom = document.createTextNode(arr[i].suit);
    suitBottom.appendChild(textBottom);
  }
  return arr;
};
