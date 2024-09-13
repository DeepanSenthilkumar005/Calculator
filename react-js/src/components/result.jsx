import React, { useState } from 'react';

function Result() {
  const [output, setOutput] = useState("0");
  function display(num){
    if(output===0){

      setOutput(output.slice(1), num);
    }
    else{
    setOutput(output+num);
  }}
  function clear(){
    setOutput("0");
  }
  function equal_to(){
    // console.log(eval(output));
    try {
      let ans=eval(output);
      setOutput(ans);
    } catch (error) {
      setOutput("Invalid input");
    }
  }
  function deleteValue(){
       setOutput(output.slice(0,-1))
  }

  return (
    <>
    
      <div className='container'>
          <div className='display'>
            <p>{output} </p>
          </div>
          <div className='buttons'>
              <button onClick={()=>display('1')}>1</button>
              <button onClick={()=>display('2')}>2</button>
              <button onClick={()=>display('3')}>3</button>
              <button onClick={()=>display('+')}>+</button>
              
              <br></br>
              <button onClick={()=>display('4')}>4</button>
              <button onClick={()=>display('5')}>5</button>
              <button onClick={()=>display('6')}>6</button>   
              <button onClick={()=>display('-')}>-</button>   
              <br></br>
              <button onClick={()=>display('7')}>7</button>
              <button onClick={()=>display('8')}>8</button>
              <button onClick={()=>display('9')}>9</button>   
              <button onClick={()=>display('*')}>*</button>           
              <br></br>
              <button onClick={()=>display('.')}>.</button>
              <button onClick={()=>display('0')}>0</button>
              <button onClick={()=>clear()}>CLR</button>   
              <button onClick={()=>display('/')}>/</button>  
              <br></br>                       
              <button onClick={()=>equal_to()}>=</button>
              <button onClick={()=>deleteValue()}>del</button>
          </div>
      </div>
    
    
    </>
  );
};

export default Result;
