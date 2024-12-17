import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onEdit, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
