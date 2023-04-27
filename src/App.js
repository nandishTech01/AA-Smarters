import './App.css';
import React, { useState } from 'react' //imrs
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  var [modeColor, setModeColor] = useState('light');//whether dark mode is on or not? toggleMode

  const toggleMode= ()=>{
    
          if (modeColor === 'light') {
              setModeColor('dark');
          } else {
              setModeColor('light');
          }
        };

  return (
    <>
    <Navbar title= "AA Smarter" mode={modeColor} toggleMode={toggleMode} />

    <div className='container my=3'>
    <TextForm heading="Enter the text for the Analysis." />
    {/* <About /> */}
    </div>

  

      </>
  );
}

export default App;
