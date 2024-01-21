import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  // <h1 style={style}>Fast React CO.</h1>
  return (
    <header className="header">
      <h1>Fast React CO.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      {numPizzas > 0 ? (
        <>
          <h2>Our Menu</h2>
          <p>
            Authentic Italian Cusine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza
              //   name={pizza.name}
              //   ingredients={pizza.ingredients}
              //   photoName={pizza.photoName}
              //   price={pizza.price}
              // />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu come back later :)</p>
      )}
      {/* <Pizza
      name="Pizza Spinaci"
      ingridients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName="pizzas/spinaci.jpg"
      price={10}
      />
      <Pizza
      name="Pizza funghi"
      ingridients="Tomato and mushroom"
      photoName="pizzas/funghi.jpg"
      price={13}
    /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We are open");
  // else alert("we are closed");
  // if (isOpen) alert("We are open");
  // else alert("we are closed");
  // isOpen ? alert("We are open") : alert("we are closed");
  return (
    <>
      <footer className="footer">
        {/* {new Date().toLocaleTimeString()}. We are currently open */}
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We are happy to have you between {openHour}:00 and {closeHour}:00{" "}
          </p>
        )}
      </footer>
    </>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are Open from {openHour}:00 untill {closeHour}:00 come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
