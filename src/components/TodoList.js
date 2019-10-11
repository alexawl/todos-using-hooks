import React, { useReducer, useEffect } from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { todosReducer } from "../reducers/todos.reducer";
import { saveTodos, loadTodos } from "../util";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, loadTodos());

  // Avoid the usage of useEffect without the dependencies list otherwise
  // it will run this function every time that will be re-rendered
  useEffect(
    () => saveTodos(todos),
    [todos]
  );

  return (
    <div className="todos-container">
      <AddTodo onNewTodo={content => dispatch({ type: "add-todo", content })} />

      <div className="todo-list">
        {todos.length ? (
          todos.map(({id, done, content}) => (
            <Todo
              done={done}
              content={content}
              key={id}
              id={id}
              onToggle={() => dispatch({ type: "toggle-todo", id })}
              onRemove={() => dispatch({ type: "remove-todo", id })}
              onEdit={newContent => dispatch({ type: "edit-todo", id, newContent })}
            />
          ))
        ) : (
          <p>Add some todos!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
