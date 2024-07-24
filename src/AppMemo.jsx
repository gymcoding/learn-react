import { useState, memo, useMemo, useCallback } from "react";
// 메모이제이션이 적용되지 않은 컴포넌트
const RegularComponent = ({ count, items = [], onCount }) => {
  console.log('RegularComponent 렌더링');
  return (
    <fieldset>
      <legend>일반 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map(item => (<li key={item.id}>{item.text}</li>))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
};

// 메모이제이션이 적용된 컴포넌트
const MemoizedComponent = memo(({ count, items = [], onCount }) => {
  console.log('MemoizedComponent 렌더링');
  return (
    <fieldset>
      <legend>메모이제이션 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map(item => (<li key={item.id}>{item.text}</li>))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
});

export default function AppMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const [courses, setCourses] = useState([
    {id: 0, text: "HTML&CSS", level: 0 },
    {id: 1, text: "자바스크립트", level: 0 },
    {id: 2, text: "리액트", level: 0 },
    {id: 3, text: "리액트 중급", level: 1 },
  ]);

  const beginnerCourses = useMemo(() => {
    return courses.filter((course) => course.level === 0);
  }, [courses])

  const handleCount = useCallback(() => setCount(count + 1), [count]);
  
  return (
    <div>
      <h2>컴포넌트 메모이제이션</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setOtherState(otherState + 1)}>기타 상태 변경</button>
      <hr />
      <RegularComponent count={count} items={beginnerCourses} onCount={handleCount} />
      <MemoizedComponent count={count} items={beginnerCourses} onCount={handleCount} />
    </div>
  )
}