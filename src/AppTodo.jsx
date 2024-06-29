import { useState } from 'react';
import './App.css'
import TodoList from './components/todo/TodoList';
function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: "HTML&CSS 공부하기" },
    {id: 1, text: "자바스크립트 공부하기" },
  ]);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }
  const handleAddTodo = (e) => {
    const nextId = todos.length;
    setTodos([
      ...todos,
      { id: nextId, text: todoText }
    ]);
    setTodoText(''); // null, undefined [X]
  }
  return (
    <div>
      <h2>할일목록</h2>
      <input type="text" value={todoText} onChange={handleTodoTextChange} /> <button onClick={handleAddTodo}>추가</button>
      <div>Preview: {todoText}</div>
      <TodoList todos={todos} />
    </div>
  );
}

export default AppTodo;