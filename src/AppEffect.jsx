import { useEffect } from "react";

export default function AppEffect(props) {

  useEffect(() => {
    const $h2 = document.querySelector('#title');
    $h2.textContent = 'Data Fetching';
  }, []);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2> 
    </>
  );
};
