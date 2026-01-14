import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>useRef Example – Focus Input</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Yahan click bina focus ke"
      />

      <br />
      <br />

      <button onClick={focusInput}>Input pe Focus Lao</button>
    </div>
  );
}

export default App;
