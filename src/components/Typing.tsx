"use client"

import Typewriter from 'typewriter-effect';
export function Typing() {
  return (
    <Typewriter
      options={{
        strings: ["Gustavo Mendonça"],
        autoStart: true,
        delay: 100,
        loop: true,
        pauseFor: 10000
      }}
    />
  );
}
