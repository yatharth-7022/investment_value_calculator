import { Header } from "./components/header";
import { UserInput } from "./components/user-input";
import { useState } from "react";
import { Results } from "./components/results";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputDuration = inputValue.duration > 0;
  function handleInputChange(inputIdentifier, newValue) {
    setInputValue((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput inputValue={inputValue} onChange={handleInputChange} />
      {inputDuration ? (
        <Results inputValue={inputValue} onChange={handleInputChange} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
