import { useState } from "react";

function Counter3() {
  const STEP = 5;
  const [step, setStep] = useState(0);

  const decrement = () => {
    setStep((prev) => prev - STEP);
  };

  const increment = () => {
    setStep((prev) => prev + STEP);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>✅ Counter with Step Value </h4>
      <h3> {step}</h3>

      <button onClick={decrement} className="btn-primary">
        -{STEP}
      </button>
      <button onClick={increment} className="btn-primary">
        +{STEP}
      </button>
    </div>
  );
}

export default Counter3;
