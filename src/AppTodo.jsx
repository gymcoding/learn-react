import { useState } from 'react';
import './App.css'
import TodoList from './components/todo/TodoList';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }
  const handleAddTodo = (e) => {
    const nextId = todos.length;
    setTodos([
      ...todos,
      { id: nextId, text: todoText, done: false }
    ]);
    setTodoText(''); // null, undefined [X]
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }
  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter(item => item.id !== deleteId)
    setTodos(newTodos);
  }

  const handleToggleTodo = (id, done) => {
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done };
      }
      return item;
    })
    setTodos(nextTodos);
  }

  // const handleToggleCopyTodo = (id, done) => {
  //   const nextTodos = [...copyTodos];
  //   const targetItem = nextTodos.find(item => item.id === id);
  //   targetItem.done = done;
  //   setCopyTodos(nextTodos);
  // }
  
  return (
    <div>
      <h2>할일목록</h2>
      <input
        type="text"
        value={todoText}
        onChange={handleTodoTextChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo}>추가</button>
      <div>Preview: {todoText}</div>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;