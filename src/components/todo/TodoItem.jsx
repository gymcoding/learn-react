export default function TodoItem({ item, onToggleTodo, onDeleteTodo }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onToggleTodo(item.id, e.target.checked)}
      />
      <span>{ item.done ? (<del>{item.text}</del>) : (item.text)}</span>
      <button onClick={() => onDeleteTodo(item.id)}>X</button>
    </label>
  )
}