import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
export const Results = ({ inputValue }) => {
  const values = calculateInvestmentResults(inputValue);
  console.log(values);

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {values.map((value, key) => {
          return (
            <tr>
              <td>{value.year}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
