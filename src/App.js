import { useState } from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';



function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);
  const sowAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      sowAlert('Dark mode is enabled','success');
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      sowAlert('light mode is enabled','success');

    }
  }
  return (
    <>
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className='container'>
  <Textarea heading="Enter the text to analyze below" sowAlert={sowAlert} mode={mode} togglemode={togglemode}/>
  <About mode={mode} togglemode={togglemode}/>
  </div>
  </>
  );
}

export default App;
