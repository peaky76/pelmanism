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

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/card_back.jpg");
      card.setAttribute("data-id", i);
      // card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  createBoard();
});
