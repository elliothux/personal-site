'use client';

import { TextGenerateEffect } from 'components/TextGenerateEddect';
import { motion } from 'framer-motion';
import { useScreen } from 'hooks/useScreen';
import { default as Image, ImageProps } from 'next/image';
import { forwardRef, useEffect, useMemo } from 'react';
import { lora } from 'utils/font';
import { cn } from 'utils/misc';

const descClassName = cn(lora.className, 'text-3xl md:text-4xl text-neutral-400 leading-snug');

export function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TextGenerateEffect className="text-center" containerClassNames={['relative z-50']}>
      <div className="flex justify-center items-center gap-3 relative mb-3">
        <h1 className="text-4xl md:text-5xl">Hi, I’m Elliot Hu,</h1>
        <div className="w-[40px] h-[40px]">
          <AvatarImg />
        </div>
      </div>
      <p className={descClassName}>Full-Stack Engineer</p>
      <p className={descClassName}>Startup Co-Founder</p>
    </TextGenerateEffect>
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
        translateY: 0,
        translateX: 0,
        cursor: `url(https://imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/6bcc1004-042f-463d-1c56-81b0f2cab600/w=28), auto`,
      },
      tap: {
        transition: { type: 'spring' },
        clipPath: 'circle(100% at 50% 58%)',
        cursor: `url(https://imagedelivery.net/Zw2NKlw6vpAEx4T5z1A_JQ/271b1ba5-a380-4f48-df4b-f43427103400/w=28), auto`,
        ...{
          lg: { scale: 3, translateY: 250, translateX: -100 },
          md: { scale: 2.5, translateY: 200, translateX: -120 },
          sm: {
            scale: 2,
            translateY: 150,
            translateX: -80,
          },
          xs: {
            scale: 1.5,
            translateY: 100,
            translateX: -100,
          },
        }[size],
      },
    }),
    [size],
  );

  return (
    <MotionImage
      className="max-w-[100vw] w-[220px] absolute -top-[100px] -right-[100px] rounded-lg z-50"
      src="10c7bc95-34c6-4873-741a-630826354700"
      alt="me and fully ball"
      width={1372}
      height={1372}
      variants={variants}
      initial="initial"
      whileTap="tap"
    />
  );
}

const MotionImage = motion(
  forwardRef<HTMLImageElement, ImageProps>(function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />;
  }),
);
