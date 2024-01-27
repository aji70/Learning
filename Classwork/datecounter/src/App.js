import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  // const [today, setToday] = useState(new Date().toLocaleDateString());
  // const [today, setToday] = useState(
  //   new Date().toLocaleDateString("en-US", {
  //     weekday: "short",
  //     month: "short",
  //     year: "numeric",
  //     day: "numeric",
  //   })
  // );
  const date = new Date("Januaery 28 2024");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        step: {step}
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <h1>.</h1>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        count: {count}
        <button
          onClick={() => {
            // setCount(count + 1);
            setCount((c) => c + step);
            // setToday(today + count);
          }}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} days from now is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
