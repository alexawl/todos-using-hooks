import React, { useReducer, useEffect } from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { todosReducer } from "../reducers/todos.reducer";
import { saveTodos, loadTodos } from "../util";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, loadTodos());

  useEffect(() => saveTodos(todos));

  return (
    <div className="todos-container">
      <AddTodo onNewTodo={content => dispatch({ type: "add-todo", content })} />

      <div className="todo-list">
        {todos.length ? (
          todos.map(todo => (
            <Todo
              done={todo.done}
              content={todo.content}
              id={todo.id}
              key={todo.id}
              onToggle={() => dispatch({ type: "toggle-todo", id: todo.id })}
              onRemove={() => dispatch({ type: "remove-todo", id: todo.id })}
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
