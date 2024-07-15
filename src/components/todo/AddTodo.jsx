import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            onAddTodo(e.target.value);
            setTodoText('');
          }
        }}
      />
      <button onClick={() => {
        setTodoText('');
        onAddTodo(todoText);
      }}>추가</button>
    </div>
  )
}