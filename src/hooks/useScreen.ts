import { default as throttle } from 'lodash.throttle';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const initial: { width: number | null; height: number | null } = { width: null, height: null };

function getScreen() {
  return typeof window !== 'undefined'
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : initial;
}

interface Options {
  immediate?: boolean;
}

type Callback = (v: ReturnType<typeof getScreen>) => unknown;
const callbacks: Callback[] = [];

const onResize = throttle(
  () => {
    const screen = getScreen();
    callbacks.forEach((f) => f(screen));
  },
  100,
  { leading: true, trailing: true },
);

function on(callback: Callback) {
  if (callbacks.length === 0) {
    window.addEventListener('resize', onResize);
  }
  callbacks.push(callback);
}

function off(callback: Callback) {
  const index = callbacks.indexOf(callback);
  if (callbacks.length === 0) {
    window.removeEventListener('resize', onResize);
  }
}

export function useScreen({ immediate }: Options = {}) {
  const [{ width, height }, setScreen] = useState<{ width: number | null; height: number | null }>(
    immediate ? getScreen() : initial,
  );

  const server = typeof window === 'undefined';
  useIsomorphicLayoutEffect(() => {
    if (server) {
      return;
    }
    setScreen(getScreen());
    on(setScreen);
    return () => {
      off(setScreen);
    };
  }, [server]);

  return { width, height };
}
