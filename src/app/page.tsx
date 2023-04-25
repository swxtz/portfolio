import { Greetings } from '@/components/Greetings';
import islandImg from '../../public/island-with-computer.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-max w-max">
      <main className="mr-24">
        <div className="grid grid-cols-2">
          <Greetings />
          <div className="flex items-center justify-center w-[600px]">
            <Image src={islandImg} alt="" priority width={600} className="" />
          </div>
        </div>
      </main>
    </div>
  );
}
