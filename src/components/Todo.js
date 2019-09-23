import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = todo => {
  const [{ done, content }, setTodo] = useState(todo);

  const toggleTodo = () => {
    setTodo(prev => {
      const newTodo = { content: prev.content, done: !prev.done, id: prev.id };
      return newTodo;
    });
    todo.onToggle();
  };

  return (
    <div className="todo">
      <p className={done ? "done" : ""} onClick={toggleTodo}>
        {done ?
          <i className="far fa-check-square" />
          :
          <i className="far fa-square" />
        }
        <span>{content}</span>
      </p>

      <button onClick={() => todo.onRemove()} title="remove" className="remove">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Todo;
