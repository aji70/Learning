import { useEffect, useState } from "react";
import "./styles.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
// http://www.omdbapi.com/?apikey=${KEY}&s=${query}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(0);
  const [result, setResult] = useState();
  const [currency, SetCurrency] = useState("USD");
  const [currency1, SetCurrency1] = useState("EUR");

  useEffect(
    function () {
      async function getConversion() {
        const res = await fetch(
          ` https://api.frankfurter.app/latest?amount=${query}&from=${currency}&to=${currency1}       
              `
        );

        //  https://api.frankfurter.app/latest?amount=&from=USD&to=EUR
        const data = await res.json();

        const obj = data.rates;
        if (!obj) return;
        const valuesArray = Object.values(obj);

        const extractedResult = valuesArray[0];

        setResult(extractedResult);
        console.log(extractedResult);
      }

      if (query === 0) return;
      else {
        getConversion();
      }
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

  console.log(currency);
  console.log(currency1);
  function handleSetQuery(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <input type="text" value={query} onChange={handleSetQuery} />
      <select value={currency} onChange={(e) => SetCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency1} onChange={(e) => SetCurrency1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{JSON.stringify(result, null, 2)}</p>
    </div>
  );
}

// function Loader() {
//   return <p className="loader">Loading...</p>;
// }

// function ErrorMessage({ message }) {
//   return <p className="error">{message}</p>;
// }
