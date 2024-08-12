import { Inter, Kanit, Lora } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], weight: ['400', '800'] });

export const lora = Lora({ subsets: ['latin'], style: 'italic', weight: ['400'] });

export const kanit = Kanit({
  weight: ['800', '600', '400', '200'],
  subsets: ['latin'],
});
