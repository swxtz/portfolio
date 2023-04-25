import { Star } from 'lucide-react';
import Image from 'next/image';

export function HeaderAbout() {
  const data = { stars: 7 };

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-6">
        <div className="">
          <Image
            src="https://github.com/swxtz.png"
            alt=""
            width={110}
            height={110}
            className="rounded-full border-2 p-1 border-gray-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-purplevs-500 text-2xl font-semibold">
            @swxtz
          </span>
          <span className="text-lg text-grayvs-500">Created 1 months ago</span>
        </div>
      </div>
      <div className="flex flex-row ">
        <Star color="#607B96" />
        <span>{data.stars} stars</span>
      </div>
    </div>
  );
}
