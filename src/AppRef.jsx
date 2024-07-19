import { useRef, useState } from "react"

// let counter = 0;

function ButtonCounter() {
  const countRef = useRef(0);
  
  const [count, setCount] = useState(0);

  console.log('✅ 리렌더링!')

  const handleClick = () => {
    countRef.current++;
    console.log('countRef: ', countRef.current);
    // counter++;
    // console.log('counter: ', counter);
    setCount(count + 1);
  }
  return  (
    <button onClick={handleClick}>Count</button>
  )
}

export default function AppRef() {

  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
    </>
  )
}