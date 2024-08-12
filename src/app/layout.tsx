import { Link } from 'components/Link';
import { ArrowUpRight } from 'lucide-react';
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
      <body className={cn(kanit.className, 'text-white')}>
        {children}
        <footer className="text-center font-light text-sm text-neutral-400 py-8 space-y-1">
          <p>Designed and built by Elliot Hu</p>
          <p>
            <Link className="underline hover:text-white cursor-pointer" href="/">
              <span>Open source on Github</span>
              <ArrowUpRight size={18} className="inline ml-1" />
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
