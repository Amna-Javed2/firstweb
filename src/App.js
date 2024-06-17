import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";


function App() {
  const[mode, setMode] = useState('light')  ;// whether
  

  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      
  }
}

  return (
    <>

<Navbar title="Accounts" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>

<div className="container"> 
<TextForm heading='Enter Your text and analyze' mode={mode}/>
</div>
<hr/>
<dic className="container">
   <About/> 
</dic>


    </>
  );
}

export default App;
