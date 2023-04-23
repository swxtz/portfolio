import { Greetings } from '@/components/Greetings';
import { Header } from '@/components/Header';
import islandImg from "../../public/island-with-computer.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen">

      <main>
        <div className="grid grid-cols-2">
          <Greetings />
          <div className="flex items-center justify-center">
            <Image src={islandImg} alt="" priority width={600} className="pr-24"/>
          </div>
        </div>
      </main>
    </div>
  );
}
