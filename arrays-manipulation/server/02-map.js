const letters = ["a", "b", "c"];

const newArray = letters.map((letter) => `${letter}++`);

const tasks = [
  { desc: "Buy food", done: false },
  { desc: "Read book", done: true },
  { desc: "Play basketball", done: false },
  { desc: "Study", done: true },
  { desc: "Buy beers", done: true },
];

const app = document.getElementById("app");

const list = tasks.map((task) => {
  return `<li>${task.desc} - ${task.done}</li>`;
});

app.innerHTML = list.join("");
