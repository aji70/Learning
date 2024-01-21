import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="container">
      <Header />
      <Card
        name="Name: Ajidokwu Sabo"
        about="ABOUT: I am a junior react and solidity developer looking on to working on multilpe projects. Currently in a 4months boothcamp in lagos"
        stack="STACK"
        stack1="React, solidity, and javaScript"
        stack2=""
        photoName="picture.jpg"
      />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome this is my Developer's card</h1>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div>
        <img className="picture" src={props.photoName} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <p>{props.stack}</p>
      <p>{props.stack1}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
