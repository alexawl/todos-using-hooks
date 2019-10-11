import React from "react";
import PropTypes from "prop-types";

const ItemToggle = ({done, toggleTodo}) => {
  const icon = done ? "fa-check-square" : "fa-square";

  return <i className={`far ${icon}`} onClick={toggleTodo}/>
};

const ItemContent = ({content, done, onChange}) => {
  const className = done ? "done" : "";

  return <input
    className={className}
    value={content}
    onChange={({target}) => onChange(target.value)}
  />
};

const ItemRemove = ({onRemove}) => {
  return <i className="fas fa-trash-alt remove" onClick={onRemove} title="remove"/>
};

const Todo = ({done, content, onToggle, onRemove, onEdit}) => {
  return (
    <div className="todo">
      <ItemToggle done={done} toggleTodo={onToggle}/>

      <ItemContent
        content={content}
        done={done}
        toggleTodo={onToggle}
        onChange={onEdit}
      />

      <ItemRemove onRemove={onRemove}/>
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
