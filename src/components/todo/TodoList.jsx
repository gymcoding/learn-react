import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../context/TodoContext";
export default function TodoList() {
  const todos = useContext(TodoContext);
  return (
    <ul>
      {todos.map(item => 
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      )}
    </ul>
  )
};