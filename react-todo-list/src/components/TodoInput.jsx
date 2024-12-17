import { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState(""); //  input field value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Avoid adding empty tasks
    onAdd(input); // Call parent function to add task
    setInput(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
