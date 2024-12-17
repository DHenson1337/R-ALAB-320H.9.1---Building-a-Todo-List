import { useReducer } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

// Initial state: Empty list of todos
const initialState = [];

// Reducer function to manage state changes
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        { id: Date.now(), title: action.payload, completed: false },
        ...state,
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

function TodoPage() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Create Todo List</h1>
      {/* Input Form to add new todos */}
      <TodoInput
        onAdd={(title) => dispatch({ type: "ADD_TODO", payload: title })}
      />

      {/* Display Todo List */}
      <TodoList
        todos={todos}
        onDelete={(id) => dispatch({ type: "DELETE_TODO", payload: id })}
        onEdit={(id, title) =>
          dispatch({ type: "EDIT_TODO", payload: { id, title } })
        }
        onToggle={(id) => dispatch({ type: "TOGGLE_TODO", payload: id })}
      />
    </div>
  );
}

export default TodoPage;
