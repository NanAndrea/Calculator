import { useState } from 'react'

import './App.css'

function App() {


 const [number, setNumber] = useState("");
 
 
 
 function handleDisplayNumber(event){
  let nrInput=event.target.value;

  if(number === "0" || number === "." || number ==="+" || number === "*"){
    setNumber( nrInput);
  } else {
    setNumber(number + nrInput);
  }


 }



 function handleDisplayOperator(event){
  const operatorInput = event.target.value;

  let newOperand;
  if(number.slice(-1) === "0"){
    setNumber(number + operatorInput);
  } else {
    if(!Number(number.slice(-1))) {
      newOperand = number.slice(0,-1);
      setNumber(newOperand + operatorInput);
    } else {
      setNumber(number + operatorInput);
    }

    
  }   
}


 function calculate(){
    setNumber(eval(number).toString());  
    
 }


 function handleAllClear(){
    setNumber("");
      
 }
 

 
  return (
    <div className="App">
      
      <input type="text" value={number} placeholder={0} readOnly/>
      
        <div className="calculator-keys">
          <button value="+" onClick={handleDisplayOperator} >+</button>
          <button value="-" onClick={handleDisplayOperator} >-</button>
          <button value="*" onClick={handleDisplayOperator} >&times;</button>
          <button value="/" onClick={handleDisplayOperator} >&divide;</button>

          <button value={7} onClick={handleDisplayNumber}>7</button>
          <button value={8} onClick={handleDisplayNumber}>8</button>
          <button value={9} onClick={handleDisplayNumber}>9</button>

          <button value={4} onClick={handleDisplayNumber}>4</button>
          <button value={5} onClick={handleDisplayNumber}>5</button>
          <button value={6} onClick={handleDisplayNumber}>6</button>

          <button value={1} onClick={handleDisplayNumber}>1</button>
          <button value={2} onClick={handleDisplayNumber}>2</button>
          <button value={3} onClick={handleDisplayNumber}>3</button>

          <button value={0} onClick={handleDisplayNumber}>0</button>
          <button value="." onClick={handleDisplayOperator} >.</button>
          <button value="all-clear" onClick={handleAllClear}>AC</button>

          <button className="equal-sign" value="=" onClick={calculate} >=</button>
        </div>


      
    </div>
  )
}


export default App
