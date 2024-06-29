function TodoList({ onDeleteTodo, todos = []}) {
  return (
    <ul>
      {todos.map(item => 
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li>
      )}
    </ul>
  )
}

export default TodoList;