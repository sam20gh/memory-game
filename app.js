document.addEventListener("DOMContentloaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.jpg",
    },
    {
      name: "burger",
      img: "images/burger.jpg",
    },
    {
      name: "hotdog",
      img: "images/hotdog.jpg",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.jpg",
    },
    {
      name: "milkshake",
      img: "images/milkshake.jpg",
    },
    {
      name: "pizza",
      img: "images/pizza.jpg",
    },
    {
      name: "white",
      img: "images/white.jpg",
    },
  ];

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      // card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  createBoard();
});
