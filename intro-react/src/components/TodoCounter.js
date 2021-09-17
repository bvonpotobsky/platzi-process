function TodoCounter({ total, completed }) {
  return (
    <>
      <h1 className="TodoCounter__title">What's up</h1>
      <h2 className="TodoCounter__counter">
        Has completado {completed} de {total} TODOs
      </h2>
    </>
  );
}
export { TodoCounter };
