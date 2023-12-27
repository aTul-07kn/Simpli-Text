import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

let App=()=>{
  
  const toggleMode=(bgMode)=>{
    if(bgMode==="dark"){
      setMode("dark");
      document.body.style.backgroundColor="#282828"; //black
      document.body.style.color="#f8f8ff"; //white
      setBtnColor("secondary");
      showAlert("success","Dark mode enabled!");
      setBoxStyle({
        backgroundColor: "#484848", //grey
        color: "#f8f8ff" //white
      })
    }
    else if(bgMode==='light'){
      setMode("light");
      document.body.style.backgroundColor="#f8f8ff"; //white
      document.body.style.color="#282828"; //black
      setBtnColor("outline-primary");
      showAlert("success","Light mode enabled!");
      setBoxStyle({
        backgroundColor: "#f8f8ff", //white
        color: "#484848" //grey
      })
    }
    else if(bgMode==="midnight"){
      setMode("dark");
      document.body.style.backgroundColor="#333370"; //blue
      document.body.style.color="#f8f8ff"; //white
      setBtnColor("primary");
      showAlert("success","Midnight blue mode enabled!");
      setBoxStyle({
        backgroundColor: "#13274F", //blue
        color: "#f8f8ff" //white
      })
    }
    //blood red
    else{
      setMode("dark");
      document.body.style.backgroundColor="#8B0000"; //red
      document.body.style.color="#f8f8ff"; //white
      setBtnColor("danger");
      showAlert("success","Blood moon mode enabled!");
      setBoxStyle({
        backgroundColor: "#722F37", //red
        color: "#f8f8ff" //white
      })
    }
  }

  const showAlert=(type,message)=>{
    setAlert({
      mesg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const [btnColor,setBtnColor]=useState("outline-primary")
  const [boxStyle,setBoxStyle]=useState({
    backgroundColor: "#f8f8ff", //white
    color: "#484848" //grey
  })
  return (
    <>
      <Navbar btnColor={btnColor} title="SimpliText" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm boxStyle={boxStyle} btnColor={btnColor} showAlert={showAlert} heading="Enter Text for Analysis" mode={mode}/>
      </div>
      
      {/*       
      <Router>
        <Navbar btnColor={btnColor} title="SimpliText" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* here container class is used to make the text area to the center*/}
          {/* my-3 class is used to put some y-axis margin */}
          {/* <Routes>
            <Route exact path="/about" element={<About myStyle={boxStyle} />}/>
            <Route exact path="/" element={<TextForm boxStyle={boxStyle} btnColor={btnColor} showAlert={showAlert} heading="Enter Text for Analysis" mode={mode}/>}/>
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
