'use client';

import { TextGenerateEffect } from 'components/TextGenerateEddect';
import { motion } from 'framer-motion';
import { useScreen } from 'hooks/useScreen';
import { default as Image, ImageProps } from 'next/image';
import { forwardRef, useMemo } from 'react';
import { lora } from 'utils/font';
import { cn } from 'utils/misc';

const descClassName = cn(
  lora.className,
  'text-3xl md:text-4xl text-neutral-400 leading-snug select-none pointer-events-none',
);

export function Hero() {
  return (
    <>
      <TextGenerateEffect className="text-center select-none" containerClassNames={['relative z-50']}>
        <div className="flex justify-center items-center gap-3 mb-3">
          <h1 className="text-4xl md:text-5xl select-none pointer-events-none">Hi, I’m Elliot Hu,</h1>
          <div className="w-[40px] h-[40px] relative">
            <AvatarImg />
          </div>
        </div>
        <p className={descClassName}>Full-Stack Engineer</p>
        <p className={descClassName}>Startup Co-Founder</p>
      </TextGenerateEffect>
    </>
  );
}

function AvatarImg() {
  const { width } = useScreen({ immediate: true });

  const size = width! > 880 ? 'lg' : width! > 620 ? 'md' : width! > 520 ? 'sm' : 'xs';
  const variants = useMemo(
    () => ({
      initial: {
        transition: { type: 'just' },
        clipPath: 'circle(23.5% at 50% 58%)',
        scale: 0.55,
        y: -100,
        x: -80,
        cursor: `url(https://imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/6bcc1004-042f-463d-1c56-81b0f2cab600/w=28), auto`,
        shadow: '0 0 0 0 rgba(0, 0, 0, 0)',
      },
      hover: {
        shadow: '0 0 0 10px rgba(0, 0, 0, 0.2)',
      },
      tap: {
        transition: { type: 'spring' },
        clipPath: 'circle(100% at 50% 58%)',
        cursor: `url(https://imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/271b1ba5-a380-4f48-df4b-f43427103400/w=28), auto`,
        ...{
          lg: { scale: 3, y: 150, x: -180 },
          md: { scale: 2.5, y: 100, x: -200 },
          sm: { scale: 2, y: 50, x: -200 },
          xs: { scale: 1.5, y: 0, x: -220 },
        }[size],
      },
    }),
    [size],
  );

  return (
    <motion.div
      style={{
        backgroundImage:
          'url(https://imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/10c7bc95-34c6-4873-741a-630826354700/w=1200)',
      }}
      className="max-w-[100vw] w-[220px] h-[220px] absolute rounded-lg z-50 bg-cover bg-center select-none"
      variants={variants}
      initial="initial"
      whileTap="tap"
      whileHover="hover"
    />
  );
}

const MotionImage = motion(
  forwardRef<HTMLImageElement, ImageProps>(function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />;
  }),
);
