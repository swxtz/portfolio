
import Link from "next/link";
 
export function HeaderButtons() {
  return (
    <div className="flex flex-row items-center">
      <div className="px-9 border-r border-gray-500">
        <Link href="/" className="hover:text-gray-300/80 transition-colors">_Hello</Link>
      </div>
      <div className="px-9 border-r border-gray-500">
        <Link href="/about" className="hover:text-gray-300/80 transition-colors">_About</Link>
      </div>
      <div className="px-9 border-r border-gray-500">
        <Link href="/projects" className="hover:text-gray-300/80 transition-colors">_Projects</Link>
      </div>
      <div className="px-9">
        <Link href="/contact" className="hover:text-gray-300/80 transition-colors">_Contact-me</Link>
      </div>
    </div>
  );
}
