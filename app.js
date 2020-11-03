document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/card_back.jpg");
      card.setAttribute("data-id", i);
      // card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/card_back.png");
      cards[optionTwoId].setAttribute("src", "images/card_back.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You matched them all!";
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
