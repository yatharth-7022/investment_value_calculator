import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { useState } from "react";

export const UserInput = ({ inputValue, onChange }) => {
  console.log(inputValue);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={inputValue.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Anuual investment</label>
          <input
            type="number"
            required
            value={inputValue.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Expected duration </label>
          <input
            type="number"
            required
            value={inputValue.expectedDuration}
            onChange={(e) => onChange("expectedDuration", e.target.value)}
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={inputValue.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
