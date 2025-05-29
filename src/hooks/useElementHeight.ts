import { useEffect, useState } from 'react';

export const useElementHeight = (ref: React.RefObject<HTMLElement | null>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [ref]);

  return height;
};
