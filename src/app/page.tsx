import { Greetings } from '@/components/Greetings';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="h-screen w-screen px-24">
      <nav>
        <Header title="<GustavoMendonça />" />
      </nav>

      <main>
        <div className="grid grid-cols-2">
          <Greetings />
        </div>
      </main>
    </div>
  );
}
