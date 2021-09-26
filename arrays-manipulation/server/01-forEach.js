// const letters = ["a", "b", "c"];

// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   console.log(element);
// }

// letters.forEach((item) => console.log(item));

const app = document.getElementById("app");

const tasks = [
  { task: "Buy food", done: false },
  { task: "Read book", done: true },
  { task: "Play basketball", done: false },
  { task: "Study", done: true },
  { task: "Buy beers", done: true },
];

tasks.forEach((task) => {
  const list = document.createElement("ul");

  const html = `
  <div class="itemBox">
    <li>${task.task}</li>
    <input type="checkbox" ${task.done ? "checked" : ""}/>
  </div>
  `;

  list.innerHTML += html;
  app.insertAdjacentHTML("beforeend", html);
});
