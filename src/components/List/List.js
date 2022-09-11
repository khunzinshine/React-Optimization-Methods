import React, { useMemo } from 'react';
import classes from './List.module.css';

const List = ({items, title}) => {

    //memorized items that no changes
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('LIST RUNNING');

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(List);
