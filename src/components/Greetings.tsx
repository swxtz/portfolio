"use client"

interface GreetingsProps {
  label?: string
}

import { CodeBlockHome } from "./CodeBlockHome";
import { CvButton } from "./CvButton";
import { Typing } from "./Typing";

export function Greetings({label = ">"}: GreetingsProps) {  



  return (
    <div className="mt-36 flex flex-col text-whitevs">
      <span className="text-2xl text-zinc-200">Hi all. I am</span>
      <div className="flex flex-row items-center text-5xl mt-2">
        <Typing />
      </div>
      <div className="flex flex-row text-3xl text-purplevs-500 font-medium gap-2 mt-2">
        <span>{label}</span>
        <p>Full Stack developer</p>
      </div>

      <div className="">
        <CodeBlockHome />
        <CvButton />
      </div>
    </div>
  );
}
