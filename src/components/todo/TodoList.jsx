function TodoList({ todos = []}) {
  return (
    <ul>
      {todos.map(item =>  <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

export default TodoList;