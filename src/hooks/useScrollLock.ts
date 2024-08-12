import { useEffect } from 'react';

export function useScrollLock(lock: boolean, element?: HTMLElement) {
  useEffect(() => {
    const e = element || document.body;
    if (lock) {
      e.style.overflow = 'hidden';
    } else {
      e.style.overflow = '';
    }
    return () => {
      e.style.overflow = '';
    };
  }, [lock, element]);
}
