import React from 'react';

function TodoList({ todos = [] }) {
  const items = todos;
  items.push({ id: 2, label: '포트폴리오 사이트 만들기' });
  return (
    <ul>
      {items.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;