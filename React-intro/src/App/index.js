import React from "react";
import { AppUi } from "./AppUI";
import { TodoProvider } from "../TodoContext";

import "../assets/styles/index.scss";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Cortar carne", completed: false },
//   { text: "Comprar pelota", completed: false },
//   { text: "Leer libro", completed: true },
//   { text: "Comprar curso", completed: true },
// ];

// import { useLocalStorage } from "../TodoContext/useLocalStorage";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
