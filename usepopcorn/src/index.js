import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//         maxRating={5}
//         onSetRating={setMovieRating}
//       />
//       <p>The Movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      className="test"
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={10} size={25} color="blue" defaultRating={2} />
    <StarRating maxRating={4} size={25} color="purple" />

    <Test /> */}
  </React.StrictMode>
);
