import React from "react";
import logo from "../../public/investment-calculator-logo.png";
export const Header = () => {
  return (
    <header id="header">
      <h1>Investment Calculator</h1>

      <img src={logo} alt="investment img" />
    </header>
  );
};
