import { useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ApiTest from "./pages/ApiTest/ApiTest";
import Result from "./pages/Result/Result";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);

  return (
    <>
      {step === 1 && <SignUp next={() => setStep(2)} />}
      {step === 2 && <SignIn next={() => setStep(3)} />}
      {step === 3 && <ApiTest showResult={(res) => { setResult(res); setStep(4); }} />}
      {step === 4 && <Result data={result} restart={() => setStep(3)} />}
    </>
  );
}

export default App;
