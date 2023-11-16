import React from "react";
import "./counter.css";

const Counter = () => {
  let counter = 0;
  const [counterValue, setValue] = React.useState(counter);

  function changeCounter(e) {
    const { id } = e.target;

    if (id === "decrement") {
      setValue(counterValue - 1);
    } else {
      setValue(counterValue + 1);
    }
  }

  return (
    <div className="counterContainer">
      <div className="counter">{counterValue}</div>
      <div className="buttonContainer">
        <div className="button" id="decrement" onClick={changeCounter}>
          -
        </div>
        <div className="button" id="increment" onClick={changeCounter}>
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
