import React, {useState, useCallback, useMemo} from 'react';
import Button from './components/UI/Button/Button'
import Paragraph from './components/Paragraph/Paragraph';
import List from './components/List/List';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  console.log("APP RUNNING!")

  const handleClick = useCallback(() => {
    setShow(preState => !preState)
  }, []);

  const handleTitle = useCallback(() => {
    setListTitle('New Title');
  }, []);

  //memorize items
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hello React!</h1>
      <Paragraph show={show} />
      <Button onClick={handleClick}>Click to see paragraph</Button>
      <List title={listTitle} items={listItems} />
      <Button onClick={handleTitle}>Change List Title</Button>
    </div>
  );
}

export default App;
