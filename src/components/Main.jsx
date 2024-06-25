import { useState } from "react";
import Counter from "./Counter";

export default function Main() {

  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total: {total}</h2>
      <h2>flag: {flag.toString()}</h2>
      <button onClick={() => setFlag(!flag)}>toggle flag</button>
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  )
}
