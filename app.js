document.addEventListener("DOMContentLoaded", () => {
  //card options
  const fruitCards = [
    {
      name: "apple",
      img: "images/png/apple.png",
    },
    {
      name: "apple",
      img: "images/png/apple.png",
    },
    {
      name: "banana",
      img: "images/png/banana.png",
    },
    {
      name: "banana",
      img: "images/png/banana.png",
    },
    {
      name: "cherries",
      img: "images/png/cherries.png",
    },
    {
      name: "cherries",
      img: "images/png/cherries.png",
    },
    {
      name: "grapes",
      img: "images/png/grapes.png",
    },
    {
      name: "grapes",
      img: "images/png/grapes.png",
    },
    {
      name: "lemon",
      img: "images/png/lemon.png",
    },
    {
      name: "lemon",
      img: "images/png/lemon.png",
    },
    {
      name: "orange",
      img: "images/png/orange.png",
    },
    {
      name: "orange",
      img: "images/png/orange.png",
    },
    {
      name: "pear",
      img: "images/png/pear.png",
    },
    {
      name: "pear",
      img: "images/png/pear.png",
    },
    {
      name: "pineapple",
      img: "images/png/pineapple.png",
    },
    {
      name: "pineapple",
      img: "images/png/pineapple.png",
    },
    {
      name: "raspberry",
      img: "images/png/raspberry.png",
    },
    {
      name: "raspberry",
      img: "images/png/raspberry.png",
    },
    {
      name: "strawberry",
      img: "images/png/strawberry.png",
    },
    {
      name: "strawberry",
      img: "images/png/strawberry.png",
    },
  ];

  deckSize = 16;
  cardDeck = fruitCards.slice(0, deckSize);

  cardDeck.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var cardImages = [];
  var guesses = 0;
  var cardsChosenId = [];
  var cardsWonId = [];

  function createBoard() {
    for (let i = 0; i < cardDeck.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/png/card_back.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", selectCard);
      grid.appendChild(card);
    }
    guesses = 0;
    cardImages = document.querySelectorAll("img");
  }

  function evaluateCards() {
    const cardOneId = cardsChosenId[0];
    const cardTwoId = cardsChosenId[1];
    guesses += 1;
    if (isMatch(cardOneId, cardTwoId)) {
      removeCard(cardOneId);
      removeCard(cardTwoId);
    } else {
      hideCard(cardOneId);
      hideCard(cardTwoId);
    }
    cardsChosenId = [];
    resultDisplay.textContent = guesses;
    if (cardsWonId.length == cardDeck.length) {
      resultDisplay.textContent = "Congratulations! You matched them all!";
    }
  }

  function hideCard(cardId) {
    cardImages[cardId].setAttribute("src", "images/png/card_back.png");
  }

  function isMatch(cardOneId, cardTwoId) {
    return cardOneId != cardTwoId && cardDeck[cardOneId].img == cardDeck[cardTwoId].img;
  }

  function removeCard(cardId) {
    cardsWonId.push(cardId);
    cardImages[cardId].setAttribute("src", "images/png/blank.png");
  }

  function selectCard() {
    var cardId = this.getAttribute("data-id");
    if (!cardsChosenId.includes(cardId)) {
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardDeck[cardId].img);
      if (cardsChosenId.length === 2) {
        setTimeout(evaluateCards, 750);
      }
    }
  }

  createBoard();
});
