import React, {useState} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  const [show, setShow] = useState(false);

  console.log("APP RUNNING!")

  return (
    <div className="app">
      <h1>Hello React!</h1>
      <Paragraph show={show} />
      <Button onClick={() => setShow(preState => !preState)}>Click to see paragraph</Button>
    </div>
  );
}

export default App;
