/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useId } from 'react';
import { HeaderAbout } from './HeaderAbout';
import island from '../../public/island-with-pipe.png';
import Image from 'next/image';

export function CodeBlockAbout() {
  const lines = [
    'Meu nome é Gustavo Mendonça, estudante e futuro desenvolvedor FullStack',
    'faço aplicativos web em Javascript e Typescript usando ReactJS, e tambem faço',
    "API's RESTFUL usando NodeJS, tenho experiencia com banco de dados SQL como",
    'PostgreSQL, SQLite e MySQL, e uma breve experiencia com NoSQL como MongoDB',
    'Para armazenamento de dados, e Redis para gerenciamento de filas',
    'Tenho conhecimento em deploy via Vercel e Azure, e experiencia em sistemas Linux e bash',
  ];

  return (
    <div className="mt-14">
      <HeaderAbout />
      <div className="flex flex-col">
        <div className="ml-1 mt-2 bg-bluevs-500 text-xl py-3 px-4">
          <span className="text-purplevs-500">
            import <span className="text-greenvs-500">aboutMe</span> from{' '}
            <span className="text-pinkvs-500">{`"./portfolio"`}</span>
            <div className="flex flex-col mt-5 pb-4">
              {lines.map((line) => (
                <span key={useId()} className="mt-1 text-grayvs-500">{`// ${line}`}</span>
              ))}
            </div>
            <div className=""></div>
          </span>
        </div>
      </div>
    </div>
  );
}
