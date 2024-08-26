import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(1);
  const [result, setResult] = useState();
  const [currency, SetCurrency] = useState("USD");
  const [currency1, SetCurrency1] = useState("EUR");

  useEffect(
    function () {
      const controller = new AbortController();
      async function getConversion() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${query}&from=${currency}&to=${currency1}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error(
              "Something went wrong while fetching conversion rates"
            );

          const data = await res.json();

          const obj = data.rates;
          if (!obj) throw new Error("Conversion rates not found");

          const valuesArray = Object.values(obj);
          const extractedResult = valuesArray[0];

          setResult(extractedResult);
          console.log(extractedResult);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      getConversion();

      return function () {
        controller.abort();
      };
    },
    [query, currency, currency1]
  );

  function handleSetQuery(e) {
    setQuery(e.target.value);
  }

  function handleSetCurrency(e) {
    SetCurrency(e.target.value);
  }

  function handleSetCurrency1(e) {
    SetCurrency1(e.target.value);
  }
  return (
    <div>
      <input type="text" value={query} onChange={handleSetQuery} />
      <select value={currency} onChange={handleSetCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency1} onChange={handleSetCurrency1}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {result && !isLoading && !error && (
        <p>
          Conversion Result of {query} {currency} to {currency1} is:{" "}
          {JSON.stringify(result, null, 2)}
        </p>
      )}
    </div>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
