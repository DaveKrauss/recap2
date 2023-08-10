// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});
