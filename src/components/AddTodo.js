import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ onNewTodo }) => {
  const [newTodo, setTodoValue] = useState("");
  const [placeholder, setPlaceholder] = useState("What to do?");

  const addTodo = e => {
    e.preventDefault();
    if (newTodo.length) {
      onNewTodo(newTodo);
      setTodoValue("");
      setPlaceholder("What to do?");
    } else {
      setPlaceholder("Add some text!");
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={e => addTodo(e)}>
        <input
          type="text"
          value={newTodo}
          onChange={({ target }) => setTodoValue(target.value)}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};

export default AddTodo;
