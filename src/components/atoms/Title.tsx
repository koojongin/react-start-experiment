import React from 'react';

type Props = {
  text: string;
};

function Title({ text }: Props) {
  return (
    <div
      style={{
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {text}
    </div>
  );
}

export default Title;
