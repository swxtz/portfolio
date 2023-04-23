'use client';

import Typewriter from 'typewriter-effect';
export function Typing() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Gustavo Mendonça')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .start();
      }}
    />
  );
}
