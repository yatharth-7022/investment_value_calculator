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
      <Results inputValue={inputValue} onChange={handleInputChange} />
    </>
  );
}

export default App;
