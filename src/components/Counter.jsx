import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>✅ Counter Example (Increment / Decrement / Reset) </h4>
     <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}    className="btn-primary">+</button>
      <button onClick={()=>setCount(count-1)}  className="btn-primary" style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={()=>setCount(0)}   className="btn-primary">Reset</button>
    </div>
  );
}

export default Counter;
