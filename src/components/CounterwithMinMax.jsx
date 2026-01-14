import { useState } from "react";

function Counter2() {
  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > MIN) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < MAX) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>✅ Counter with Min / Max </h4>
      <h3>{count}</h3>

      <button
        onClick={decrement}
        disabled={count === MIN}
        className="btn-primary"
      >
        −
      </button>

      <button
        onClick={increment}
        disabled={count === MAX}
        className="btn-primary"
      >
        +
      </button>
    </div>
  );
}

export default Counter2;
