import './App.css';
import React, { useState } from 'react' //imrs
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  //https://www.makeuseof.com/how-to-add-dark-mode-to-a-react-application/
  const [modeColor, setModeColor] = useState('light');//whether dark mode is on or not? toggleMode

 const[alert,setAlert]= useState(null);

 const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type:type
  }

  )
 }
  const toggleMode= ()=>{

        if (modeColor === 'light') {
            setModeColor('dark');
           document.body.style.backgroundColor='#042743';
           showAlert("dark mode enabled","success")

      } else {
            setModeColor('light');
           document.body.style.backgroundColor='white';
           showAlert("light mode enabled","success")
            }
        };

  return (
    <>
    <Navbar title= "AA Smarter" mode={modeColor} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my=3'>
    <TextForm showAlert={showAlert} heading="Enter the text for the Analysis."  mode={modeColor}/>
    {/* <About /> */}
    </div>

  

      </>
  );
}

export default App;
