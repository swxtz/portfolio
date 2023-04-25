/* eslint-disable camelcase */
import clsx from 'clsx';
import './globals.css';

import { Fira_Code } from 'next/font/google';
import React from 'react';
import { Header } from '@/components/Header';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Gustavo Mendonca | Portfolio',
  description: 'Hi, Im Full-Stack Developer from Brazil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={clsx(
          'bg-background text-gray-500 h-screen w-screen px-24 scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-700 overflow-x-hidden',
          firaCode.className
        )}
      >
        <nav>
          <Header title="<GustavoMendonça />" />
        </nav>
        {children}
      </body>
    </html>
  );
}
