import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import mealsImage from "../../access/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
