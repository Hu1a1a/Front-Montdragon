const cards = document.querySelectorAll(".cardbody");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (event) => {
    console.log(cards[i]);
    cards[i].classList.add("cardSelect");
  });
}
