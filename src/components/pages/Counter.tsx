import React, { useState } from 'react';
import Title from '../atoms/Title';
import Button from '../atoms/Button';

function Counter() {
  // eslint-disable-next-line no-underscore-dangle
  const [countValue, setCountValue] = useState(0);

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
    setCountValue(() => countValue + 1);
  };
  const subtract = () => {
    setCountValue(() => countValue - 1);
  };

  return (
    <>
      <header>
        <Title text="카운터" />
      </header>
      <div>
        <Button text="-" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event)} />
        <div>{countValue}</div>
        <Button text="+" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event)} />
      </div>
    </>
  );
}

export default Counter;
