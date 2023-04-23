/* eslint-disable camelcase */
import clsx from 'clsx';
import './globals.css';

import { Fira_Code } from 'next/font/google';
import React from 'react';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: "swap",
  preload: true
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
      <body className={clsx('bg-background text-gray-500', firaCode.className)}>
        {children}
      </body>
    </html>
  );
}
