import React, { useState } from "react";

function App() {
  //  first

  const [num, setNum] = useState(3);
  const [user, setUser] = useState("sanket");
  const [array, setarray] = useState([1, 2, 3]);
  function changeA() {
    setNum(22);
    setUser("Ravi");
    setarray([2, 3, 6]);
  }

  // second

  const [num2, setNum2] = useState(0);

  let increase = () => {
    // if (num2 > 10) {
    setNum2(num2 + 1);
    // }
  };

  let decrease = () => {
    // if (num2 > 0) {
    setNum2(num2 - 1);
    // }
  };

  let jump5 = () => {
    // if (num2 < 50) {
    setNum2(num2 + 5);
    // }
  };

  // third

  const [num3, setnum3] = useState({
    firstName: "SANKET",
    lastName: "SINHA",
    Age: 35,
  });

  const btnClicked = () => {
    const newNum = { ...num3 };
    newNum.firstName = "Ravi";
    newNum.lastName = " Gupta";
    newNum.Age = 30;
    setnum3(newNum);
  };

  return (
    <>
      <div className="container mx-auto border my-5 p-6">
        <h1>
          My number is <span style={{ color: "red" }}>{num}</span>
        </h1>
        <h2>
          My user is <span style={{ color: "red" }}>{user}</span>
        </h2>
        <h3>
          My array is <span style={{ color: "red" }}>{array}</span>
        </h3>
        <button className="btn btn-primary" onClick={changeA}>
          Click Here
        </button>
      </div>
      <div className="container mx-auto border my-5 p-6">
        <h1>{num2}</h1>

        <button className="btn btn-primary m-3" onClick={increase}>
          Increase
        </button>
        <button className="btn btn-primary m-3" onClick={decrease}>
          Decrease
        </button>
        <button className="btn btn-primary m-3" onClick={jump5}>
          Jump by 5
        </button>
      </div>

      <div className="container mx-auto border my-5 p-6">
        <h3>
          My first Name is{" "}
          <span style={{ color: "red" }}>{num3.firstName}</span>, last Name is
          <span style={{ color: "red" }}> {num3.lastName}</span> and Age is
          <span style={{ color: "red" }}> {num3.Age}</span>
        </h3>

        <button className="btn btn-primary m-3" onClick={btnClicked}>
          click here
        </button>
      </div>
    </>
  );
}

export default App;
