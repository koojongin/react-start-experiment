import React, { MouseEventHandler } from 'react';

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onClick }: Props) {
  return (
    <button
      style={{
        border: '1px solid #000000',
        borderRadius: '5px',
        padding: '10px 15px',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      type="button"
      name={text}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
