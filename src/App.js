import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
let [numberOne,setNumberOne]=useState(0);
let [numberTwo,setNumberTwo]=useState(0);
let [operator,setOperator]=useState("");
let [result, setResult]=useState(0)

const handleSubmi=()=>{
console.log("=======")
console.log(operator)
 if(operator ==='addition'){
setResult(parseInt(numberOne)+parseInt(numberTwo))
 }
else if (operator==='subtraction'){
  setResult(parseInt(numberOne)-parseInt(numberTwo))
}
else if (operator==='multiplication'){
  setResult(parseInt(numberOne)*parseInt(numberTwo))
}
else if (operator==='divition'){
  setResult(parseInt(numberOne)/parseInt(numberTwo))
}

}
  return (
    <div className="App">
      <div className="container">
        <div className="flexContainer">
          <div className="row">
            <h4>Number 1</h4>
            <input style={{ height: "20px" }} type="text" onChange={(e)=>setNumberOne(e.target.value)} />
          </div>
          <div className="row">
            <h4>Number 1</h4>
            <input style={{ height: "20px" }} type="text" onChange={(e)=>setNumberTwo(e.target.value)}  />
          </div>
          <div className="row">
            <h4>Operators</h4>
            <select style={{ height: "25px", width:"170px" }} type="text"  onChange={(e)=>setOperator(e.target.value)}  >
            <option value="select">Select</option>
              <option value="addition">+</option>
              <option value="subtraction">-</option>
              <option value="multiplication">*</option>
              <option value="divition">/</option>
            </select>
          </div>

          <div className="row" style={{marginTop:"10px"}}>
           
            <button style={{ height: "30px",  width:"70px"}} onClick={handleSubmi} >Calculate</button>
         
          </div>
          <div className="row">
            <h4>OUTPUT: {result} </h4>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
