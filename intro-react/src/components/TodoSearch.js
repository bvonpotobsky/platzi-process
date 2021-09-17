function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
      placeholder="Ingresa algo para hacer"
    />
  );
}

export { TodoSearch };
