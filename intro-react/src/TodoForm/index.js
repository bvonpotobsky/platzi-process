import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <label className="Form__label">Add new Task</label>
      <textarea
        className="Form__textarea"
        placeholder="Describe tu actividad"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="Form__buttons">
        <button
          className="Form__buttons--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="Form__buttons--submit" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
