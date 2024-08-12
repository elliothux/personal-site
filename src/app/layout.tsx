import { Link } from 'components/Link';
import { ArrowUpRight, Github } from 'lucide-react';
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
        <footer className="text-center font-light text-sm text-neutral-400 py-8 space-y-2">
          <Link href="https://elliothu.me" className="hover:text-white" underlineClassName="bg-white">
            Designed and built by Elliot Hu
            <ArrowUpRight size={18} className="inline-block ml-1 -mt-1" />
          </Link>
          <p>
            <Link
              className="hover:text-white"
              underlineClassName="bg-white"
              href="https://github.com/elliothux/personal-site"
            >
              <span>Open source on Github</span>
              <Github size={18} className="inline-block ml-2 -mt-1" />
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
