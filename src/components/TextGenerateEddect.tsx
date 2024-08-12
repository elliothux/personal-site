'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { Children, ReactNode, useEffect } from 'react';
import { cn } from 'utils/misc';

interface Props {
  className?: string;
  duration?: number;
  children: ReactNode[];
  containerClassNames?: string[];
}

export const TextGenerateEffect = ({ className, children, duration = 1, containerClassNames }: Props) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      'div',
      {
        opacity: 1,
        filter: 'blur(0px)',
      },
      {
        duration,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  return (
    <motion.section ref={scope} className={className}>
      {Children.map(children, (i, index) => (
        <motion.div
          key={index}
          className={cn('opacity-0', containerClassNames?.[index])}
          style={{ filter: 'blur(10px)' }}
        >
          {i}
        </motion.div>
      ))}
    </motion.section>
  );
};
