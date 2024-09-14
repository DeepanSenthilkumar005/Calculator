import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './result.css'
function Result() {
  const [output, setOutput] = useState("0");
  const [val,setval]=useState(true);

  // Display the text
  function display(num){
    if(num==='/' || num==='*' || num==='+' || num==='-' || num==='%'){
      setOutput(output+num);
    }

    else if(output==="0" || output==='Invalid input' || output==="Infinity"){

      setOutput(num);
    }
    else{
    setOutput(output+num);
  }
}

// Used to clear all the value in the text
  function clear(){
    setOutput("0");
    setval(true);
  }

  // It is used to find the answer for the calculation
  function equal_to(){
    // console.log(eval(output));
    try {
      let ans=String(eval(output));
      // console.log(typeof(ans));
      
      setOutput(ans);
    } catch (error) {
      setOutput("Invalid input");
      // alert("Enter a valid Input")
    }
  }

  // Used for the bracket calculation
  function bracket(){
    if(val){
      setOutput(output+'*(');
      setval(false);
    }
    else{
      setOutput(output+')');
      setval(true);
    }

  }

  // Used to delete the last value
  function deleteValue(){
      if(output[output.length-1]===")")
      {
        setval(false)
      }
      if(output[output.length-1]==="(")
        {
          setOutput(output.slice(0,-1))
          setval(true)
        }
      
      // console.log(output[output.length-1]);
      
      if(output!=="0"){
        setOutput(output.slice(0,-1))
      }
      if(output.length===1){
        setOutput("0")
      }  
      if(output==='Infinity' || output==='Invalid input'){
        setOutput('0')
      }
  }
 


 
  return (
    <>
    <div className='con'>
      <div className='container'>
          <div className='row'>
            {/* <p>{output} </p> */}
            <div className="col">
  
            <input type="text" className='dispaly text-light bg-dark' value={output} readOnly/>
            </div>
            <br></br>
          </div>
          <div className='buttons'>
          <button className='btn btn-danger text-light ' onClick={()=>clear()}>AC</button>   
          <button className='btn btn-warning' onClick={()=>deleteValue()}>C</button>
          <button className='btn btn-secondary' onClick={()=>bracket()}>()</button>
          <button className='btn btn-secondary' onClick={()=>display('/')}>÷</button>  
            <br></br>
              <button className='btn btn-dark' onClick={()=>display('7')}>7</button>
              <button className='btn btn-dark' onClick={()=>display('8')}>8</button>
              <button className='btn btn-dark' onClick={()=>display('9')}>9</button> 
              <button className='btn btn-secondary' onClick={()=>display('-')}>-</button>   
              
              <br></br>
              <button className='btn btn-dark' onClick={()=>display('4')}>4</button>
              <button className='btn btn-dark' onClick={()=>display('5')}>5</button>
              <button className='btn btn-dark' onClick={()=>display('6')}>6</button>   
              <button className='btn btn-secondary' onClick={()=>display('*')}>*</button>           
              <br></br>  
              <button className='btn btn-dark' onClick={()=>display('1')}>1</button>
              <button className='btn btn-dark' onClick={()=>display('2')}>2</button>
              <button className='btn btn-dark' onClick={()=>display('3')}>3</button>
              <button className='btn btn-secondary' onClick={()=>display('+')}>+</button>
              <br></br>
              <button className='btn btn-secondary' onClick={()=>display('%')}>%</button>
              <button className='btn btn-dark' onClick={()=>display('0')}>0</button>
              <button className='btn btn-secondary' onClick={()=>display('.')}>.</button>
              <button className='btn btn-success' onClick={()=>equal_to()}>=</button>
              
              <br></br>                       
              
              
          </div>
      </div>
    
      </div>
    </>
  );
};

export default Result;
