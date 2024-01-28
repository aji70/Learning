import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState(0);

  const date = new Date("Januaery 28 2024");
  date.setDate(date.getDate() + count);

  function handleChange(e) {
    setDescription(+e.target.value);
  }

  function handleReset() {
    setDescription(0);
    setCount(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={description}
          onChange={handleChange}
        />
        step: {description}
      </div>

      <div>
        <button
          onClick={() => {
            setCount((c) => c - description);
          }}
        >
          -
        </button>

        <input
          type="text"
          placeholder="count..."
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
            setCount((c) => c + description);
          }}
        />
        <button
          onClick={() => {
            // setCount(count + 1);
            setCount((c) => c + description);
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

      <button onClick={handleReset}>Reset</button>
    </>
  );
}
