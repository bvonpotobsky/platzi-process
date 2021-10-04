const modal = document.querySelector(".modal");
const closeButton = document.querySelector("#close");

const superheroButtons = document.querySelectorAll("#superhero");

superheroButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
