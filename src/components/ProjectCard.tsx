import Image from 'next/image';

export function ProjectCard() {
  const data = [
    {
      name: 'spotify-ui',
      githubUrl: 'https://github.com/swxtz/spotify-ui',
      description:
        'Um clone da interface do spotify web, feito 100% em Typescriptt, TailwindCSS e NextJS 13',
      image:
        'https://camo.githubusercontent.com/3366c133d3cf7143794fd29ac60d8c1f16f29572e56ff420c4b8ce086ede99c1/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313039353138333036343630343336343934322f313039383637323338383837363534323034322f696d6167652e706e673f77696474683d383533266865696768743d343830',
    },
  ];

  return (
    <div className="w-80 mt-4">
      <span className="text-base">spotify-ui</span>
      <div className="rounded bg-slate-950 mt-8">
        <div className="h-[50%]">
          <Image
            src="https://media.discordapp.net/attachments/1095183064604364942/1098672388876542042/image.png?width=1366&height=768"
            quality={100}
            alt="title"
            width={320}
            height={180}
            className="rounded-t"
          />
        </div>
        <div className="flex flex-col mx-6">
          <span className="mt-7">
            Um clone da interface do spotify
          </span>
          <a className="mt-6 mb-7 text-white px-4 py-3 bg-grayvs-700 w-fit rounded" href="https://github.com/swxtz/spotify-ui">View project</a>
        </div>
      </div>
    </div>
  );
}
