import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList=container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading &&
        !props.error &&
        props.searchedTodos.map(props.children || props.render)}

      <ul>{}</ul>
    </section>
  );
}

export { TodoList };
