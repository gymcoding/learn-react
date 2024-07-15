import './App.css'

import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';

import todoReducer from './reducer/todo-reducer';
import { useImmerReducer } from 'use-immer';
import { TodoContext, TodoDispatchContext } from './context/TodoContext';

function AppTodo() {
  
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <h2>할일목록</h2>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default AppTodo;