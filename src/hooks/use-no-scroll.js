import { useEffect } from 'react';

export const useNoScroll = visible => {
  useEffect(() => {
    const root = document.getElementById('root');

    if (visible) {
      root.classList.add('modal-fix');
    } else {
      root.classList.remove('modal-fix');
    }

    return () => root.classList.remove('modal-fix');
  }, [visible]);
};
