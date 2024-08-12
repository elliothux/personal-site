'use client';

import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { default as Image } from 'next/image';
import { MouseEvent, PropsWithChildren, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { lora } from 'utils/font';
import { cn } from 'utils/misc';

interface Props {
  title?: string;
  titleClassName?: string;
  className?: string;
  contentClassName?: string;
  containerClassName?: string;
  rounded?: number;
  background?: [number, number, string];
  highlight?: string;
  cursor?: string;
}

const bgItemClassName = 'absolute top-0 right-0 w-full h-full pointer-events-none';

export function Bento({
  title,
  titleClassName,
  className,
  contentClassName,
  containerClassName,
  rounded = 26,
  background,
  highlight = '#fff',
  cursor,
  children,
}: PropsWithChildren<Props>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (clientX - (rect.left + rect.width / 2)) / 20,
      y: (clientY - (rect.top + rect.height / 2)) / 20,
    });
    // const scrollX = window.scrollX;
    // const scrollY = window.scrollY;
    // x.set(e.clientX + scrollX);
    // y.set(e.clientY + scrollY);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  const cursorAnimation = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const mouse = window.matchMedia('(hover:hover)').matches;
    return mouse && window.innerWidth > 680;
  }, []);

  return (
    <>
      <section
        className={cn('relative overflow-hidden', className)}
        onMouseMove={cursorAnimation ? handleMouseMove : undefined}
        onMouseEnter={cursorAnimation ? handleMouseEnter : undefined}
        onMouseLeave={cursorAnimation ? handleMouseLeave : undefined}
        style={{
          borderRadius: rounded,
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
            : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className={cn(bgItemClassName, 'opacity-90')}
          style={{
            borderRadius: rounded,
            background: `radial-gradient(163.27% 64.37% at 121.3% 37.79%, ${highlight} 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        />
        <div
          className={bgItemClassName}
          style={{
            borderRadius: rounded,
            background: `radial-gradient(82.72% 80.43% at -8.95% -58.14%, ${highlight} 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        />
        <div
          className={bgItemClassName}
          style={{
            borderRadius: rounded,
            background: `radial-gradient(122.53% 48.31% at -40.12% 135.08%, ${highlight} 0%, rgba(255, 255, 255, 0) 100%)`,
          }}
        />

        {isHovering ? (
          <div className="absolute inset-0" style={{ borderRadius: rounded }}>
            <MovingBorder rx={`${rounded}px`} ry={`${rounded}px`}>
              <div
                className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--highlight)_40%,transparent_60%)] blur-[15px]"
                style={{ '--highlight': highlight } as {}}
              />
            </MovingBorder>
          </div>
        ) : null}

        <div
          className={cn(
            'm-[1px] bg-black overflow-hidden relative h-[calc(100%-2px)] py-8 flex flex-col child:px-6 lg:child:px-10 child:relative',
            containerClassName,
          )}
          style={{ borderRadius: rounded - 1 }}
        >
          {background ? (
            <Image
              alt="bg"
              width={background[0]}
              height={background[1]}
              src={background[2]}
              className="absolute top-0 left-0 w-full h-full pointer-events-none px-0"
            />
          ) : null}
          <div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x / 2}px, ${-mousePosition.y / 2}px, 0) scale3d(1.03, 1.03, 1)`
                : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
              transition: 'transform 0.1s ease-out',
              backfaceVisibility: 'hidden',
            }}
            className={cn('grow shrink', contentClassName)}
          >
            {title ? <p className={cn('text-xl text-neutral-400', lora.className, titleClassName)}>{title}</p> : null}
            {children}
          </div>
        </div>
      </section>
      {/*<AnimatePresence>{isHovering && <FollowPointer x={x} y={y} color={cursor || highlight} />}</AnimatePresence>*/}
    </>
  );
}

export const MovingBorder = ({ children, rx, ry }: { children: ReactNode; rx?: string; ry?: string }) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / 6000;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  color,
}: {
  x: any;
  y: any;
  title?: string | ReactNode;
  color: string;
}) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-[100] pointer-events-none"
      style={{
        top: y,
        left: x,
        pointerEvents: 'none',
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="white"
          fill={color}
          d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
        />
      </svg>
      {title ? (
        <motion.div
          style={{ backgroundColor: color }}
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          className={'px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full'}
        >
          {title}
        </motion.div>
      ) : null}
    </motion.div>
  );
};
