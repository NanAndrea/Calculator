import { useState } from 'react'

import './App.css'

function App() {


 const [number, setNumber] = useState(0);
 const [operator, setOperator] = useState();
 

 function handleDisplayNumber(event){
  
  setNumber(event.target.value);

  if(number === 0){
    setNumber(event.target.value);
  } else {
    setNumber(number+event.target.value);
  }
  
 }

 


 function handleDisplayOperator(event){
  let operatorInput = event.target.value;
  setOperator(operatorInput);  
 }
 


 function handleAllClear(){
  setOperator();
  setNumber(0);
 }

 
 
  return (
    <div className="App">
      
      <input type="text" value={[number,operator].join("")} onChange={handleDisplayOperator} readOnly/>
      
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

          <button className="equal-sign" value="=" >=</button>
        </div>


      
    </div>
  )
}


export default App
