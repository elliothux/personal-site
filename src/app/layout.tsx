import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { kanit } from 'utils/font';
import { cn } from 'utils/misc';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elliot Hu',
  description: 'Personal website of Elliot Hu',
  icons: {
    icon: '/icon-512.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(kanit.className, 'text-white')}>{children}</body>
    </html>
  );
}
