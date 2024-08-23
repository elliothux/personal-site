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
import { ProjectConfig, projects } from './config';

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
        className={cn('text-neutral-400 mt-24 text-4xl text-center', lora.className)}
      >
        My projects
      </motion.h2>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
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
    item: ProjectConfig;
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
        onClick={link ? () => window.open(link, '_blank') : undefined}
        className={link ? 'cursor-pointer' : ''}
        {...animation}
      >
        <Bento contentClassName="px-0 py-0 relative" containerClassName="py-0" highlight={highlight} cursor={cursor}>
          <Image src={cover} alt={name} width={417} height={521} className="w-full h-auto" priority />
          <div className={cn('absolute bottom-0 w-full px-6 pb-2 sm:px-10 sm:pb-5', inter.className)}>
            <h3 className="text-3xl sm:text-4xl text-white font-bold text-nowrap">
              <span>{name}</span>
              {link ? <LinkButton highlight={highlight} target="_blank" /> : null}
            </h3>
            <p className="text-neutral-300 text-xs mt-2 h-8">{description}</p>
          </div>
        </Bento>
      </motion.div>
    );
  },
);
