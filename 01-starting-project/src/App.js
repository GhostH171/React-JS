import Header from "./components/Layout/Header";
// Import component 'Header'
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      {/* Use properties setup in header component */}
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
