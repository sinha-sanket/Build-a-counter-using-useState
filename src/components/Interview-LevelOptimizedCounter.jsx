import { useState } from "react";

function Counter5() {
  const MIN = 0;
  const MAX = 10;
  const STEP = 1;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => Math.min(MAX, prev + STEP));
  };

  const decrement = () => {
    setCount((prev) => Math.max(MIN, prev - STEP));
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setCount(Math.min(MAX, Math.max(MIN, value)));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h4>✅ ALL IN ONE </h4>
      <h3> {count}</h3>

      <button
        onClick={decrement}
        disabled={count === MIN}
        className="btn-primary"
      >
        -
      </button>

      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="border m-3 p-2"
      />

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

export default Counter5;
