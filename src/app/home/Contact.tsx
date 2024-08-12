'use client';

import { Bento } from 'components/Bento';
import { HeroSection } from 'components/HeroSection';
import { Link } from 'components/Link';
import { ArrowDownToLine, Github, Linkedin, LucideIcon, Mail } from 'lucide-react';

const items: {
  icon: LucideIcon;
  link: string;
  text?: string;
}[] = [
  {
    icon: Mail,
    link: 'mailto:elliothu.my@gmail.com',
    text: 'elliothu.my@gmail.com',
  },
  {
    icon: Linkedin,
    link: 'https://linkedin.com/in/elliot-hu',
  },
  {
    icon: Github,
    link: 'https://github.com/elliothux',
  },
];

export function Contact({ show }: { show: boolean }) {
  return (
    <HeroSection show={show} delay={2} className="col-span-full sm:col-span-4 md:col-span-3">
      <Bento
        title="Contact me"
        className="h-full"
        containerClassName="bg-[#BEFE1C]"
        contentClassName="text-black flex flex-col justify-between"
        titleClassName="text-black"
        background={[310, 467, '86874178-f146-4db4-4757-6b5924c59000']}
        cursor="blue"
      >
        <div className="grid gap-7 mt-8 mb-4 text-black">
          {items.map(({ icon: Icon, link, text }) => (
            <div key={link}>
              <Icon size={20} />
              <Link href={link} target="_blank" rel="noopener noreferrer" className="font-light text-nowrap">
                {text || link}
              </Link>
            </div>
          ))}
        </div>

        <div className="font-light flex justify-between items-center pt-5 sm:pt-0">
          <Link href="https://public.cocast.fit/Resume%20-%20Elliot.pdf" target="_blank">
            Download my resume
          </Link>
          <button className="p-2 rounded-full bg-white/50 backdrop-blur-[20px]">
            <ArrowDownToLine size={22} />
          </button>
        </div>
      </Bento>
    </HeroSection>
  );
}
