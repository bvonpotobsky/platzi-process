function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        ✅
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <button className="Icon Icon-delete">🗑️</button>
    </li>
  );
}

export { TodoItem };
