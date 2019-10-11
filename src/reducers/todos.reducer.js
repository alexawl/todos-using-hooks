import {genId} from "../util";

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "edit-todo":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            content: action.newContent
          }
        }

        return todo;
      });
    case "remove-todo":
      return state.filter(todo => todo.id !== action.id);
    case "add-todo":
      const newTodo = {
        id: genId(state),
        content: action.content,
        done: false
      };

      return [...state, newTodo];
    case "toggle-todo":
      return state.map(todo => {
        if (todo.id === action.id) {
          // You need to create a new object spreading the old element if you wanna avoid mutations
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });
    default:
      return state;
    // Throwing an error will make the app crashing, so is not a good practice
    // throw new Error();
  }
};
