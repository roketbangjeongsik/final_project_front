import { useEffect, useState } from 'react';

export const useCardsPerPage = (cardHeight = 120, offset = 200) => {
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const update = () => {
      const availableHeight = window.innerHeight - offset;
      const count = Math.floor(availableHeight / cardHeight);
      setCardsPerPage(count > 0 ? count : 1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [cardHeight, offset]);

  return cardsPerPage;
};
