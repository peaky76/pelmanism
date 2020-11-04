document.addEventListener("DOMContentLoaded", () => {
  //card options
  const fruitCards = [
    {
      name: "apple",
      img: "images/fruit/png/apple.png",
    },
    {
      name: "apple",
      img: "images/fruit/png/apple.png",
    },
    {
      name: "orange",
      img: "images/fruit/png/orange.png",
    },
    {
      name: "orange",
      img: "images/fruit/png/orange.png",
    },
    {
      name: "lemon",
      img: "images/fruit/png/lemon.png",
    },
    {
      name: "lemon",
      img: "images/fruit/png/lemon.png",
    },
    {
      name: "strawberry",
      img: "images/fruit/png/strawberry.png",
    },
    {
      name: "strawberry",
      img: "images/fruit/png/strawberry.png",
    },
    {
      name: "banana",
      img: "images/fruit/png/banana.png",
    },
    {
      name: "banana",
      img: "images/fruit/png/banana.png",
    },
    {
      name: "cherries",
      img: "images/fruit/png/cherries.png",
    },
    {
      name: "cherries",
      img: "images/fruit/png/cherries.png",
    },
    {
      name: "grapes",
      img: "images/fruit/png/grapes.png",
    },
    {
      name: "grapes",
      img: "images/fruit/png/grapes.png",
    },
    {
      name: "raspberry",
      img: "images/fruit/png/raspberry.png",
    },
    {
      name: "raspberry",
      img: "images/fruit/png/raspberry.png",
    },
    {
      name: "pear",
      img: "images/fruit/png/pear.png",
    },
    {
      name: "pear",
      img: "images/fruit/png/pear.png",
    },
    {
      name: "pineapple",
      img: "images/fruit/png/pineapple.png",
    },
    {
      name: "pineapple",
      img: "images/fruit/png/pineapple.png",
    },
    {
      name: "blueberries",
      img: "images/fruit/png/blueberries.png",
    },
    {
      name: "blueberries",
      img: "images/fruit/png/blueberries.png",
    },
    {
      name: "watermelon",
      img: "images/fruit/png/watermelon.png",
    },
    {
      name: "watermelon",
      img: "images/fruit/png/watermelon.png",
    },
  ];

  const animalCards = [
    {
      name: "cat",
      img: "images/animals/png/cat.png",
    },
    {
      name: "cat",
      img: "images/animals/png/cat.png",
    },
    {
      name: "dog",
      img: "images/animals/png/dog.png",
    },
    {
      name: "dog",
      img: "images/animals/png/dog.png",
    },
    {
      name: "rabbit",
      img: "images/animals/png/rabbit.png",
    },
    {
      name: "rabbit",
      img: "images/animals/png/rabbit.png",
    },
    {
      name: "fish",
      img: "images/animals/png/fish.png",
    },
    {
      name: "fish",
      img: "images/animals/png/fish.png",
    },
    {
      name: "pig",
      img: "images/animals/png/pig.png",
    },
    {
      name: "pig",
      img: "images/animals/png/pig.png",
    },
    {
      name: "sheep",
      img: "images/animals/png/sheep.png",
    },
    {
      name: "sheep",
      img: "images/animals/png/sheep.png",
    },
    {
      name: "turtle",
      img: "images/animals/png/turtle.png",
    },
    {
      name: "turtle",
      img: "images/animals/png/turtle.png",
    },
    {
      name: "hen",
      img: "images/animals/png/hen.png",
    },
    {
      name: "hen",
      img: "images/animals/png/hen.png",
    },
    {
      name: "duck",
      img: "images/animals/png/duck.png",
    },
    {
      name: "duck",
      img: "images/animals/png/duck.png",
    },
    {
      name: "squirrel",
      img: "images/animals/png/squirrel.png",
    },
    {
      name: "squirrel",
      img: "images/animals/png/squirrel.png",
    },
    {
      name: "bee",
      img: "images/animals/png/bee.png",
    },
    {
      name: "bee",
      img: "images/animals/png/bee.png",
    },
    {
      name: "chameleon",
      img: "images/animals/png/chameleon.png",
    },
    {
      name: "chameleon",
      img: "images/animals/png/watermelon.png",
    },
  ];

  // Create deck
  // Small = 16, Medium = 20, Large = 24
  deckSize = 24;
  cardDeck = animalCards.slice(0, deckSize);
  cardDeck.sort(() => 0.5 - Math.random());

  // Create play area
  const grid = document.querySelector(".grid");
  calculatedGridWidth = ((deckSize / 4) * 128 + (deckSize / 4 - 1) * 20).toString() + "px";
  grid.style.width = calculatedGridWidth;
  grid.style.height = "572px";

  const resultDisplay = document.querySelector("#result");

  var cardImages = [];
  var guesses = 0;
  var cardsChosenId = [];
  var cardsWonId = [];

  function createBoard() {
    for (let i = 0; i < cardDeck.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/card_back.png");
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
    cardImages[cardId].setAttribute("src", "images/card_back.png");
  }

  function isMatch(cardOneId, cardTwoId) {
    return cardOneId != cardTwoId && cardDeck[cardOneId].img == cardDeck[cardTwoId].img;
  }

  function removeCard(cardId) {
    cardsWonId.push(cardId);
    cardImages[cardId].setAttribute("src", "images/blank.png");
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
