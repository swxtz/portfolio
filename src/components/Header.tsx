import { HeaderButtons } from "./HeaderButtons";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex flex-row justify-between pt-9 pb-3.5 border-b border-gray-500">
      <h2 className="text-xl font-medium">{title}</h2>
      <HeaderButtons />
    </div>
  );
}
