import React, { useState } from 'react';
import Title from '../atoms/Title';
import Button from '../atoms/Button';

function List() {
  // eslint-disable-next-line no-underscore-dangle
  const [arrayValues, setArrayValues] = useState([1, 2, 3, 4, 5]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    switch (target.outerText) {
      case '+':
        add();
        break;
      case '-':
        subtract();
        break;
      default:
        break;
    }
  };

  const add = () => {
    setArrayValues(() => {
      const clonedArrayValues = [...arrayValues];
      clonedArrayValues.push(parseInt(String(Math.random() * 10), 10));
      return clonedArrayValues;
    });
  };
  const subtract = () => {
    setArrayValues(() => {
      const clonedArrayValues = [...arrayValues];
      clonedArrayValues.pop();
      return clonedArrayValues;
    });
  };

  return (
    <>
      <header>
        <Title text="리스트" />
      </header>
      <div>
        <Button text="-" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event)} />
        <div>{arrayValues.join(',')}</div>
        <Button text="+" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event)} />
      </div>
    </>
  );
}

export default List;
