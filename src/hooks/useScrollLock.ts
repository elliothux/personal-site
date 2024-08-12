import { useEffect } from 'react';

export function useScrollLock(lock: boolean, element: HTMLElement = document.body) {
  useEffect(() => {
    if (lock) {
      element.style.overflow = 'hidden';
    } else {
      element.style.overflow = '';
    }
    return () => {
      element.style.overflow = '';
    };
  }, [lock, element]);
}
