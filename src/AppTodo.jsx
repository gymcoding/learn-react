import './App.css'

import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';

import { TodoProvider } from './context/TodoContext';

function AppTodo() {
  
  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default AppTodo;