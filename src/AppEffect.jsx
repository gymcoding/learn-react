import { useEffect, useState } from "react";

export default function AppEffect(props) {

  // 1] DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector('#title');
  //   $h2.textContent = 'Data Fetching';
  // }, []);

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data/courses_all.json')
    .then((res) => res.json())
    .then(data => {
      console.log('✅ 데이터 조회 성공 ')
      setList(data);
    })
  }, []);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};