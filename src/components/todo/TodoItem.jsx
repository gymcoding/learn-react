import { memo } from "react";
import { useTodosDispatch } from "../../context/TodoContext"
// import { useEffect } from 'react';

export default memo(function TodoItem({ item }) {
  console.log('✅ TodoItem 렌더링!')
  // useEffect(() => {
  //   console.log('컴포넌트가 마운트 되었습니다.');

  //   return () => {
  //     console.log('컴포넌트가 언마운트 될 예정입니다.');
  //   }
  // }, []);

  const dispatch = useTodosDispatch();

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: 'deleted', deleteId })
  }

  // 4] 'done'
  const handleToggleTodo = (id, done) => {
    dispatch({ type: 'done', id, done })
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => handleToggleTodo(item.id, e.target.checked)}
      />
      <span>{ item.done ? (<del>{item.text}</del>) : (item.text)}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </label>
  )
})