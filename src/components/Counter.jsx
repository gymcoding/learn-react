import { useState } from "react"

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log('[렌더링] Counter: ', counter);

  const handleCounter = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    console.log('[함수호출] Counter: ', counter);

    if (onTotal) {
      onTotal();
    }
  }
  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}