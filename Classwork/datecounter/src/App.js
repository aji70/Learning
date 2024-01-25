import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  // const [today, setToday] = useState(new Date().toLocaleDateString());
  const [today, setToday] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      year: "numeric",
      day: "numeric",
    })
  );
  // const todayString = `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}`;

  // const todayString = `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', year: 'numeric' })}`;

  return (
    <>
      <div>
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          -
        </button>
        step: {step}
        <button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          +
        </button>
      </div>
      <h1>.</h1>
      <div>
        <button
          onClick={() => {
            setCount(count - step);
          }}
        >
          -
        </button>
        count: {count}
        <button
          onClick={() => {
            // setCount(count + 1);
            setCount(count + step);
            // setToday(today + count);
          }}
        >
          +
        </button>
      </div>
      <p>{today}</p>

      {/* <p>{today ? `Today is ${today}` : `{step} days from Today is {today}`}</p> */}
    </>
  );
}
