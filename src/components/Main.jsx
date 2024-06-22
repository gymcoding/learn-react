import { useState } from "react";
import Counter from "./Counter";

export default function Main() {

  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total: {total}</h2>
      <Counter onTotal={handleTotal} />
      <br />
      <br />
      <Counter onTotal={handleTotal} />
    </main>
  )
}
