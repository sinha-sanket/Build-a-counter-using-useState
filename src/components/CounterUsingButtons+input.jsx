import { useState } from "react";

function Counter4() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>✅ Counter with Buttons + Input</h4>

      <h3>{count}</h3>

      <button onClick={handleDecrement} className="btn-primary">
        -
      </button>

      <input
        type="number"
        value={count}
        onChange={handleChange}
        style={{
          textAlign: "center",
          margin: "0 10px",
          border: "1px solid #ccc",
        }}
      />

      <button onClick={handleIncrement} className="btn-primary">
        +
      </button>
    </div>
  );
}

export default Counter4;
