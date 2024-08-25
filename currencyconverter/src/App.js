import { useEffect, useState } from "react";
import "./styles.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
// http://www.omdbapi.com/?apikey=${KEY}&s=${query}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({});
  const [currency, SetCurrency] = useState("USD");
  const [currency1, SetCurrency1] = useState("EUR");

  useEffect(
    function () {
      async function getConversion() {
        try {
          const res = await fetch(
            ` https://api.frankfurter.app/latest?amount=${query}&from=EUR&to=USD
          
              `
          );
          const data = await res.json();

          const extractedResult = data.rates.USD;

          setResult(extractedResult);
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
    },
    [query, currency, currency1]
  );

  // useEffect(
  //   function () {
  //     const controller = new AbortController();
  //     async function fetchConversion() {
  //       try {
  //         setIsLoading(true);
  //         setError("");
  //         const res = await fetch(
  //           ` https://api.frankfurter.app/latest?amount=${query}&from=${currency}&to=${currency1}
  //       `,
  //           { signal: controller.signal }
  //         );

  //         if (!res.ok)
  //           throw new Error("Something went wrong while fetching movies");
  //         const data = await res.json();

  //         if (data.Response === "False") throw new Error("Movie not Found");

  //         setResult(Number(data.Search));
  //       } catch (err) {
  //         if (err.name !== "AbortError") {
  //           console.error(err.message);
  //           setError(err.message);
  //         }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }

  //     fetchConversion();

  //     return function () {
  //       controller.abort();
  //     };
  //   },
  //   [query, currency, currency1]
  // );

  function handleSetCurrency(e) {
    SetCurrency(e.target.value);
    console.log(currency);
  }

  function handleSetCurrency1(e) {
    SetCurrency1(e.target.value);
    console.log(currency);
  }

  function handleSetQuery(e) {
    setQuery(e.target.value);
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
      <p>
        {JSON.stringify(result, null, 2)}

        {/* Output */}
      </p>
    </div>
  );
}

// function Loader() {
//   return <p className="loader">Loading...</p>;
// }

// function ErrorMessage({ message }) {
//   return <p className="error">{message}</p>;
// }
