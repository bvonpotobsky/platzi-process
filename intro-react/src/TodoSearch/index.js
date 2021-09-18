import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
      placeholder="Busca tus actividades"
    />
  );
}

export { TodoSearch };
