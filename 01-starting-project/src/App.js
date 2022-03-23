import Header from "./components/Layout/Header";
// Import component 'Header'
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      {/* Use properties setup in header component */}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
