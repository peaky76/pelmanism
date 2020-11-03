document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardDeck = [
    {
      name: "apple",
      img: "images/png/apple.png",
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
      name: "grapes",
      img: "images/png/grapes.png",
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
      name: "raspberry",
      img: "images/png/raspberry.png",
    },
    {
      name: "pineapple",
      img: "images/png/pineapple.png",
    },
    {
      name: "strawberry",
      img: "images/png/strawberry.png",
    },
    {
      name: "lemon",
      img: "images/png/lemon.png",
    },
    {
      name: "apple",
      img: "images/png/apple.png",
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
      name: "grapes",
      img: "images/png/grapes.png",
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
      name: "raspberry",
      img: "images/png/raspberry.png",
    },
    {
      name: "pineapple",
      img: "images/png/pineapple.png",
    },
    {
      name: "strawberry",
      img: "images/png/strawberry.png",
    },
    {
      name: "lemon",
      img: "images/png/lemon.png",
    },
  ];

  cardDeck.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
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
  }

  function evaluateCards() {
    var cardImages = document.querySelectorAll("img");
    const cardOneId = cardsChosenId[0];
    const cardTwoId = cardsChosenId[1];
    if (isMatch(cardOneId, cardTwoId)) {
      removeCard(cardImages[cardOneId]);
      removeCard(cardImages[cardTwoId]);
      cardsWonId.push(cardsChosenId);
    } else {
      hideCard(cardImages[cardOneId]);
      hideCard(cardImages[cardTwoId]);
    }
    cardsChosenId = [];
    resultDisplay.textContent = cardsWonId.length;
    if (cardsWonId.length == cardDeck.length / 2) {
      resultDisplay.textContent = "Congratulations! You matched them all!";
    }
  }

  function hideCard(card) {
    card.setAttribute("src", "images/png/card_back.png");
  }

  function isMatch(cardOneId, cardTwoId) {
    return cardOneId != cardTwoId && cardDeck[cardOneId].img == cardDeck[cardTwoId].img;
  }

  function removeCard(card) {
    card.setAttribute("src", "images/png/blank.png");
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
