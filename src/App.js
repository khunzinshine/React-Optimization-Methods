import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  const [show, setShow] = useState(false);

  console.log("APP RUNNING!")

  const handleClick = useCallback(() => {
    setShow(preState => !preState)
  }, []);

  return (
    <div className="app">
      <h1>Hello React!</h1>
      <Paragraph show={show} />
      <Button onClick={handleClick}>Click to see paragraph</Button>
    </div>
  );
}

export default App;
