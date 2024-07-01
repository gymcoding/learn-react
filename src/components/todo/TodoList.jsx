function TodoList({ onDoneTodo, onDeleteTodo, todos = []}) {
  return (
    <ul>
      {todos.map(item => 
        <li key={item.id}>
          <input type="checkbox" value={item.done} onChange={(e) => onDoneTodo(item.id, e.target.checked)} />
          <span>{ item.done ? (<del>{item.text}</del>) : (item.text)}</span>
          <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li>
      )}
    </ul>
  )
}

export default TodoList;