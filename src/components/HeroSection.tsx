import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useScreen } from '../hooks/useScreen';
import { blockAnimation } from '../utils/animation';

interface Props {
  delay: number;
  className?: string;
  show?: boolean;
}

export function HeroSection({ delay, className, children, show }: PropsWithChildren<Props>) {
  const { width } = useScreen({ immediate: true });

  if (width! > 700) {
    return (
      <motion.div
        className={className}
        transition={{
          delay,
          duration: 2,
          type: 'spring',
        }}
        {...blockAnimation}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      transition={{
        duration: 2,
        type: 'spring',
      }}
      variants={blockAnimation}
      initial="initial"
      whileInView={show ? 'animate' : 'initial'}
      viewport={{ amount: 0.3, once: true }}
    >
      {children}
    </motion.div>
  );
}
