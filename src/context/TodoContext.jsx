import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import todoReducer from "../reducer/todo-reducer";

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    {id: 0, text: "HTML&CSS 공부하기", done: false },
    {id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}