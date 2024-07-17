import { useEffect, useState } from "react";

export default function AppEffect(props) {

  // 1] DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector('#title');
  //   $h2.textContent = 'Data Fetching';
  // }, []);

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
    .then((res) => res.json())
    .then(data => {
      console.log('✅ 데이터 조회 성공 ')
      setList(data);
    })
  }, [filter]);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};