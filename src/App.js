import React, { useState } from 'react';
import './App.css';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");


  const op = ["/", "*", "+", "-", "."];

  const updateCalc = value => {

    if (
      op.includes(value) && calc === ''
      ||
      op.includes(value) && op.includes(calc.slice(-1))
    ) {
      return;
    }

    if (!op.includes(value)) {
      setResult(eval(calc + value).toString())
    }

    setCalc(calc + value);
  }

  //complete digits
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }
  //equal
  const calcEqual = () => {
    if(!calc == ''){
      setCalc(eval(calc).toString());
    } else{
      alert('There is not a number'); 
    }
  }

  const deleteNum = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  }

  return (
    <div className='main-div'>
      <div className='main-calculator'>
        <div className="display">
          {result ? <span>({result})</span> : ""}
          &nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("+")}><strong>+</strong></button>
          <button onClick={() => updateCalc("-")}><strong>-</strong></button>
          <button onClick={() => updateCalc("/")}><strong>/</strong></button>
          <button onClick={() => updateCalc("*")}><strong>*</strong></button>
          <button onClick={deleteNum}><strong>DEL</strong></button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calcEqual}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
