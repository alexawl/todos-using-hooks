import { genId } from "../util";

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "remove-todo":
      const filtered = state.filter(todo => todo.id !== action.id);

      return [...filtered];
    case "add-todo":
      const newTodo = {
        id: genId(state),
        content: action.content,
        done: false
      };

      return [...state, newTodo];
    case "toggle-todo":
      const newTodos = state.map(todo => {
        if (todo.id === action.id) {
          todo.done = !todo.done;
        }

        return todo;
      });

      return [...newTodos];
    case "edit-todo":
      const editedTodos = state.map(todo => {
        if (todo.id === action.id) {
          todo.content = action.content;
        }

        return todo;
      });

      return [...editedTodos];
    default:
      throw new Error();
  }
};
