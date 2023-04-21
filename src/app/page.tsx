import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1 className="text-2xl">Em Construção</h1>
    </div>
  );
}
