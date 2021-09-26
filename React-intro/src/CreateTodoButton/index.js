function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="TodoButton" onClick={onClickButton}>
      {openModal ? "x" : "+"}
    </button>
  );
}

export { CreateTodoButton };
