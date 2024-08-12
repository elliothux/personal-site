'use client';

import { Bento } from 'components/Bento';
import { LinkButton } from 'components/Link';
import { motion } from 'framer-motion';
import { useScreen } from 'hooks/useScreen';
import { default as Image } from 'next/image';
import { memo } from 'react';
import { blockAnimation } from 'utils/animation';
import { inter, lora } from 'utils/font';
import { cn } from 'utils/misc';

interface Project {
  name: string;
  description: string;
  cover: string;
  link?: string;
  highlight?: string;
  cursor?: string;
}

const items: Project[] = [
  {
    name: 'Cocast.fit',
    description: 'Next-Gen SaaS platform for fitness trainers.',
    cover: '898bd5a9-885d-4425-439b-72db3de6bc00',
    link: 'https://www.cocast.fit',
    highlight: '#01a3ec',
    cursor: '#1effff',
  },
  {
    name: 'Cocast Builder',
    description: 'Website builder for fitness professionals.',
    cover: '748043cc-7ff7-4300-1fa6-a82ef31ffb00',
    link: 'https://www.cocast.fit/solution/website/',
    highlight: '#2B65EA',
  },
  {
    name: 'Cocast Connect',
    description: 'All in one mobile app for fitness trainers.',
    cover: '9bc8f5fe-7995-4fc6-999d-1d85cd465700',
    link: 'https://apps.apple.com/us/app/cocast-connect/id6503934326',
    highlight: '#774aff',
  },
  {
    name: 'Cocast Client',
    description: 'All in one mobile app for fitness clients.',
    cover: 'b15e5a1d-47b5-4b30-7d3f-9a420ba37600',
    link: 'https://apps.apple.com/us/app/cocast-fit/id6469503941',
    highlight: '#d6d924',
  },
  {
    name: 'MoeGo Booking',
    description: 'Online booking system for pet grooming business.',
    cover: '2e5e0c0b-c1d7-4608-0fcf-de0021e1ac00',
    link: 'https://www.moego.pet/online-booking-feature',
    highlight: '#FF7A00',
  },
  {
    name: 'Vision',
    description: 'The core engine of Tencent Weda, one of the most popular low-code solution in China.',
    cover: '82d45ce9-5489-49a2-9c6c-81e2e4ad3b00',
    link: 'https://weda.cloud.tencent.com',
    highlight: '#0DB833',
    cursor: '#39f561',
  },
  {
    name: 'Auton',
    description: 'Convert designs into clean code with one click.',
    cover: '59b5f9d9-4c6f-4c3a-f47a-f3dcf2f59400',
    highlight: '#d50682',
  },
  {
    name: 'Luoo.qy',
    description: 'A third-party player for the music community LuooFM.',
    cover: '021003a5-f2f7-4776-f02f-f33d9047a900',
    link: 'https://github.com/elliothux/Luoo.qy',
    highlight: '#3FA1FC',
  },
];

const animation = {
  initial: blockAnimation.initial,
  whileInView: blockAnimation.animate,
};

export function Projects() {
  const { width } = useScreen({ immediate: true });

  return (
    <>
      <motion.h2
        {...animation}
        transition={{
          duration: 2,
          type: 'spring',
        }}
        viewport={{ once: true }}
        className={cn('text-neutral-400 mt-24 text-2xl text-center', lora.className)}
      >
        My projects
      </motion.h2>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Item key={index} item={item} index={index} cols={width! < 768 ? 1 : 2} />
        ))}
      </div>
    </>
  );
}

const Item = memo(
  ({
    item: { name, description, link, cover, highlight, cursor },
    index,
    cols,
  }: {
    item: Project;
    index: number;
    cols: number;
  }) => {
    return (
      <motion.div
        transition={{
          duration: 2,
          type: 'spring',
          delay: cols > 1 && index % 2 ? 0.5 : 0,
        }}
        viewport={{ amount: cols > 1 ? 0.5 : 0.2, once: true }}
        {...animation}
      >
        <Bento contentClassName="px-0 py-0 relative" containerClassName="py-0" highlight={highlight} cursor={cursor}>
          <Image src={cover} alt={name} width={417} height={521} className="w-full h-auto" />
          <div className={cn('absolute bottom-0 w-full px-6 pb-2 sm:px-10 sm:pb-5', inter.className)}>
            <h3 className="text-3xl sm:text-4xl text-white font-bold text-nowrap">
              <span>{name}</span>
              {link ? <LinkButton href={link} highlight={highlight} target="_blank" /> : null}
            </h3>
            <p className="text-neutral-300 text-xs mt-2 h-8">{description}</p>
          </div>
        </Bento>
      </motion.div>
    );
  },
);
