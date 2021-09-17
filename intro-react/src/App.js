import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import "./assets/styles/sass/App.scss";

const todos = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Cortar carne", completed: false },
  { id: 3, text: "Comprar libro", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
