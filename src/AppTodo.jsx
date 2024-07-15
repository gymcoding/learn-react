import './App.css'

import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';

import todoReducer from './reducer/todo-reducer';
import { useImmerReducer } from 'use-immer';

function AppTodo(props) {
  
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  // 1] added
  const handleAddTodo = (text) => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText: text
    })
  }

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: 'deleted', deleteId })
  }

  // 4] 'done'
  const handleToggleTodo = (id, done) => {
    dispatch({ type: 'done', id, done })
  }
  
  return (
    <div>
      <h2>할일목록</h2>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;