import Header from "./components/Header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 10,
    duration: 10
  })

  const isValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: newValue
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeValue={handleUserInput} />
      {!isValid && <p className="center">Invalid data. Please enter a valid duration greater than 0.</p>}
      {isValid && <Result userInput={userInput} />}
    </>
  )
}

export default App
