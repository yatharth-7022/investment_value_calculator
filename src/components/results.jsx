import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
export const Results = ({ inputValue }) => {
  const values = calculateInvestmentResults(inputValue);
  console.log(values);
  const initialInvestment =
    values[0].valueEndOfYear - values[0].interest - values[0].annualInvestment;

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
          const totalInterest =
            value.valueEndOfYear - value.annualInvestment * value.year;
          const totalAmountInvested = value.valueEndOfYear - totalInterest;
          return (
            <tr>
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
