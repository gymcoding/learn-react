import { useState } from 'react';
import './App.css'
import TodoList from './components/todo/TodoList';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }
  // 1] added
  const handleAddTodo = (e) => {
    const nextId = todos.length;
    setTodos([
      ...todos,
      { id: nextId, text: todoText, done: false }
    ]);
    setTodoText(''); // null, undefined [X]
  }

  // 2] added_index
  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      // 삽입 지점 이전 항목
      ...todos.slice(0, insertAt),
      // 새 항목
      { id: nextId, text: todoText, done: false },
      // 삽입 지점 이후 항목
      ...todos.slice(insertAt)
    ];
    setTodos(newTodos);
    setName('');
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter(item => item.id !== deleteId)
    setTodos(newTodos);
  }

  // 4] 'done'
  const handleToggleTodo = (id, done) => {
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done };
      }
      return item;
    })
    setTodos(nextTodos);
  }

  // 5] 'reverse'
  const handleReverse = () => {
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);
    setTodos(todos.toReversed())
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
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;