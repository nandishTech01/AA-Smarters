import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title= "AA Smarter" />

    <div className='container' mb='3'>
    <TextForm heading="Enter the text for the Analysis." />
    </div>

      </>
  );
}

export default App;
