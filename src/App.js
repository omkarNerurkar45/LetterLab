import { useState } from 'react';
import './App.css';
import Navbar from './protoTYpes/Navbar';
import TextForm from './protoTYpes/TextForm';
import Alerts from './protoTYpes/Alerts';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = ( message, type )=> {
    setAlert( {
      msg : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1500);
  }

  const togglePlay = ()=>{
    if( mode === 'light' ) {
      setMode('dark');
      document.body.style.backgroundColor = '#282c31';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const togglePlayRed = ()=>{
    if( mode === 'light' ) {
      setMode('red')
      document.body.style.backgroundColor = '#f94365';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" home="Home" mode={mode} togglePlay={togglePlay} togglePlayRed={togglePlayRed} />
    <Alerts alert= {alert} />
    <div className="container">
        <TextForm showAlert={showAlert} mode={mode}/>
    </div>
    </>
  );
}

export default App;
