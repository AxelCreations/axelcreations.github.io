import { useEffect } from 'react';

export const useBodyScrollLock = (locked: boolean): void => {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', locked);

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [locked]);
};