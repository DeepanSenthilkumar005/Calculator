import React, { useState } from 'react';

function Result() {
  const [output, setOutput] = useState("");
  function display(num){
    setOutput(...num.value)
  }
  function clear(){
    setOutput=null;
  }
  // function equal_to(){
  //   try {
      
  //   } catch (error) {
      
  //   }
  }
  

  return (
    <>
      
      <div className='container'>
          <div className='display'>
            {output}
          </div>
          <div className='buttons'>
              <button onClick={display('1')}>1</button>
              <button onClick={display('2')}>2</button>
              <button onClick={display('3')}>3</button>
              <button onClick={display('+')}>+</button>
              
              <br></br>
              <button onClick={display('4')}>4</button>
              <button onClick={display('5')}>5</button>
              <button onClick={display('6')}>6</button>   
              <button onClick={display('-')}>-</button>   
              <br></br>
              <button onClick={display('7')}>7</button>
              <button onClick={display('8')}>8</button>
              <button onClick={display('9')}>9</button>   
              <button onClick={display('*')}>*</button>           
              <br></br>
              <button onClick={display('.')}>.</button>
              <button onClick={display('0')}>0</button>
              <button onClick={clear()}>CLR</button>   
              <button onClick={display('/')}>/</button>  
              <br></br>                       
              <button onClick={equal_to()}>=</button>
          </div>
      </div>
    
    
    </>
  );


export default Result;
