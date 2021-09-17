import { useState } from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <>
      <input
        className="TodoSearch"
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder="Ingresa algo para hacer"
      />
      <p>{searchValue}</p>
    </>,
  ];
}

export { TodoSearch };
