import { useState } from "react";

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false); // editing mode
  const [editedText, setEditedText] = useState(todo.title); // State for edit input

  const handleSave = () => {
    onEdit(todo.id, editedText); // Save updated task title
    setIsEditing(false); // Exit editing mode
  };

  return (
    <li>
      {/* Checkbox to toggle task completion */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {/* Editing mode: Show input box, else show text */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      )}

      {/* Conditional Buttons */}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() => onDelete(todo.id)}
            disabled={!todo.completed} // Delete only if task is complete
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
