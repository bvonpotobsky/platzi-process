function TodoItem(props) {
  const onComplete = () => {
    alert(`Ya completaste el todo: ${props.text}`);
  };

  const onDelete = () => {
    alert(`Borraste el todo: ${props.text}`);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✅
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <button onClick={onDelete} className="Icon Icon-delete">
        🗑️
      </button>
    </li>
  );
}

export { TodoItem };
