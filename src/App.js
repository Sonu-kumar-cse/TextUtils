import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>
  {
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toogleMode=()=>
  {
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor="#403d6d"
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success");

    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toogleMode={toogleMode} />
      <div className="alert-container">
          <Alerts alert={alert}/>

      </div>
      <Switch>
      <Route path='/about'>
          <About mode={mode}/>
        </Route>
        
      <Route path='/'>
        <TextArea showAlert={showAlert} mode={mode}/>
        </Route>
       
      </Switch>
    
    </Router>
  );
}

export default App;
