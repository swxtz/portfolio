"use client"

import { Typing } from "./Typing";

export function Greetings() {

  return (
    <div className="mt-36 flex flex-col text-whitevs">
      <span className="text-2xl text-zinc-200">Hi all. I am</span>
      <div className="flex flex-row items-center text-5xl mt-2">
        <Typing />
      </div>
    </div>
  );
}
