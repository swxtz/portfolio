import { FileDown } from "lucide-react";

export function CvButton() {
  return (
    <a href="#" className="flex flex-row items-center border-2 rounded-full border-greenvs-500 w-fit px-4 py-3 gap-1 mt-4">
      <FileDown color="#43D9AD" />
      <span className="underline">curriculum</span>
    </a>
  )
}