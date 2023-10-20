const cards = document.querySelectorAll(".cardbody");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    if (cards[i].classList.contains("cardSelect")) cards[i].classList.remove("cardSelect");
    else cards[i].classList.add("cardSelect");
  });
}

let done = true;
const Show = document.querySelector("button#Show");
Show.addEventListener("click", () =>
  setTimeout(() => {
    if (done) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("cardSelect");
        cards[i].classList.remove("cardHide");
      }
    } else done = true;
  }, 3000)
);

const Hide = document.querySelector("button#Hide");
Hide.addEventListener("click", () =>
  setTimeout(() => {
    if (done) {
      for (let i = 0; i < cards.length; i++) if (cards[i].classList.contains("cardSelect")) cards[i].classList.add("cardHide");
    } else done = true;
  }, 3000)
);

const Cancel = document.querySelector("button#Cancel");
Cancel.addEventListener("click", () => (done = false));

const SubjectButton = document.querySelectorAll("button.subject");
for (let i = 0; i < SubjectButton.length; i++)
  SubjectButton[i].addEventListener("click", (event) => document.getElementById(`card_${event.target.id}`).scrollIntoView());
