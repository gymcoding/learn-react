function TodoList({ onToggleTodo, onDeleteTodo, todos = []}) {
  return (
    <ul>
      {todos.map(item => 
        <li key={item.id}>
          <input type="checkbox" checked={item.done} onChange={(e) => onToggleTodo(item.id, e.target.checked)} />
          <span>{ item.done ? (<del>{item.text}</del>) : (item.text)}</span>
          <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li>
      )}
    </ul>
  )
}

export default TodoList;