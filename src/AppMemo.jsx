import { useState, memo } from "react";
// 메모이제이션이 적용되지 않은 컴포넌트
const RegularComponent = ({ count }) => {
  console.log('RegularComponent 렌더링');
  return (
    <fieldset>
      <legend>일반 컴포넌트</legend>
      <div>{count}</div>
    </fieldset>
  );
};

// 메모이제이션이 적용된 컴포넌트
const MemoizedComponent = memo(({ count }) => {
  console.log('MemoizedComponent 렌더링');
  return (
    <fieldset>
      <legend>메모이제이션 컴포넌트</legend>
      <div>{count}</div>
    </fieldset>
  );
});

export default function AppMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  return (
    <div>
      <h2>컴포넌트 메모이제이션</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setOtherState(otherState + 1)}>기타 상태 변경</button>
      <hr />
      <RegularComponent count={count} />
      <MemoizedComponent count={count} />
    </div>
  )
}