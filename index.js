// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('[data-js="bookmark"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

showAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("hidden");
  if (!cardAnswer.classList.contains("hidden")) {
    showAnswer.textContent = "Hide answer";
  } else {
    showAnswer.textContent = "Show answer";
  }
});

/*
showAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("hidden");
  toggleInvis();
});

function toggleInvis() {
  const text = showAnswer.textContent;
  console.log(text.length);
  console.log(typeof text);
  if (text === "Show answer") {
    showAnswer.textContent = "Hide answer";
  } else {
    showAnswer.textContent = "Show answer";
  }
}
*/
