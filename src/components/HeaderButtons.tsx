export function HeaderButtons() {
  return (
    <div className="flex flex-row items-center">
      <div className="px-9 border-r border-gray-500">
        <a href="#" className="hover:text-gray-300/80 transition-colors">_Hello</a>
      </div>
      <div className="px-9 border-r border-gray-500">
        <a href="/about" className="hover:text-gray-300/80 transition-colors">_About</a>
      </div>
      <div className="px-9 border-r border-gray-500">
        <a href="#" className="hover:text-gray-300/80 transition-colors">_Projects</a>
      </div>
      <div className="px-9">
        <a href="#" className="hover:text-gray-300/80 transition-colors">_Contact-me</a>
      </div>
    </div>
  );
}
