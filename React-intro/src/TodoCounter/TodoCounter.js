import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <h1 className="TodoCounter__title">What's up</h1>
      <h2 className="TodoCounter__counter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </>
  );
}
export { TodoCounter };
