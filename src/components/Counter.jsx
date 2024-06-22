import { useState } from "react"

// 일반적으로 사용
export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
    onTotal();
  }
  // 상태, 로직
  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}

// UI만 담당 하는 컴포넌트
// export const Counter = () => (
//   <button>Counter</button>
// )

// export default Counter;

// 함수 표현식 vs 함수 선언식