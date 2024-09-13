import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/result.css'
function Result() {
  const [output, setOutput] = useState("0");
  const [val,setval]=useState(true);
  function display(num){

    if(output==="0" || output==='Invalid input' || output==="Infinity"){

      setOutput(num);
    }
    else{
    setOutput(output+num);
  }}
  function clear(){
    setOutput("0");
    setval(true);
  }
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
  function deleteValue(){
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
 
  // <input type='text' ></input>


  useEffect(() => {
    const handleKeydown = (event) => {
        const key = event.key;

        // Update the input field with the pressed key
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/','%','(',')'].includes(key)) {
            setOutput((prevInput) => prevInput + key);
        }
        // key==='Enter' && equal_to();
        // key==='Backspace' && deleteValue();
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeydown);

    // Cleanup event listener on component unmount
    return () => {
        document.removeEventListener('keydown', handleKeydown);
    };
}, []);



  return (
    <>
    
      <div className='container'>
          <div className=' row '>
            {/* <p>{output} </p> */}
            <input type="text" value={output} readOnly/>
          </div>
          <div className='buttons'>
          <button className='btn btn-danger text-dark' onClick={()=>clear()}>AC</button>   
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
    
    
    </>
  );
};

export default Result;
